<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen"
  >
    <Header />

    <div class="flex-grow">
      <main role="main">
        <slot />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Footer,
  }
};
</script>

<style src="../css/main.css" />
