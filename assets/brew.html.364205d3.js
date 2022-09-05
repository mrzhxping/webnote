import{_ as s,o as d,c as l,b as e,e as r,d as n,a,r as c}from"./app.34d889f8.js";const t={},v=e("h4",{id:"brew",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#brew","aria-hidden":"true"},"#"),n(" brew")],-1),b=e("p",null,'\u2014\u2014 Mac "\u4E0A\u7684\u5E94\u7528\u5546\u5E97"\uFF0C\u5305\u7BA1\u7406\u5668\uFF1B \u5B89\u88C5\u3001\u7BA1\u7406\u5305\u5F88\u65B9\u4FBF',-1),u=n("\u5B98\u7F51\uFF1A"),o={href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"},m=n("https://brew.sh"),h=a(`<h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><p>1\u3001\u5B98\u65B9\u5B89\u88C5 \xA0\xA0\xA0\xA0<div size="2" color="#CCCCCC">(\u547D\u4EE4\u53EF\u80FD\u6267\u884C\u4F1A\u5F88\u6162\uFF0C\u5EFA\u8BAE\u5F00\u8D77\u547D\u4EE4\u884C\u4EE3\u7406)</div></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u56FD\u5185\u5927\u4F6C\u5B89\u88C5\u811A\u672C</p><p>\xA0\xA0\xA0\xA0 \u6709\u5F88\u591A\uFF0C\u6CA1\u6709\u4EB2\u6D4B \u5177\u4F53\u8BF7\u767E\u5EA6</p><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u641C\u7D22\u5305
brew search mysql

// \u5B89\u88C5\u5305
brew install mysql

// \u67E5\u770B\u5305\u4FE1\u606F\uFF0C\u6BD4\u5982\u76EE\u524D\u7684\u7248\u672C\uFF0C\u4F9D\u8D56\uFF0C\u5B89\u88C5\u540E\u6CE8\u610F\u4E8B\u9879\u7B49
brew info mysql

// \u5378\u8F7D\u5305
brew uninstall wget

// \u663E\u793A\u5DF2\u5B89\u88C5\u7684\u5305
brew list

// \u67E5\u770Bbrew\u7684\u5E2E\u52A9
brew \u2013help

// \u66F4\u65B0\uFF0C \u8FD9\u4F1A\u66F4\u65B0 Homebrew \u81EA\u5DF1
brew update

// \u68C0\u67E5\u8FC7\u65F6\uFF08\u662F\u5426\u6709\u65B0\u7248\u672C\uFF09\uFF0C\u8FD9\u4F1A\u5217\u51FA\u6240\u6709\u5B89\u88C5\u7684\u5305\u91CC\uFF0C\u54EA\u4E9B\u53EF\u4EE5\u5347\u7EA7
brew outdated
brew outdated mysql

// \u5347\u7EA7\u6240\u6709\u53EF\u4EE5\u5347\u7EA7\u7684\u8F6F\u4EF6\u4EEC
brew upgrade
brew upgrade mysql

// \u6E05\u7406\u4E0D\u9700\u8981\u7684\u7248\u672C\u6781\u5176\u5B89\u88C5\u5305\u7F13\u5B58
brew cleanup
brew cleanup mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function p(_,w){const i=c("ExternalLinkIcon");return d(),l("div",null,[v,b,e("p",null,[u,e("a",o,[m,r(i)])]),h])}var f=s(t,[["render",p],["__file","brew.html.vue"]]);export{f as default};
