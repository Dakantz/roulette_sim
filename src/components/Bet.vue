<template>
  <div id="coins">
    <div
      v-for="n in times"
      :key="n"
      class="coin"
      :style="styleForCoin(n)"
    >
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "coins",
  props: ["times"],
  methods: {
    styleForCoin(n) {
      return {
        left: (n-1) * 2 + "px",
        top: (n-1) * 2 + "px",
        "z-index": +10 + n
      };
    }
  }
};
</script>

<style>
#circle {
  position: absolute;
}
.coin {
  position: absolute;
  background-color: gold;
  border-radius: 25%;
  border: 1px solid darkgoldenrod;
  width: 2vw;
  height: 2vw;
}
</style>
