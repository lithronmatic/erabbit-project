import request from '@/utils/request'

export const findAllCategory = () => {
  return request({
    url: '/home/category/head',
    method: 'get'
  })
}
