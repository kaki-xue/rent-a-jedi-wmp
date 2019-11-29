// pages/booking/booking.js
const app = getApp()

const date = new Date()
const years = []
const months = []
const days = []

for(let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({

  /**
   * Page initial data
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 11, 11],
    startDate: 'Press here',
    endDate: 'Press here'
  },

  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },

  bindStartDateChange: function (e) {
    this.setData({
      startDate: e.detail.value
    })
  },


  bindEndDateChange: function (e) {
    this.setData({
      endDate: e.detail.value
    })
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
        page.setData({
          alien: alien
        });
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
    const endDate = page.data.endDate
    const startDate = page.data.startDate
    const alienId = page.data.alien.id
    const userId = 31
    
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
          url: `https://rent-a-jedi.herokuapp.com/api/v1/bookings`, 
          method: 'POST',
          data: booking,
          success(result){
            wx.switchTab({
              url: `/pages/user/booking?id=${userId}`,
            })  
          }
        })
      }
    })
  }
})