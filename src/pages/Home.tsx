import { defineComponent } from "vue";

const Home = defineComponent({
  setup() {
    return () => (
      <div px-10 flex="~">
        你好啊
      </div>
    );
  },
});

export default Home;
