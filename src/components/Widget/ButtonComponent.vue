<template>
  <button :type="buttonType" :class="buttonStyle">
    {{buttonName}}
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true,
    },
    buttonStyle: {
      type: String,
      required: true,
    },
    buttonName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>