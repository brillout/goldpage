<template>
  <div class="container">Hello {{bundler}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      bundler: "Parcel"
    };
  }
});
</script>

<style scoped>
.container {
  color: green;
}
</style>
