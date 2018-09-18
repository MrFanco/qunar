<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipper-img" :src="item.imgUrl">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination">
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwipper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  overflow: hidden;
  paddding-bottom: 31.25%;

  .swipper-img {
    width: 100%;
  }
}
</style>
