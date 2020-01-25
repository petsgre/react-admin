import request from '@/api/request'

export function login(name: string, password: string) {
  return request({
    url: `/user/login`,
    method: 'post',
    data: {
      name,
      password
    }
  })
}