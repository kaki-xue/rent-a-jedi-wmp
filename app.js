//app.js
const AV = require('./utils/av-weapp-min.js')
const config = require('./utils/key.js')
// Initialization of the app

AV.init({
  appId: config.appId,
  appKey: config.appKey,
});

App({
  onLaunch: function () {
    const host = 'https://rent-a-jedi.herokuapp.com/'
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
