<template>
  <div :class="$style.root">
    <div :class="$style.topbar">
      <img alt="" src="@/assets/images/logo.png" />
      <nav>
        <li>home</li>
        <li>product</li>
        <li>about</li>
        <li>cart</li>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";

export default {
  data() {
    return {
      Logo
    };
  }
};
</script>

<style module lang="scss" scoped>
.root {
  grid-column-start: 1;
  grid-column-end: 3;
  background: lightgreen;
  .topbar {
    display: grid;
    grid-template-columns: 60% 40%;
    img {
      height: 80px;
      width: auto;
    }
    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      height: 60%;
      margin: auto 0;
      li {
        padding: 8px 12px;
        text-transform: capitalize;
        color: white;
      }
    }
  }
}
</style>
