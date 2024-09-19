<template>
  <section class="home">
    <div class="container">
      <h1 :class="['poppins-thin']">Page home!</h1>
      <br><br>
      <img src="@/assets/images/image-2.jpg" alt="">
      <br><br>
      <div class="image"></div>
      <br><br>
      <Docs>
        {{ docsHome }}
      </Docs>
    </div>
  </section>
</template>

<script>
import Docs from './Docs.vue';

export default {
  name: "Home",
  comments: {
    Docs
  },
  data() {
    return {
      docsHome: Docs.__docs,
    }
  }
};
</script>

<!-- default css -->
<style>
.image {
  background-image: url("@/assets/images/image-2.jpg");
  background-size: contain;
  /* @/assets/images/image-2.jpg will be converted to js module require("@/assets/images/image-2.jpg") with css-loader */
  width: 100px;
  height: 100px;
}
</style>

<!-- pre-processor css -->
<style lang="scss">
body h1 {
  text-align: center;
}
</style>

<!-- scoped css -->
<style scoped>
h1 {
  background-color: black;
}
</style>