<template>
  <!-- <nav>顶部通栏</nav> -->
  <AppTopnav />
  <!-- 吸顶头部 -->
  <AppHeaderSticky />
  <!-- <header>头部</header> -->
  <AppHeader />
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <!-- <footer>底部</footer> -->
  <AppFooter />
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppHeaderSticky from '@/components/app-header-sticky'
import AppFooter from '@/components/app-footer'

import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnav,
    AppHeader,
    AppHeaderSticky,
    AppFooter
  },

  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>

</style>
