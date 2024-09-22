<template>
  <DarkLayout>
    <h1>Custom block page</h1>
    <br><br>
    <CustomBlock />
    <br>
    <br>
    <p>This is CustomBlock docs: {{ docs }}</p>
  </DarkLayout>
</template>

<script>
import DarkLayout from "@/layouts/DarkLayout.vue"
import CustomBlock from '@/components/CustomBlock.vue';

export default {
  name: "PageCustom",
  components: {
    CustomBlock,
    DarkLayout
  },
  data() {
    return {
      docs: CustomBlock.__docs,
    }
  }
}
</script>

<style scoped>
  p {
    text-align: center;
  }
</style>