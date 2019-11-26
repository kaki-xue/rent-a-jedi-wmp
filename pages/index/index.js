//index.js
//获取应用实例
const app = getApp()

Page({

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  
  onLoad: function (options) {
 
    let page = this;
    wx.request({
      url: "http://localhost:3000/api/v1/aliens",
      method: 'GET',
      success(res) {
        const aliens = res.data.aliens;
        page.setData({
          aliens: aliens
        });
        console.log(aliens);

      wx.hideToast();
    }
   });
  },

  goToShow: function(event) {
    console.log(event.currentTarget.dataset.id);
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },

})
