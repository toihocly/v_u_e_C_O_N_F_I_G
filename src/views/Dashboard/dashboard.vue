<template>
  <div :class="$style.root">
    <TopBar />
    <SliderBar />
    <Main />
    <bottomBar />
  </div>
</template>

<script>
import {
  TopBar,
  BottomBar,
  SliderBar,
  Main
} from "@/views/Dashboard/components";

export default {
  components: { TopBar, BottomBar, SliderBar, Main },
  props: {
    msg: {
      type: String,
      default: "",
      require: false
    }
  }
};
</script>

styled
<style module lang="scss" scoped>
.root {
  display: grid;
  height: 100vh;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 80px 1fr 60px;
}
</style>
