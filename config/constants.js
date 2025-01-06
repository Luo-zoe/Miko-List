let config = {
    Name: "苏米可-Miko", // 主页名字
  
    BiliLiveRoomID: "", // 直播间id
  
    NetEaseMusicId: "", // 网易云音乐id
    QQMusicId: "", // QQ音乐id
    Footer: "Github",
  
    Cursor: false, // 使用自定义光标图片
  
    LanguageCategories: ["英语", "日语", "韩语"], // 语言分类
    RemarkCategories: ["说唱", "戏腔", "儿歌", "推荐"], // 标签分类
  
    BannerTitle: "米可-Miko！", // banner 标题
  
    BannerContent: ["喜欢米可，就请多多支持叭"
    ],
  
    // 自定义按钮 （可以复制生成更多）
    CustomButtons: [
      {
        link: "https://www.popibox.cn/u/8mayfv4c",
		name: "匿名提问箱",
        image: "/assets/icon/pome.png",
        },


      {
        link: "https://v.douyin.com/iy5gVgv8/",
        name: "抖音主页",
        image: "/assets/icon/TikTok.png",
        },
      // {
      //   link: "https://weibo.com/",
      //   name: "微博",
      //   image: "/assets/icon/weibo.png",
      // },
      /*{
        link: "https://twitter.com",
        name: "Twitter",
        image: "/assets/icon/th.png",
      },*/
    ],
};


module.exports = {
    config
}
