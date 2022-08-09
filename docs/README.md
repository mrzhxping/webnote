# Hello VuePress
## 第一个页面
### 11111
adasd


sds
f

ad
af
af
af
af
af
afa
faf
a



f
f


fafsafas




fafasfaf


fafafa



ssdjadalj 

akdsdasal

dadadajda 
adjkada


adsdjadajkl



adaj


配置
@vuepress/theme-default
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
theme: defaultTheme({
// 在这里进行配置
}),
}
基础配置
locales
```
类型： { [path: string]: Partial<DefaultThemeLocaleData> }
```
默认值： {}

详情：

多语言支持的各个语言 locales 。

所有在 Locale 配置 章节内的配置项都可以在 locales 中使用。

该配置项仅能在默认主题内生效，注意不要和 站点配置 中的 locales 混淆。

参考：

指南 > 多语言支持
Locale 配置
该章节内的配置项可以作为一般配置使用，也可以使用在 locales 内。

colorMode
类型： 'auto' | 'light' | 'dark'

默认值： 'auto'

详情：

默认颜色模式。

如果设置为 'auto' ，则会根据 prefers-color-scheme 自动设置初始颜色模式。

参考：

默认主题 > 配置 > colorModeSwitch
colorModeSwitch
类型： boolean

默认值： true

详情：

是否启用切换颜色模式的功能。

如果设置为 true ，将会在导航栏展示一个切换颜色模式的按钮。

参考：

默认主题 > 配置 > colorMode
默认主题 > 配置 > toggleColorMode
home
类型： string

默认值： /

详情：

首页的路径。

它将被用于：

导航栏中 Logo 的链接
404 页面的 返回首页 链接
navbar
类型： false | (NavbarItem | NavbarGroup | string)[]

默认值： []

详情：

导航栏配置。

设置为 false 可以禁用导航栏。

为了配置导航栏元素，你可以将其设置为 导航栏数组 ，其中的每个元素是 NavbarItem 对象、 NavbarGroup 对象、或者字符串：

NavbarItem 对象应该有一个 text 字段和一个 link 字段，还有一个可选的 activeMatch 字段。
NavbarGroup 对象应该有一个 text 字段和一个 children 字段。 children 字段同样是一个 导航栏数组 。
字符串应为目标页面文件的路径。它将会被转换为 NavbarItem 对象，将页面标题作为 text ，将页面路由路径作为 link 。
示例 1：
```
module.exports = {
theme: defaultTheme({
navbar: [
// NavbarItem
{
text: 'Foo',
link: '/foo/',
},
// NavbarGroup
{
text: 'Group',
children: ['/group/foo.md', '/group/bar.md'],
},
// 字符串 - 页面文件路径
'/bar/README.md',
],
}),
}
示例 2：
module.exports = {
theme: defaultTheme({
navbar: [
// 嵌套 Group - 最大深度为 2
{
text: 'Group',
children: [
{
text: 'SubGroup',
children: ['/group/sub/foo.md', '/group/sub/bar.md'],
},
],
},
// 控制元素何时被激活
{
text: 'Group 2',
children: [
{
text: 'Always active',
link: '/',
// 该元素将一直处于激活状态
activeMatch: '/',
},
{
text: 'Active on /foo/',
link: '/not-foo/',
// 该元素在当前路由路径是 /foo/ 开头时激活
// 支持正则表达式
activeMatch: '^/foo/',
},
],
},
],
}),
}

```
logo
类型： null | string

详情：

Logo 图片的 URL。

Logo 图片将会显示在导航栏的左端。

设置为 null 可以禁用 Logo 。

示例：

```
module.exports = {
theme: defaultTheme({
// Public 文件路径
logo: '/images/hero.png',
// URL
logo: 'https://vuejs.org/images/logo.png',
}),
}

```


参考：
指南 > 静态资源 > Public 文件
logoDark
类型： null | string

详情：

在夜间模式中使用的 Logo 图片的 URL。

如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。

设置为 null 可以在夜间模式下禁用 Logo 。忽略该配置项将会在夜间模式中使用 logo 配置。

参考：

默认主题 > 配置 > logo
默认主题 > 配置 > colorMode
repo
类型： string

详情：

项目仓库的 URL。

它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。

```
module.exports = {
theme: defaultTheme({
// 如果你按照 `organization/repository` 的格式设置它
// 我们会将它作为一个 GitHub 仓库
repo: 'vuejs/vuepress',
// 你也可以直接将它设置为一个 URL
repo: 'https://gitlab.com/foo/bar',
}),
}
```

repoLabel
类型： string

详情：

项目仓库的标签。

它将被用作 仓库链接 的文字。仓库链接 将会显示为导航栏的最后一个元素。

如果你不明确指定该配置项，它将会根据 repo 配置项自动推断。

selectLanguageText
类型： string

详情：

选择语言菜单 的文字。

如果你在站点配置中设置了多个 locales ，那么 选择语言菜单 就会显示在导航栏中仓库按钮的旁边。

selectLanguageAriaLabel
类型： string

详情：

选择语言菜单 的 aria-label 属性。

它主要是为了站点的可访问性 (a11y) 。

selectLanguageName
类型： string

详情：

Locale 的语言名称。

该配置项 仅能在主题配置的 locales 的内部生效 。它将被用作 locale 的语言名称，展示在 选择语言菜单 内。

示例：

module.exports = {
locales: {
