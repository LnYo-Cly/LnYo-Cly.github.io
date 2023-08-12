import{_ as s,o as n,c as a,S as l}from"./chunks/framework.dd29f695.js";const b=JSON.parse('{"title":"组件开发","description":"","frontmatter":{},"headers":[],"relativePath":"guide/comp-develop.md","filePath":"guide/comp-develop.md","lastUpdated":1691832626000}'),p={name:"guide/comp-develop.md"},e=l(`<h1 id="组件开发" tabindex="-1">组件开发 <a class="header-anchor" href="#组件开发" aria-label="Permalink to &quot;组件开发&quot;">​</a></h1><h2 id="如何开发一个新的组件" tabindex="-1">如何开发一个新的组件 <a class="header-anchor" href="#如何开发一个新的组件" aria-label="Permalink to &quot;如何开发一个新的组件&quot;">​</a></h2><ol><li>在<code>/packages/components/</code>下新建你所需组件文件夹，例如<code>button</code>文件夹。</li><li><code>button</code>文件夹下需要：<code>src</code>文件夹存放组件源文件和类型文件，<code>index.ts</code>用于导出和注册组件。</li></ol><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// packages/components/button/inde.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { withInstall } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@elu-design/utils/with-install&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Button </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./src/button.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">EluButton</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">withInstall</span><span style="color:#E1E4E8;">(Button);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { EluButton };</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> EluButton;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// packages/components/button/inde.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { withInstall } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@elu-design/utils/with-install&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Button </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./src/button.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">EluButton</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">withInstall</span><span style="color:#24292E;">(Button);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { EluButton };</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> EluButton;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>组建的样式在<code>/packages/theme-chalk/src/</code>下进行编写，并在全局样式<code>/packages/theme-chalk/src/index.scss</code>中引入。</li></ol><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// packages\\theme-chalk\\src\\button.scss</span></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//-------分割线---------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// packages\\theme-chalk\\src\\index.scss</span></span>
<span class="line"><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;button.scss&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// packages\\theme-chalk\\src\\button.scss</span></span>
<span class="line"><span style="color:#22863A;">button</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//-------分割线---------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// packages\\theme-chalk\\src\\index.scss</span></span>
<span class="line"><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;button.scss&#39;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4"><li>之后在<code>/packages/components/index.ts</code>导出你刚刚编写的组件。</li></ol><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// /packages/components/index.ts</span></span>
<span class="line"><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./button&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// /packages/components/index.ts</span></span>
<span class="line"><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./button&#39;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将组件和样式分开编写，可以保证组件与样式都可以按需引入。</p><p>如果把组件和样式写在一起，在引入组件时，同时会把样式也一起引入，这就无法灵活的自定义样式，并且内置的无用样式会增加打包体积。</p><ul><li>确保编写的组件不会涉及到其他的第三方库</li><li>如果A组件需要用到B组件，请直接在A组件内引入</li></ul><h2 id="效果测试" tabindex="-1">效果测试 <a class="header-anchor" href="#效果测试" aria-label="Permalink to &quot;效果测试&quot;">​</a></h2><ol><li>在<code>/play/main.ts</code>引入所需的样式和组件，或者引入全局组件和样式。</li><li>在<code>/play/app.vue</code>中引入组件代码进行测试效果。</li></ol>`,13),o=[e];function c(t,r,i,d,y,u){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{b as __pageData,m as default};
