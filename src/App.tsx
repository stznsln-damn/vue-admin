import { ConfigProvider } from "ant-design-vue";
import { useLocale } from "./composable/useLocale";
import { theme } from "ant-design-vue";

const App = defineComponent({
  setup() {
    const { getAntLocale } = useLocale();

    return () => (
      <ConfigProvider
        theme={{ algorithm: theme.darkAlgorithm }}
        locale={getAntLocale()}
      >
        <router-view></router-view>
      </ConfigProvider>
    );
  },
});

export default App;
