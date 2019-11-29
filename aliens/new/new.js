// aliens/new/new.js
const app = getApp()
const AV = require('../../utils/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },
  formSubmit: function (event) {
    let page = this;
    let aliens = {};
    aliens.name = event.detail.value.input_1
    aliens.skill = event.detail.value.input_2
    aliens.description = event.detail.value.input_3
    aliens.price_per_day = event.detail.value.input_4
    aliens.image = page.data.imageUrl

    wx.request({
      url: 'https://rent-a-jedi.herokuapp.com/api/v1/users/29/aliens',
      method: 'post',
      data: aliens,
      success: function (res) {
        console.log("success",res);
        const id = res.data.id
        wx.reLaunch({
          url: `/aliens/index/index`,
        })
      }
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    console.log(options);
  const page = this.page
  },
 
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

  },
  
  takePhoto: function () {
    let page = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePath = res.tempFilePaths[0];
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => {
          const imageUrl = file.url()
            page.setData({
              imageUrl: imageUrl
            });
            console.log('image URL', page.data.imageUrl)
          }
        ).catch(console.error);
      }
    });
  }
})