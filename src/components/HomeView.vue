<script setup lang="ts">
  import { ref } from 'vue';
  import { getUserInfo } from '@/api/demo';

  interface User {
    id: number;
    name: string;
  }

  const title = ref('模板项目首页');
  const user = ref<User | null>(null);

  const fetchUserInfo = async () => {
    try {
      const userInfo = await getUserInfo();
      user.value = userInfo;
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  };
</script>

<template>
  <div class="default-page">
    <!-- Header -->
    <header class="header">
      <h1>{{ title }}</h1>
      <p class="subtitle">欢迎体验 Vue3 + Vite + Element-Plus + Vue-Router + Pinia + Axios + Mock 🚀</p>
    </header>

    <!-- 用户信息卡片 -->
    <div v-if="user" class="card">
      <p>
        用户ID: <span>{{ user.id }}</span>
      </p>
      <p>
        用户名: <span>{{ user.name }}</span>
      </p>
      <!-- <button @click="fetchUserInfo">刷新用户信息</button> -->
      <el-button type="primary" @click="fetchUserInfo">加载用户信息</el-button>
    </div>

    <div v-else class="card">
      <p>用户信息未加载</p>
      <!-- <button @click="fetchUserInfo">加载用户信息</button> -->
      <el-button type="primary" @click="fetchUserInfo">加载用户信息</el-button>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2026 模板项目 | author BigLove</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  /* 整体背景渐变 + 居中布局 */
  .default-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #6b0f1a, #b91372, #f64c72);
    color: white;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 20px;
    animation: fadeIn 1s ease forwards;
    box-sizing: border-box;
  }

  /* Header */
  .header {
    text-align: center;
    margin-bottom: 30px;
  }
  .header h1 {
    font-size: 3rem;
    font-weight: 900;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.5rem;
  }
  .subtitle {
    font-size: 1.2rem;
    opacity: 0.8;
  }

  /* 卡片 */
  .card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px 30px;
    border-radius: 15px;
    margin-bottom: 20px;
    width: 300px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.8s ease forwards;
  }
  .card p {
    margin: 10px 0;
    font-size: 1.1rem;
  }
  .card span {
    font-weight: bold;
  }

  /* 按钮 */
  button {
    margin-top: 10px;
    padding: 8px 18px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background: linear-gradient(45deg, #ff416c, #ff4b2b);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition:
      transform 0.2s,
      box-shadow 0.2s;
  }
  button:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  }

  /* Footer */
  .footer {
    margin-top: 40px;
    opacity: 0.8;
    font-size: 0.9rem;
  }

  /* 动画 */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
