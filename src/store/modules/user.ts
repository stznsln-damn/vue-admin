import { LoginParams } from "~/api/system/models/userModel";

const useUserStore = defineStore("user", () => {
  const token = ref<string | null>(null);
  const userInfo = useLocalStorage("userInfo", null);

  function resetState() {
    token.value = null;
    userInfo.value = null;
  }

  async function login(params: LoginParams) {}

  return {
    token,
    userInfo,

    resetState,
  };
});

export default useUserStore;
