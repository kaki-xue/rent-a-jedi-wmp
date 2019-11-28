const app = getApp()
// pages/user/booking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;
    const userId = getApp().globalData.userId

    wx.request({
      url: `https://rent-a-jedi.herokuapp.com/api/v1/users/${userId}/bookings`,
      method: 'get',
      success(res) {
        const bookings = res.data.bookings;
        // this will format date to look DD November YYYY
        bookings.map(function (booking) {
          const startDate = new Date(booking.start_date)
          const endDate = new Date(booking.end_date)
          booking.start_date = startDate.toLocaleString('en-gb', { day: "numeric", month: "long", year: "numeric" })
          booking.end_date = endDate.toLocaleString('en-gb', { day: "numeric", month: "long", year: "numeric" })
        });
        page.setData({
          bookings: bookings
        });
        wx.hideToast();
      }
    });
    wx.request({
      url: `https://rent-a-jedi.herokuapp.com/api/v1/aliens/`,
      method: 'GET',
      success(res) {
        const alien = res.data;
        page.setData({
          alien: alien
        });
        wx.hideToast();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let page = this;
    const userId = getApp().globalData.userId
    
    wx.request({
      url: `https://rent-a-jedi.herokuapp.com/api/v1/users/${userId}/bookings`,
      method: 'get',
      success(res) {
        const bookings = res.data.bookings;
        // this will format date to look DD November YYYY
        bookings.map(function (booking) {
          const startDate = new Date(booking.start_date)
          const endDate = new Date(booking.end_date)
          booking.start_date = startDate.toLocaleString('en-gb', { day: "numeric", month: "long", year: "numeric" })
          booking.end_date = endDate.toLocaleString('en-gb', { day: "numeric", month: "long", year: "numeric" })
        });
        page.setData({
          bookings: bookings
        });
        console.log(page.data.forEach(function (booking) {
           console.log(booking, 'each booking in the array')
        }))
        wx.hideToast();
      }
    });
    
    wx.request({
      url: `https://rent-a-jedi.herokuapp.com/api/v1/bookings/`,
      method: 'GET',
      success(res) {
        // const alien = res.data;
        // page.setData({
        //   alien: alien
        // });
        wx.hideToast();
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})