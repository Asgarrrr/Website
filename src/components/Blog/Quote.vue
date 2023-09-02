<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: "information",
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    icon: {
      type: String,
      required: false,
      default: "",
    },
  },
})
</script>

<template>
    <hr class="separator" />
</template>

<style lang="scss" scoped>

  .separator {
    position:relative;
    width:100%;

    margin:50px auto;
    border:0;
    height:14.36px;
    background-image: url( "https://cdn.discordapp.com/attachments/1071595350437134456/1129896454996111390/svgviewer-png-output_1.png" );
    background-repeat:repeat-x;
    background-position:center;
  }

</style>
