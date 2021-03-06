Page({
  data: {
    category: [
      {
        name: '果味',
        id: 'guowei'
      },
      {
        name: '蔬菜',
        id: 'shucai'
      },
      {
        name: '炒货',
        id: 'chaohuo'
      },
      {
        name: '点心',
        id: 'dianxin'
      },
      {
        name: '粗茶',
        id: 'cucha'
      },
      {
        name: '淡饭',
        id: 'danfan'
      }
    ],
    curIndex: 0,
    detail: [],
    isScroll: false,
    toView:'guowei'//scrollView toView功能，自动滚到某个子页面

  }, 
  onLoad: function (options) {
    /** 
    * 获取系统信息 
    */
    wx.getSystemInfo({
      success:(res=>{
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      })
    });
  },
  onReady() {
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success: (res) => {
        console.log(res);
        this.setData({
          detail: res.data,
          isScroll: true 
        })
      }
    })
  },
  
  switchTab(e){
    this.setData({
      curIndex:e.target.dataset.index,
      toView:e.target.dataset.id
    })
  },
  bindChange(e) {
    var that = this;
    if (this.data.curIndex === e.target.dataset.index) {
      return false;
    } else {
      that.setData({
        curIndex: e.target.dataset.index
      })
    }
  },
})
