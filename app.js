//app.js
App({
  onLaunch: function () {
    const host = 'http://localhost:3000/'
    console.log('beginning login')
    wx.login({
      success: (res) => {
        // insert next code here
    wx.request({
      url: host + 'login',
      method: 'post',
      data: {
        code: res.code
      },
      // insert next code here
      success: (res) => {
        this.globalData.userId = res.data.userId
      }
    })
      }
    })
  },
  globalData: {}
})