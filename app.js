//app.js
App({
  onLaunch: function () {
    const host = 'https://rent-a-jedi.herokuapp.com/'
    console.log('beginning login')
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