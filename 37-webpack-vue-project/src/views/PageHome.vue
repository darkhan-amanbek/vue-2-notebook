<template>
  <DarkLayout>
    <HomeComponent />
  </DarkLayout>
</template>

<script>
import DarkLayout from "@/layouts/DarkLayout.vue";
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "PageHome",
  components: {
    DarkLayout,
    HomeComponent
  }
}
</script>