Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onTap:function(){
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })
    
    wx.redirectTo({
      url: '../posts/posts',
    })
    // console.log("onTap");
  },

  // onContainerTap:function(){
  //   console.log("onContainerTap");
  // },

  // onSubTap: function () {
  //   console.log("onSubTap");
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    console.log('welcom page is onhide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('welcom page is unload')
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