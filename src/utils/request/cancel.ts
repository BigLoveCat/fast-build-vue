const pendingMap = new Map<string, AbortController>();

function getKey(config: any) {
  return `${config.method}_${config.url}`;
}

export function addPending(config: any) {
  const key = getKey(config);

  if (pendingMap.has(key)) {
    const controller = pendingMap.get(key)!;
    controller.abort();
  }

  const controller = new AbortController();
  config.signal = controller.signal;

  pendingMap.set(key, controller);
}

export function removePending(config: any) {
  const key = getKey(config);
  pendingMap.delete(key);
}
