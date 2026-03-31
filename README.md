# Vue 3 + TypeScript + Vite 项目模板

## 项目介绍

这是一个基于 Vue 3、TypeScript 和 Vite 构建的现代化前端项目模板，集成了多种常用工具和最佳实践，旨在帮助开发者快速搭建生产级别的 Vue 应用。

## 技术栈

- **前端框架**：Vue 3 + TypeScript
- **构建工具**：Vite
- **UI 库**：Element Plus
- **状态管理**：Pinia + 持久化插件
- **路由管理**：Vue Router
- **网络请求**：Axios（封装了错误处理和请求取消）
- **消息通信**：MQTT
- **样式预处理器**：SCSS
- **响应式布局**：PostCSS + px-to-viewport
- **代码规范**：ESLint + Prettier
- **模拟数据**：Mock.js

## 项目结构

```
├── mock/               # 模拟数据
├── public/             # 静态资源
├── src/
│   ├── api/            # 接口定义
│   ├── assets/         # 项目资源
│   ├── components/     # 组件
│   ├── router/         # 路由配置
│   ├── store/          # 状态管理
│   ├── utils/          # 工具函数
│   ├── App.vue         # 根组件
│   ├── global.style.scss  # 全局样式
│   └── main.ts         # 入口文件
├── .env.development    # 开发环境配置
├── .env.production     # 生产环境配置
├── eslint.config.js    # ESLint 配置
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 核心特性

### 1. 自动导入
- Element Plus 组件和图标自动导入
- 减少手动导入代码，提升开发效率

### 2. 响应式布局
- 集成 postcss-px-to-viewport，自动将 px 转换为 vw
- 适配不同屏幕尺寸，实现响应式设计

### 3. 网络请求封装
- 统一的请求拦截器和响应拦截器
- 支持请求取消，避免重复请求
- 统一的错误处理机制

### 4. 状态管理
- 使用 Pinia 进行状态管理
- 集成持久化插件，实现状态持久化

### 5. 路由管理
- 支持路由守卫
- 页面切换自动滚动到顶部

### 6. 模拟数据
- 集成 Mock.js，支持本地模拟数据
- 可通过环境变量控制是否启用

## 快速开始

### 方法一：使用脚手架（推荐）

1. 全局安装脚手架
   ```bash
   npm install -g biglove-vue-cli
   ```

2. 运行脚手架命令构建项目
   ```bash
   biglove-vue-cli
   ```

### 方法二：手动克隆

1. 克隆项目
   ```bash
   git clone <项目地址>
   cd vue-project-tempalte
   ```

2. 安装依赖
   ```bash
   pnpm install
   # 或
   npm install
   ```

3. 开发环境运行
   ```bash
   pnpm dev
   # 或
   npm run dev
   ```

4. 构建生产版本
   ```bash
   pnpm build
   # 或
   npm run build
   ```

5. 预览生产构建
   ```bash
   pnpm preview
   # 或
   npm run preview
   ```

## 环境变量配置

项目使用 Vite 的环境变量机制，支持不同环境的配置：

- `.env.development`：开发环境配置
- `.env.production`：生产环境配置

主要配置项：
- `VITE_API_BASE_URL`：API 基础 URL
- `VITE_API_TIMEOUT`：API 请求超时时间
- `VITE_USE_MOCK`：是否使用模拟数据

## 代码规范

项目使用 ESLint 和 Prettier 保证代码质量和一致性：

- 遵循 Vue 官方推荐的代码风格
- 自动格式化代码
- 检查代码质量

## 注意事项

1. 项目默认使用 pnpm 作为包管理器，建议优先使用 pnpm
2. 开发环境默认启用 Mock 数据，可通过修改 `.env.development` 中的 `VITE_USE_MOCK` 关闭
3. 生产环境默认关闭 Mock 数据
4. 项目使用 SCSS 作为样式预处理器，请确保已安装相关依赖

## 许可证

MIT License
