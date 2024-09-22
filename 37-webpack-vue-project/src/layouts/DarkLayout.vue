<template>
  <div class="page page_dark">
    <HeaderSite />
    <main>
      <slot />
    </main>
    <FooterSite />
  </div>
</template>

<script>
import HeaderSite from "@/components/HeaderSite.vue";
import FooterSite from "@/components/FooterSite.vue";

export default {
  name: "DarkLayout",
  components: {
    HeaderSite,
    FooterSite
  }
}
</script>

<style></style>