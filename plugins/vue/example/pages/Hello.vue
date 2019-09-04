<template>
  <div>
    Hello {{isReversed?nameReversed:name}}, welcome to <code>Goldpage</code>.
    <br/>
    <button v-on:click="toggleReverse">Reverse name</button>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ['name', 'nameReversed'],
  data() {
    return {
      isReversed: false,
      bundler: "Parcel"
    };
  },
  methods: {
    toggleReverse: function() {
      this.isReversed = !this.isReversed;
    },
  },
};
</script>

<style scoped>
code {
  color: gold;
}
</style>
