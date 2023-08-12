import{_ as s,o as e,c as o,S as n}from"./chunks/framework.dd29f695.js";const b=JSON.parse('{"title":"组件文档","description":"","frontmatter":{},"headers":[],"relativePath":"guide/comp-docs.md","filePath":"guide/comp-docs.md","lastUpdated":1691772191000}'),a={name:"guide/comp-docs.md"},l=n(`<h1 id="组件文档" tabindex="-1">组件文档 <a class="header-anchor" href="#组件文档" aria-label="Permalink to &quot;组件文档&quot;">​</a></h1><h2 id="添加组件文档" tabindex="-1">添加组件文档 <a class="header-anchor" href="#添加组件文档" aria-label="Permalink to &quot;添加组件文档&quot;">​</a></h2><ol><li><code>/docs/components/</code>组件文档：在<code>/docs/components/</code>下新建一个组件文件夹，并创建<code>index.md</code>用于编写组件文档</li><li><code>/docs/demos/</code>组件代码演示：在<code>/docs/demos/</code>下新建对应组件的文件夹，接着创建你所需的demo演示文件。</li><li>在<code>/docs/components/xxxxComp/index.md</code>中引入组件：</li></ol><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 文档内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">demo</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../../demos/button/basic.vue&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">demo</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 文档内容 --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 文档内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">demo</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../../demos/button/basic.vue&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">demo</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 文档内容 --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4"><li>在<code>/docs/.vitepress/config/sidebar.ts</code>添加组件文档内容。</li></ol><h2 id="部署文档" tabindex="-1">部署文档 <a class="header-anchor" href="#部署文档" aria-label="Permalink to &quot;部署文档&quot;">​</a></h2><ol><li>在GitHub创建与账号同名的仓库</li><li>修改<code>/docs/auto-deploy.sh</code>的仓库</li><li>在项目根目录运行<code>bash ./docs/auto-deploy.sh</code></li></ol><h2 id="打包时可能遇到的问题" tabindex="-1">打包时可能遇到的问题 <a class="header-anchor" href="#打包时可能遇到的问题" aria-label="Permalink to &quot;打包时可能遇到的问题&quot;">​</a></h2><h3 id="window-is-not-defined-解决方案" tabindex="-1">window is not defined 解决方案 <a class="header-anchor" href="#window-is-not-defined-解决方案" aria-label="Permalink to &quot;window is not defined 解决方案&quot;">​</a></h3><p>因为vitepress的打包是client + server（浏览器+node），在node环境中是不存在window的所以会报错。</p><p>先找到哪里的代码引起了报错，例如：我这里是在<code>theme/index.ts</code>进行<code>app.use(EluDesign)</code>时打包报错，说明EluDesign中含有window，导致在node环境下报错找不到window。那么我们就在<code>packages</code>目录下寻找<code>window</code>（vs code自带了在文件夹中查找字符串）。我这里可以找到是<code>iconfont.js</code>中含有window，所以是导入<code>iconfont.js</code>时报了错。我们只需要将原来的导入代码在<code>onMounted</code>声明周期中进行使用即可，或者编一个判断当前环境的函数，仅当为浏览器环境时，才执行含有window的代码。 <img src="https://cdn.jsdelivr.net/gh/lnyo-cly/blogImg/pics/20230811232523.png" alt="20230811232523"></p><p><img src="https://cdn.jsdelivr.net/gh/lnyo-cly/blogImg/pics/20230811233346.png" alt="20230811233346"></p>`,12),t=[l];function c(d,i,p,r,h,m){return e(),o("div",null,t)}const y=s(a,[["render",c]]);export{b as __pageData,y as default};
