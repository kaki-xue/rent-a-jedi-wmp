// pages/show/show.js
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
      url: `https://rent-a-jedi.herokuapp.com/api/v1/aliens/${options.id}`,
      method: 'GET',
      success(res) {
        const alien = res.data;
        page.setData(
          alien
        );
        wx.hideToast();
      }
    });
  },

  goToBooking: function (event) {
   let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/booking/booking?id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

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

  }
})