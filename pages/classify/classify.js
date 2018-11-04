Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "全部",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '百事可乐',
              image: "http://img.tukuchina.cn/images/front/v/62/7e/23237130633.jpg"
            },
            {
              child_id: 2,
              name: '乡村基',
              image: "http://img.tukuchina.cn/images/front/v/06/4e/101428452f073f9c064e.jpg"
            },
            {
              child_id: 3,
              name: '面包',
              image: "http://img.tukuchina.cn/images/front/v/98/43/235557251198.jpg"
            },
            {
              child_id: 4,
              name: '二锅头',
              image: "http://img.tukuchina.cn/images/front/v/8c/0b/2259127458.jpg"
            },
            {
              child_id: 5,
              name: '巧克力',
              image: "http://img.tukuchina.cn/images/front_pic2/v/d9/56/1047119179.jpg"
            },
            {
              child_id: 6,
              name: '四川青椒',
              image: "http://img.tukuchina.cn/images/front/v/05/77/226372430.jpg"
            },
            {
              child_id: 7,
              name: '夏威夷果',
              image: "http://img.tukuchina.cn/images/front/v/6d/c1/2312220177.jpg"
            },
            {
              child_id: 8,
              name: '心相印纸巾',
              image: "http://img.tukuchina.cn/images/front_pic2/v/45/a7/1253024674.jpg"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "饮品",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '百事可乐',
              image: "http://img.tukuchina.cn/images/front/v/62/7e/23237130633.jpg"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "方便速食",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '乡村基',
              image: "http://img.tukuchina.cn/images/front/v/06/4e/101428452f073f9c064e.jpg"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "饼干糕点",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '面包',
            image: "http://img.tukuchina.cn/images/front/v/98/43/235557251198.jpg"
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "酒类",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '二锅头',
            image: "http://img.tukuchina.cn/images/front/v/8c/0b/2259127458.jpg"
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: "糖果休食",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '巧克力',
            image: "http://img.tukuchina.cn/images/front_pic2/v/d9/56/1047119179.jpg"
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: "调料干货",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '四川青椒',
            image: "http://img.tukuchina.cn/images/front/v/05/77/226372430.jpg"
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: "坚果炒货",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '夏威夷果',
            image: "http://img.tukuchina.cn/images/front/v/6d/c1/2312220177.jpg"
          }
        ]
      },
      {
        cate_id: 9,
        cate_name: "纸制品",
        ishaveChild: true,
        children: [
          {
            child_id: 8,
            name: '心相印纸巾',
            image: "http://img.tukuchina.cn/images/front_pic2/v/45/a7/1253024674.jpg"
          }
        ]
      },
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})

