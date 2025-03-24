export default {
  getSideBar(path) {
    const wholeList = [
      {
        text: "front",
        items: [
          {
            // collapsed: true,
            text: "前端工程化",
            items: [
              {
                text: "前端规范搭建",
                link: "/front/engi/rule/",
              },           
            ],
          },
          {
            text: "前端基础",
            items: [
              {
                text: "前端最全Debugger技巧",
                link: "/front/base/debugger/",
              }
            ],
          },
          {
            text: "Uniapp跨端开发",
            items: [
              {
                text: "包体积优化",
                link: "/front/mini/packageSize/",
              },
            ],
          }
          
        ],
      },
      {
        text: "back",
        items: [
          {
            text: "后端基础",
            items: [
              {
                text:"论全干工程师的自我修养",
                link:"/back/framework/chooseFrameWork/"
              },
            ],
          },
        ],
      },
      {
        text: "others",
        items: [
          {
            text: "常用操作指令",
            items: [
              {
                text: "Git",
                link: "/others/operation/git/",
              },
            ],
          },
          {
            text: "网络与运维",
            items: [
            ],
          },
        ],
      },
    ];

    if (!path) {
      return wholeList;
    }

    return wholeList.filter((list) => list.text === path)[0];
  },
};
