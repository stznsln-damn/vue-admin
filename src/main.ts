import "uno.css";
import "ant-design-vue/dist/reset.css";
import "nprogress/nprogress.css";
import "~/styles";

import App from "./App";
import setupApp from "./logics/setupApp";

const app = createApp(App);
setupApp(app);
app.mount("#app");
