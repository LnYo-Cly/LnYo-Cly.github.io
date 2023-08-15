import{_ as e,o as a,c as o,X as t}from"./chunks/framework.e702791a.js";const _=JSON.parse('{"title":"贡献指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/comp-commit.md","filePath":"guide/comp-commit.md","lastUpdated":1691834853000}'),i={name:"guide/comp-commit.md"},l=t('<h1 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor" href="#贡献指南" aria-label="Permalink to &quot;贡献指南&quot;">​</a></h1><h2 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h2><ul><li>ESLint</li><li>StyleLint</li><li>husky + commitlint + lint-staged</li><li>prettier</li></ul><h2 id="组件开发" tabindex="-1">组件开发 <a class="header-anchor" href="#组件开发" aria-label="Permalink to &quot;组件开发&quot;">​</a></h2><p><a href="./comp-develop.html">详情看问这里</a></p><h2 id="组件文档编写" tabindex="-1">组件文档编写 <a class="header-anchor" href="#组件文档编写" aria-label="Permalink to &quot;组件文档编写&quot;">​</a></h2><p><a href="./comp-docs.html">详情看问这里</a></p><h2 id="pull-request-规范" tabindex="-1">Pull Request 规范 <a class="header-anchor" href="#pull-request-规范" aria-label="Permalink to &quot;Pull Request 规范&quot;">​</a></h2><ol><li>请先<code>fork</code>本仓库，你需要在fork的项目上进行新增或修改。</li><li>确保可以正常执行<code>pnpm run build</code>组件构建命令。</li><li>如果不想编写<code>docs</code>文档，请确保你的组件目录下新建<code>index.md</code>，内容需包含完整的使用方法。</li><li>在<code>commit</code>之前，请确保你的版本与主仓库版本一致。如果版本落后，请使用<code>merge</code>同步最新的仓库。<a href="./git-command.html">简要git命令</a></li><li>执行<code>commit</code>操作，需要遵守<a href="./commitlint.html">commit 规范</a></li><li>确保<code>pull request</code>提交到<code>dev</code>分支，如有对应的<code>issue</code>，请进行关联</li></ol>',9),c=[l];function d(r,m,s,n,h,u){return a(),o("div",null,c)}const f=e(i,[["render",d]]);export{_ as __pageData,f as default};