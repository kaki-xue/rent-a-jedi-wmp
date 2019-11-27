//index.js
//获取应用实例
const app = getApp()

Page({

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  
  onLoad: function (options) {
    let page = this;
    wx.request({
      url: "https://rent-a-jedi.herokuapp.com/api/v1/aliens",
      method: 'GET',
      success(res) {
        const aliens = res.data.aliens;
        page.setData({
          aliens: aliens
        });

      wx.hideToast();
    }
   });
  },


  goToShow: function(event) {
    console.log(event)
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    })
  },
})
