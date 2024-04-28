import { Button } from "ant-design-vue";
import { defineComponent } from "vue";

const Login = defineComponent({
  setup() {
    return () => {
      return (
        <div class="login-page" w="full" h="full">
          <Button type="primary">你好啊 </Button>
        </div>
      );
    };
  },
});

export default Login;
