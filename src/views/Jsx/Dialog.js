import Vue from "vue";
import { Dialog } from "element-ui";

const Dialog = Vue.extend({
  name: "Dialog",

  props: {
    visible: Boolean
  },

  render() {
    return <Dialog visible={visible}>内容</Dialog>;
  }
});

export default Dialog;
