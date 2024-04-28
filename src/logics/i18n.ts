import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

// 浏览器默认语言
let defaultLang = navigator.language || "en";

const i18n = createI18n({
  locale: defaultLang,
  messages,
});

export default i18n;
