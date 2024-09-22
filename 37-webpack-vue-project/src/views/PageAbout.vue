<template>
  <DarkLayout>
    <AboutComponent />
  </DarkLayout>
</template>

<script>
import DarkLayout from '@/layouts/DarkLayout.vue';
import AboutComponent from '../components/AboutComponent.vue';

export default {
  name: "PageAbout",
  components: {
    DarkLayout,
    AboutComponent
  }
}
</script>