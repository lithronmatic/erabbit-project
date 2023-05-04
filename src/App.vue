<template>
  <div>
    <div>
      {{$store.state.user.profile.account}}
    </div>
    <button @click="$store.commit('user/setUser', {account: 'zhousg'})">设置用户信息</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
