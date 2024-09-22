<template>
  <div class="about">
    <div class="container">
      <h1>About</h1> <br>
      <div :class="$style.red">
        Moduled class if moduled mode on in wepback
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
}
</script>

<style module>
.red {
  color: red;
}

.blue {
  color: blue;
}

.white {
  color: white;
}
</style>