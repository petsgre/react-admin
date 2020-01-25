export default [
  // test
  {
    url: '/test',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]