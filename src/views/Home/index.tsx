import { defineComponent } from 'vue';

const Home = defineComponent({
  name: 'Home',
  setup() {
    return () => <div>Hello World</div>;
  },
});

export default Home;
