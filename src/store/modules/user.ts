import { LoginParams } from "~/api/system/models/userModel";
import { PageEnum } from "~/enums/pageEnum";
import router from "~/router";

const useUserStore = defineStore("user", () => {
  const token = ref<string | null>(null);
  const userInfo = useLocalStorage("userInfo", null);

  function resetState() {
    token.value = null;
    userInfo.value = null;
  }

  async function login(params: LoginParams) {}

  function logout() {
    resetState();
    router.push(PageEnum.LOGIN_PATH);
  }

  return {
    token,
    userInfo,

    resetState,
    logout,
  };
});

export default useUserStore;
