// pages/booking/booking.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    wx.request({
      url: `http://localhost:3000/api/v1/aliens/${options.id}`,
      method: 'GET',
      success(res) {
        const alien = res.data;
        page.setData({
          alien: alien
        });
        console.log(page.data)
        wx.hideToast();
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  formSubmit: function (e) {
    let page = this;
    const endDate = e.detail.value.end
    const startDate = e.detail.value.start
    const alienId = page.data.alien.id
    const userId = page.data.alien.user_id

    const booking = {
      user_id : userId,
      alien_id : alienId,
      start_date : startDate,
      end_date : endDate
    } 

    wx.showModal({
      title: 'The Force Is With You!',
      content: 'See your booking',
      confirmText: "Go!",
      showCancel: false,
      success: function (res) {
        wx.request({
          url: `http://localhost:3000/api/v1/bookings`,
          method: 'POST',
          data: booking,
          success(result){
            wx.navigateTo({
              url: `/pages/user/booking?id=${userId}`,
            })  
          }
        })
      }
    })
  }
})