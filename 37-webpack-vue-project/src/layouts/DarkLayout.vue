<template>
  <div class="page page_dark">
    <Header></Header>
    <main>
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DarkLayout",
  components: {
    Header,
    Footer
  }
}
</script>

<style></style>