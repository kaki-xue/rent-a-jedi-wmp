//app.js
App({
  onLaunch: function () {
    const host = 'https://rent-a-jedi.herokuapp.com/'
    console.log('beginning login')

 04d6e915a6213a741f7b21f1c576db0b8e35603a
    wx.login({
      success: (res) => {
        console.log('result of initial login', res)
        // insert next code here
    wx.request({
      url: host + 'login',
      method: 'post',
      data: {
        code: res.code
      },
      // insert next code here
      success: (res) => {
        console.log('result of login',res)
        this.globalData.userId = res.data.userId
      }
    })
      }
    })
  },
  globalData: {}
})
