import{_ as s,o as n,c as a,S as p}from"./chunks/framework.dd29f695.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/git-command.md","filePath":"guide/git-command.md","lastUpdated":1691834853000}'),l={name:"guide/git-command.md"},e=p(`<div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 添加上游仓库地址  git@github.com:LnYo-Cly/elu-design.git</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upstream</span><span style="color:#E1E4E8;"> [仓库地址]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从上游仓库拉去最新的代码(pull = fetch + merge)</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upstream</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># fetch之后会多出一个远程分支 upstream/master</span></span>
<span class="line"><span style="color:#6A737D;"># 将最新的master合并到本地</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upstream/master</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 更新自己的仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果你没有贡献代码，仅仅是想同步最新的代码，可以使用rebase</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upstream/master</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 更新自己的仓库</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 添加上游仓库地址  git@github.com:LnYo-Cly/elu-design.git</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upstream</span><span style="color:#24292E;"> [仓库地址]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从上游仓库拉去最新的代码(pull = fetch + merge)</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upstream</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># fetch之后会多出一个远程分支 upstream/master</span></span>
<span class="line"><span style="color:#6A737D;"># 将最新的master合并到本地</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upstream/master</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 更新自己的仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果你没有贡献代码，仅仅是想同步最新的代码，可以使用rebase</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upstream/master</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 更新自己的仓库</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,1),o=[e];function t(r,c,i,y,E,m){return n(),a("div",null,o)}const F=s(l,[["render",t]]);export{d as __pageData,F as default};
