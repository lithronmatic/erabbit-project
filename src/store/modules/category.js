// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, headCategory) {
      state.list = headCategory
    },
    show (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    hide (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  actions: {
    async getList (context) {
      const { data } = await findAllCategory()
      // 给一级分类加上一个控制二级分类显示隐藏的数据open
      data.result.forEach(item => {
        item.open = false
      })
      console.log(data.result)
      context.commit('setList', data.result)
    }
  }
}
