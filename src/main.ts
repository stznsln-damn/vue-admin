import App from "./App";
import setupApp from "./logics/setupApp";
import "uno.css";

const app = createApp(App);
setupApp(app);
app.mount("#app");
