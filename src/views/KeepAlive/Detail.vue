<template>
  <div>detail</div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log("[Detail]: mounted");
  },
  activated() {
    console.log("[Detail]: activated");
  },
  deactivated() {
    console.log("[Detail]: deactivated");
  }
};
</script>
