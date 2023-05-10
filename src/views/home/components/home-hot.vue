<template>
  <div class="home-new">
    <HomePannel title="人气推荐" sub-title="人气爆款 不容错过">
      <ul class="goods-list">
        <li v-for="item in goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <p class="name">{{item.title}}</p>
            <p class="desc">{{item.alt}}</p>
          </RouterLink>
        </li>
      </ul>
    </HomePannel>
  </div>
</template>

<script>
import HomePannel from '@/views/home/components/home-pannel'
import { findHot } from '@/api/home'
import { onMounted, ref } from 'vue'
export default {
  name: 'HomeNew',
  components: {
    HomePannel
  },
  setup () {
    const goods = ref([])
    onMounted(() => {
      findHot().then(data => {
        console.log('人气爆款', data.data.result)
        goods.value = data.data.result
      })
    })

    return {
      goods
    }
  }
}
</script>

<style scoped lang='less'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
