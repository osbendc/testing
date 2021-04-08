<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <template #prevArrow="arrowOption">
        <div class="custom-arrow">
          test prev
        </div>
      </template>
      <div class="test" v-for="img in imgs">
        <div class="test-img" :style="{ backgroundImage: 'url(' + img + ')'}"></div>
      </div>
      <template #nextArrow="arrowOption">
        <div class="custom-arrow">
          test next
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import '../css/vue-slick-carousel-theme.css';
import '../css/vue-slick-carousel.css';

export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        arrows: true,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      imgs: [
        'https://saboryestilo.com.mx/wp-content/uploads/2019/03/tipos-de-vinos-1200x720.jpg',
        'https://novili.com.co/blog/wp-content/uploads/2018/05/vinosnobles-blog-cuerpo-del-vino-1-1170x786.jpg',
        'https://saboryestilo.com.mx/wp-content/uploads/2019/03/tipos-de-vinos-1200x720.jpg'
      ]
    };
  },
};
</script>

<style>
  .test img {
    width: 100%;
  }
  .slick-list {
    height: 60vh !important;
  }

  .test-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }

  .test-img:focus {
    outline: none;
  }

  .slick-prev {
    left: 2%;
    z-index: 9999;
  }

  .slick-next {
    right: 2%;
  }
</style>