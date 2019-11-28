//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },

  formSubmit:function(e){
    let page = this;
   const query = e.detail.value.query;
   console.log(query);
   wx.request({
     url:`https://rent-a-jedi.herokuapp.com/api/v1/aliens?query=${query}`,
     method:"get",
     success: function(res) {
      page.setData ({
        aliens: res.data.aliens
      })
     }
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
  gotoFav: function (event) {
    console.log(event)
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    })
  },

  goToShow: function(event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    })
  },
})
