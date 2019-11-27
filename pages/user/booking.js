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
    console.log('options', options)
    const lastPage = getCurrentPages().slice(-1)[0]
    console.log('last page', lastPage)
    wx.request({
      url: `https://rent-a-jedi.herokuapp.com/api/v1/users/15/bookings`,
      method: 'GET',
      success(res) {
        const bookings = res.data.bookings;
        console.log('bookings', bookings)
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
        console.log(page.data.alien)
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