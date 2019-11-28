// aliens/new/new.js
const app = getApp();
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
  const page = this.page

  },
  // submit: function (event) {
  //   console.log(event),
  //     let newAlien = {};
  //   newAlien.name = event.detail.value.name
  //   newAlien.skill = event.detail.value.skill
  //   newAlien.descripton = event.detail.value.description
  //   newAlien.price_per_day = event.detail.value.price_per_day
  //   newAlien.image = event.detail.value.image
  //   wx.request({
  //     url: `https://rent-a-jedi.herokuapp.com/api/v1/usersid?=${id}/aliens`,
  //     method: 'post',
  //     data: newAlien,
  //     success: function (res) {
  //       const id = res.data.id
  //       console.log(id);
  //       wx.reLaunch({
  //         url: `/pages/index/index`,
  //       })
  //     }
  //   })

  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('global user id', app.globalData.userID);
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