<template>
  <div ref="target" class="home-new">
    <HomePannel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><XtxMore path="/" /></template>
      <ul class="goods-list">
        <li v-for="item in goods" :key="item.id">
          <RouterLink :to="`/product/${item.id}`">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </RouterLink>
        </li>
      </ul>
    </HomePannel>
  </div>
</template>

<script>
import HomePannel from '@/views/home/components/home-pannel'
import { findNew } from '@/api/home'
// import { ref } from 'vue'
// import { useIntersectionObserver } from '@vueuse/core'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeNew',
  components: {
    HomePannel
  },
  setup () {
    // const goods = ref([])
    // const box = ref(null)

    // const { stop } = useIntersectionObserver(
    //   box,
    //   ([{ isIntersecting }]) => {
    //     if (isIntersecting) {
    //       stop()
    //       findNew().then(data => {
    //         goods.value = data.data.result
    //       })
    //     }
    //   }
    // )

    const { target, result } = useLazyData(findNew)

    return {
      goods: result,
      target
    }
  }
}
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
