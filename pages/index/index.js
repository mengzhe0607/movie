//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "bnrUrl":[{
      "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603900182657&di=8b53b400baa4c8ed9f7033e106ca9a81&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170123%2Ff002c56cc08a44d283ae280e273e5f42_th.jpeg"
    },{
        "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603988236093&di=01d18adc641acaf53c1f4bbb1dfff7e3&imgtype=0&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2015%2F1130%2F20151130110414947277.jpg"
    },{
        "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603900398874&di=87b34e4dd693e5a374d476a46ae7ec8a&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fmovie%2F28318912b4b1c6224fc4d24459367022896847.jpg"
    },{
        "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603900481678&di=89e3876dd6674acfaa0f4fbbaa248a90&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb8014a90f603738d1c1f7a62bd1bb051f819ec1d.jpg"
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
