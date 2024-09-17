<template>
  <div class="container">
    <h1 :class="[$style.white, 'poppins-thin']">Page home!</h1>
    
    <img src="@/assets/images/image-2.jpg" alt="">

    <div class="image"></div>

    <div :class="$style.red">Module class</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this.$style);
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