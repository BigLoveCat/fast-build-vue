// mqttClient.ts
import mqtt from 'mqtt';
import type {
  MqttClient as MqttClientType,
  IClientOptions,
  IConnackPacket,
  ISubscriptionGrant
} from 'mqtt';

type MessageCallback = (topic: string, payload: string) => void;
type EventCallback = () => void;
type ErrorCallback = (error: Error) => void;

interface MqttOptions extends IClientOptions {
  url: string;
  reconnectPeriod?: number; // 自动重连间隔
}

export class MqttClient {
  private client: MqttClientType | null = null;
  private readonly url: string;
  private readonly options: IClientOptions;
  private reconnectPeriod: number;

  private messageCallback?: MessageCallback;
  private connectCallback?: EventCallback;
  private closeCallback?: EventCallback;
  private errorCallback?: ErrorCallback;

  private isConnected: boolean = false;

  constructor(opts: MqttOptions) {
    this.url = opts.url;
    this.options = { ...opts };
    this.reconnectPeriod = opts.reconnectPeriod ?? 5000; // 默认 5 秒自动重连
  }

  /** 设置连接成功回调 */
  onConnect(callback: EventCallback) {
    this.connectCallback = callback;
  }

  /** 设置断开回调 */
  onClose(callback: EventCallback) {
    this.closeCallback = callback;
  }

  /** 设置错误回调 */
  onError(callback: ErrorCallback) {
    this.errorCallback = callback;
  }

  /** 设置消息回调 */
  onMessage(callback: MessageCallback) {
    this.messageCallback = callback;
  }

  /** 连接 MQTT Broker */
  connect() {
    if (this.client) {
      console.warn('MQTT client is already created.');
      return;
    }

    this.client = mqtt.connect(this.url, this.options);

    this.client.on('connect', (packet: IConnackPacket) => {
      this.isConnected = true;
      console.log('MQTT connected:', packet);
      this.connectCallback?.();
    });

    this.client.on('close', () => {
      this.isConnected = false;
      console.log('MQTT disconnected');
      this.closeCallback?.();
      // 自动重连
      setTimeout(() => this.reconnect(), this.reconnectPeriod);
    });

    this.client.on('error', (err: Error) => {
      console.error('MQTT error:', err);
      this.errorCallback?.(err);
    });

    this.client.on('message', (topic: string, payload: Buffer) => {
      const msg = payload.toString();
      this.messageCallback?.(topic, msg);
    });
  }

  /** 自动重连 */
  private reconnect() {
    if (!this.isConnected) {
      console.log(`Reconnecting to MQTT in ${this.reconnectPeriod}ms...`);
      this.client?.end(true); // 强制断开
      this.client = null;
      this.connect();
    }
  }

  /** 订阅主题 */
  subscribe(topic: string | string[], qos: 0 | 1 | 2 = 0) {
    if (!this.client) {
      console.error('MQTT client not connected');
      return;
    }
    this.client.subscribe(topic, { qos }, (err: Error | null, granted?: ISubscriptionGrant[]) => {
      if (err) {
        console.error('MQTT subscribe error:', err);
        this.errorCallback?.(err);
      } else {
        // console.log('MQTT subscribed:', granted);
      }
    });
  }

  /** 取消订阅 */
  unsubscribe(topic: string | string[]) {
    if (!this.client) return;
    this.client.unsubscribe(topic, err => {
      if (err) {
        console.error('MQTT unsubscribe error:', err);
        this.errorCallback?.(err);
      } else {
        console.log('MQTT unsubscribed:', topic);
      }
    });
  }

  /** 发布消息 */
  publish(topic: string, message: string, qos: 0 | 1 | 2 = 0, retain: boolean = false) {
    if (!this.client || !this.isConnected) {
      console.error('MQTT client not connected, cannot publish');
      return;
    }
    this.client.publish(topic, message, { qos, retain }, (err?: Error) => {
      // console.log('MQTT published:', err);
      if (err) {
        console.error('MQTT publish error:', err);
        this.errorCallback?.(err);
      }
    });
  }

  /** 断开连接 */
  disconnect() {
    if (!this.client) return;
    this.client.end(true, () => {
      this.isConnected = false;
      this.client = null;
      console.log('MQTT client manually disconnected');
    });
  }
}
