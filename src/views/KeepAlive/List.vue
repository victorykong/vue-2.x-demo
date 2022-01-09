<template>
  <div>
    <Input v-model="keyword" />
    <Button @click="$router.push('/keep-alive/detail')">To detail</Button>
  </div>
</template>
<script>
import { Button, Input } from "element-ui";

export default {
  name: "List",
  components: {
    Button,
    Input
  },

  data() {
    return {
      page: 1,
      keyword: ""
    };
  },

  mounted() {
    this.fetchList();
  },

  activated() {
    console.log("[List]: activated");
  },

  deactivated() {
    console.log("[List]: deactivated");
  },

  methods: {
    fetchList() {
      console.log("[List]: fetchList", this.keyword);
    }
  }
};
</script>
