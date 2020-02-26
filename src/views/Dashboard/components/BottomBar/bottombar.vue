<template>
  <div :class="$style.root">bottom bar</div>
</template>

<script>
export default {};
</script>

<style module lang="scss" scoped>
.root {
  grid-column-start: 1;
  grid-column-end: 3;
  background: lightgreen;
}
</style>
