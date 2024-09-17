<template>
  <DarkLayout>
    <About></About>
  </DarkLayout>
</template>

<script>
import DarkLayout from '@/layouts/DarkLayout.vue';
import About from '../components/About.vue';

export default {
  name: "PageAbout",
  components: {
    DarkLayout,
    About
  }
}
</script>