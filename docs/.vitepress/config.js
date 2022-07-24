// module.exports = {
//   title: "YUN-UI",
//   description: "Vue3 YUN UI",
//   themeConfig: {
//     logo: "/logo.svg",

//     socialLinks: [
//       { icon: "github", link: "https://github.com/vuejs/vitepress" },
//     ],

//     nav: [
//       { text: "指南", link: "/guide/installation", activeMatch: "/guide/" },
//       { text: "组件", link: "/component/icon", activeMatch: "/component/" },
//     ],

//     sidebar: {
//       "/guide/": [
//         {
//           text: "指南",
//           items: [
//             { text: "安装", link: "/guide/installation" },
//             { text: "快速开始", link: "/guide/quickStart" },
//           ],
//         },
//       ],
//       "/component/": [
//         {
//           text: "基础组件",
//           items: [{ text: "Icon", link: "/component/icon" }],
//         },
//       ],
//     },

//     footer: {
//       message: "Released under the MIT License.",
//       copyright: "Copyright © 2022-present Timly",
//     },
//   },
// };

module.exports = {
  title: "YUN-UI",
  description: "Vue3 YUN UI",
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Timly",
    },
    nav: [
      { text: "指南", link: "/guide/installation" },
      { text: "组件", link: "/component/icon" },
    ],
    sidebar: [
      {
        text: "指南",
        items: [
          { text: "安装", link: "/guide/installation" },
          { text: "快速开始", link: "/guide/quickStart" },
        ],
      },
      {
        text: "基础组件",
        items: [
          { text: "Icon", link: "/component/icon" },
          { text: "Button", link: "/component/button" },
        ],
      },
    ],
  },
};
