// aliens/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
goToAdd: function(e){
  console.log(e);
  wx.navigateTo({
    url: '/aliens/new/new'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let page = this;
      wx.request({
        url: "https://rent-a-jedi.herokuapp.com/api/v1/users/22/aliens",
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
  
   

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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