import Demo from './demo';
import Global from './global';

const globalStore = new Global();
const demoStore = new Demo(globalStore);

export default {
  globalStore,
  demoStore
};
