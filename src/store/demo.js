import { action, toJS, runInAction, observable } from "mobx";
import { getList, getDetail } from '../services/demo';

class Demo {
  @observable list = [];
  @observable activeItem = null;
  @observable detail = {};

  @action.bound
  async getList() {
    try {
      const result = await getList();
      runInAction(() => {
        console.log('list result ', result);
        this.list = result;
      })
    } catch (error) {
      console.log('error ', error);
    }
  }
  @action.bound
  async getDetail() {
    try {
      const result = await getDetail();
      runInAction(() => {
        console.log('list result ', result);
        this.detail = result;
      })
    } catch (error) {
      console.log('error ', error);
    }
  }
  @action.bound
  setActive(info) {
    this.activeItem = info;
  }
  @action.bound
  clearActive() {
    this.activeItem = null;
  }
  @action.bound
  addItem(options) {
    const { data, onSucc } = options;
    const curList = toJS(this.list);
    curList.unshift(data);
    this.list = curList;
    onSucc && onSucc();
  }
  @action.bound
  delItem(info) {
    const curList = toJS(this.list);
    const targetIdx = curList.findIndex(item => item.key === info.key);
    curList.splice(targetIdx, 1);
    this.list = curList;
    // this.list = curList;
  }
  @action.bound
  updateItem(info) {
    const curList = toJS(this.list);
    const targetIdx = curList.findIndex(item => item.key === info.key);
    curList.splice(targetIdx, 1, info);
    this.list = curList;
  }
}
export default Demo;
