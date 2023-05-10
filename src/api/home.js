import request from '@/utils/request'
export const findBrand = (limit) => {
  return request({
    url: '/home/brand',
    method: 'get',
    params: { limit }
  })
}

export const findBanner = () => {
  return request({
    url: '/home/banner',
    method: 'get'
  })
}

export const findNew = () => {
  return request({
    url: '/home/new',
    method: 'get'
  })
}

export const findHot = () => {
  return request({
    url: '/home/hot',
    method: 'get'
  })
}

// 商品区块
export const findGoods = () => {
  return request({
    url: '/home/goods',
    method: 'get'
  })
}

// 最新专题
export const findSpecial = () => {
  return request({
    url: '/home/special',
    method: 'get'
  })
}
