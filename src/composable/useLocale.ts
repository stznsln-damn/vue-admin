import dayjs from "~/utils/dayjs";
import { useStorageLocal } from "./useStorageLocal";
import { CacheEnum } from "~/enums/cacheEnum";
import zhCN from "ant-design-vue/locale/zh_CN";
import enUS from "ant-design-vue/locale/en_US";

const antLocaleMap = {
  "zh-cn": zhCN,
  en: enUS,
};

export function useLocale() {
  const locale = useStorageLocal(CacheEnum.LOCALE_KEY, navigator.language);

  function getAntLocale() {
    return antLocaleMap[locale.value];
  }

  return { locale, getAntLocale };
}
