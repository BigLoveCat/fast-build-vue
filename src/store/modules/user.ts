// store/modules/user.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface UserInfo {
  id: number;
  name: string;
}

export const useUserStore = defineStore(
  "user",
  () => {
    // state
    const token = ref<string>("");
    const userInfo = ref<UserInfo | null>(null);

    // getter
    const isLogin = computed(() => !!token.value);

    // action
    function setToken(val: string) {
      token.value = val;
      localStorage.setItem("token", val);
    }

    function setUserInfo(user: UserInfo) {
      userInfo.value = user;
    }

    function logout() {
      token.value = "";
      userInfo.value = null;
      localStorage.removeItem("token");
    }

    // 必须 return
    return {
      token,
      userInfo,
      isLogin,
      setToken,
      setUserInfo,
      logout,
    };
  },
  {
    persist: true,
  },
);
