// 主题
const {defaultTheme} = require("vuepress");
// 搜索插件
const { searchPlugin } = require('@vuepress/plugin-search');
// 回到顶部
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top');
// 进度条
const { nprogressPlugin } = require('@vuepress/plugin-nprogress');

module.exports = {
    base: "/webnote/",
    lang: "zh-CN",
    title: "WebNotes",
    description: "一些笔记...",
    

    // 主题配置
    theme: defaultTheme({
        sidebar: [
            "/",
            {
                text: "vue文档",       // 标题
                link: "/vue/",        // 路径
                collapsible: true,    // 是否可折叠
                children: [
                    "v1",
                    "v2"
                ]
            },
            {
                text: "react文档",       // 标题
                link: "/react/",        // 路径
                collapsible: true,    // 是否可折叠
                children: [
                    "r1",
                    "r2.md"
                ]
            },
            {
                text: "js基础",       // 标题
                link: "/js/",        // 路径
                collapsible: true,    // 是否可折叠
                children: []
            },
            {
                text: "Mac",       // 标题
                link: "/mac/",        // 路径
                collapsible: true,    // 是否可折叠
                children: [
                    "brew",
                    "shell"
                ]
            }
        ]
    }),

    // 插件
    plugins: [
        // 搜索
        searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            }
        }),
        // 回到顶部
        backToTopPlugin(),
        // 进度条
        nprogressPlugin()
    ],
};
