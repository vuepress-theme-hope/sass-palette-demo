import{_ as n,o as s,c as a,a as e}from"./app.db6577be.js";const t={},p=e(`<h2 id="\u4F7F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u63D2\u4EF6</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-plugin-sass-palette@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Your plugin or theme entry</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSassPalettePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-sass-palette&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PluginFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> yourPlugin <span class="token operator">=</span>
  <span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token operator">:</span> PluginFunction <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">useSassPalettePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">// plugin options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// your plugin api</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> yourPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[p];function o(c,l){return s(),a("div",null,i)}var r=n(t,[["render",o],["__file","index.html.vue"]]);export{r as default};
