<template>
  <div>
    <h1>Page home!</h1>
    <img src="@/assets/images/image-1.jpg" alt="">
    <div class="image"></div>
  </div>
</template>

<script>
import imageFirst from "@/assets/images/image-1.jpg";

console.log(imageFirst);


export default {
  name: "Home",
};
</script>

<style>
  h1 {
    color: #34495e;
    font-family: sans-serif;
  }

  .image {
    background-image: url("@/assets/images/image-2.jpg");
    width: 100px;
    height: 100px;
  }
</style>