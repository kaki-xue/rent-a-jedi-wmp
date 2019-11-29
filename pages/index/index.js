//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575011123963&di=9c2cc91af1b9b455558d0b1630c67882&imgtype=0&src=http%3A%2F%2Fcdn2.hbimg.cn%2Fstore%2Fmj_wm%2Fmeijus%2F0%2F7%2FD525A1C9B6B5FDB6C48988851A.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2194772323,258680713&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1565116267,39322172&fm=26&gp=0.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
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
    console.log("event",event)
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
