<template>
  <DarkLayout>
    <Home></Home>
  </DarkLayout>
</template>

<script>
import DarkLayout from "@/layouts/DarkLayout.vue";
import Home from "@/components/Home.vue";

export default {
  name: "PageHome",
  components: {
    DarkLayout,
    Home
  }
}
</script>