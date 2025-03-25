import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.DPDPlp3K.js";const D=JSON.parse('{"title":"数据访问对象模式 Data access object-DAO","description":"","frontmatter":{},"headers":[],"relativePath":"pattern/skill/数据访问对象模式DAO.md","filePath":"pattern/skill/数据访问对象模式DAO.md"}'),o={name:"pattern/skill/数据访问对象模式DAO.md"};function t(e,s,c,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="数据访问对象模式-data-access-object-dao" tabindex="-1">数据访问对象模式 Data access object-DAO <a class="header-anchor" href="#数据访问对象模式-data-access-object-dao" aria-label="Permalink to &quot;数据访问对象模式 Data access object-DAO&quot;">​</a></h1><p>数据访问对象模式（Data access object-DAO: 抽象和封装对数据源的访问与存储,DAO 通过对数据源链接的管理方便对数据的访问与存储。</p><p>存储数据库不同于服务器端关系型数据库,它是将数据保存在 localStorage 这个对象里。</p><p>localStorage 相当于一个大容器,对于同一个站点,它里面根本没有分割库,所以别人使用 localStorage 的时候和你用的是一个,所以你应该将每次存储的数据字段前面添加前缀标识来‘分割’localStorage 存储。</p><p>本地存储对数据的保存实际上是 localStorage 的一个字符串属性。</p><p>有时对于本地存储来说,了解他的存储时间是很有必要的,它能方便日后对数据的管理（如定期清除）,因此你可以添加一个时间戳,但对于每个人存储的数据内容不同,时间戳与将要存储的数据都是属性字符串,所以他们之间要设置一个拼接符。</p><p>数据访问对象（DAO）模式即是对数据库的操作（如简单的 CRUD 创建、读取、更新、删除）进行封装,用户不必为操作数据库感到苦恼, DAO 己经为我们提供了简单而统一的操作接口。并且对于使用者来说,不必了解 DAO 内部操作是如何实现的,有时甚至不必了解数据库是如何操作的。</p><p>对于后端数据库来说（如 MongoDB）,DAO 对象甚至会保留对数据库的链接,这样我们每次操作数据库时不必一次次地向数据库发送链接请求。</p><p>DAO 是一个对象,因此它封装了属性和方法,并通过这些属性与方法管理着数据库。因此有时为了实现需求我们还可以对 DAO 对象进行拓展。但是更佳实践是对 DAO 做一层试用于你自己的封装,这样在团队开发中不会影响到他人的使用。</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><ul><li>封装本地数据库 Localstorage 操作</li><li>封装数据库操作方法</li></ul><h3 id="封装本地数据库操作" tabindex="-1">封装本地数据库操作 <a class="header-anchor" href="#封装本地数据库操作" aria-label="Permalink to &quot;封装本地数据库操作&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 本地存储类</span></span>
<span class="line"><span style="color:#6A737D;"> * 参数 preId 本地存储数据库前缀</span></span>
<span class="line"><span style="color:#6A737D;"> * 参数 timesign 时间戳与存储数据之间的拼接符</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#6F42C1;"> BaseLocalstorage</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">preId</span><span style="color:#24292E;">, </span><span style="color:#E36209;">timesign</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 定义本地存储数据库前缀</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.preId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> preId</span></span>
<span class="line"><span style="color:#6A737D;">	// 定义时间戳与存储数据之间的拼接符</span></span>
<span class="line"><span style="color:#005CC5;">	this</span><span style="color:#24292E;">.timesign </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> timesign </span><span style="color:#D73A49;">||</span><span style="color:#032F62;"> &#39;|-|&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 本地存储类原型方法</span></span>
<span class="line"><span style="color:#005CC5;">BaseLocalstorage</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">	// 操作状态</span></span>
<span class="line"><span style="color:#24292E;">	status: {</span></span>
<span class="line"><span style="color:#24292E;">		SUCCESS: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 成功</span></span>
<span class="line"><span style="color:#24292E;">		FAILURE: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 失败</span></span>
<span class="line"><span style="color:#24292E;">		OVERFLOW: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 溢出</span></span>
<span class="line"><span style="color:#24292E;">		TIMEOUT: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 过期</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// 保存本地存储链接</span></span>
<span class="line"><span style="color:#24292E;">	storage: localstorage </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> window.localstorage,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// 获取本地存储数据库数据真实字段</span></span>
<span class="line"><span style="color:#6F42C1;">	getKey</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.preId </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> key</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#6A737D;">	/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 添加（ 修改） 数据</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 key: 数据字段标识</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 value: 数据值</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 callbac: 回调函数</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 time: 添加时间</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#6F42C1;">	set</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">, </span><span style="color:#E36209;">time</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 默认操作状态时成功</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> status </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.status.</span><span style="color:#005CC5;">SUCCESS</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取真实字段</span></span>
<span class="line"><span style="color:#24292E;">			key </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getKey</span><span style="color:#24292E;">(key)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			// 参数时间参数时获取时间戳</span></span>
<span class="line"><span style="color:#24292E;">			time </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Date</span><span style="color:#24292E;">(time).</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> time.</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (e) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 为传入时间参数或者时间参数有误获取默认时间:—个月</span></span>
<span class="line"><span style="color:#24292E;">			time </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> 1000</span><span style="color:#D73A49;"> *</span><span style="color:#005CC5;"> 60</span><span style="color:#D73A49;"> *</span><span style="color:#005CC5;"> 60</span><span style="color:#D73A49;"> *</span><span style="color:#005CC5;"> 24</span><span style="color:#D73A49;"> *</span><span style="color:#005CC5;"> 31</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			// 向数据库中添加数据</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.storage.</span><span style="color:#6F42C1;">setItem</span><span style="color:#24292E;">(key, time </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.timesign </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> value)</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (e) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 溢出失败,返回溢出状态</span></span>
<span class="line"><span style="color:#24292E;">			status </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.status.</span><span style="color:#005CC5;">OVERFLOW</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">		// 有回调函数则执行回调函数并传入参数操作状态,真实数据字段标识以及存储数据值</span></span>
<span class="line"><span style="color:#24292E;">		callback </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> callback.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, status, key, value)</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	/****</span></span>
<span class="line"><span style="color:#6A737D;">	 * 获取数据</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 key: 数据字段标识</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 callbac: 回调函数</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#6F42C1;">	get</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 默认操作状态时成功</span></span>
<span class="line"><span style="color:#D73A49;">		var</span><span style="color:#24292E;"> status </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.status.</span><span style="color:#005CC5;">SUCCESS</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取</span></span>
<span class="line"><span style="color:#24292E;">			key </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getKey</span><span style="color:#24292E;">(key),</span></span>
<span class="line"><span style="color:#6A737D;">			// 默认值为空</span></span>
<span class="line"><span style="color:#24292E;">			value </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 时间戳与存储数据之间的拼接符长度</span></span>
<span class="line"><span style="color:#24292E;">			timesignLen </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.timesign.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 缓存当前对象</span></span>
<span class="line"><span style="color:#24292E;">			that </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 时间戳与存储数据之间的拼接符起始位置</span></span>
<span class="line"><span style="color:#24292E;">			index,</span></span>
<span class="line"><span style="color:#6A737D;">			// 时间戳</span></span>
<span class="line"><span style="color:#24292E;">			time,</span></span>
<span class="line"><span style="color:#6A737D;">			// 最终获取的数据</span></span>
<span class="line"><span style="color:#24292E;">			result</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取字段对应的数据字符串</span></span>
<span class="line"><span style="color:#24292E;">			value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> that.storage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (e) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取失败则返回失败状态,数据结果为null</span></span>
<span class="line"><span style="color:#24292E;">			result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				status: that.status.</span><span style="color:#005CC5;">FAILURE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				value: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#6A737D;">			// 执行回调并返回</span></span>
<span class="line"><span style="color:#24292E;">			callback </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> callback.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, result.status, result.value)</span></span>
<span class="line"><span style="color:#D73A49;">			return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 如果成功获取数据字符串</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (value) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取时间戳与存储数据之间的拼接符起始位置</span></span>
<span class="line"><span style="color:#24292E;">			index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value.</span><span style="color:#6F42C1;">indexof</span><span style="color:#24292E;">(that.timesign)</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取时间戳</span></span>
<span class="line"><span style="color:#24292E;">			time </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;">value.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, index)</span></span>
<span class="line"><span style="color:#6A737D;">			// 如果时间为过期</span></span>
<span class="line"><span style="color:#D73A49;">			if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> Date</span><span style="color:#24292E;">(time).</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&gt;</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> time </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 获取数据结果（拼接符后面的字符串）</span></span>
<span class="line"><span style="color:#24292E;">				value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(index </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> timesignLen)</span></span>
<span class="line"><span style="color:#24292E;">			} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">				// 过期则结果为null</span></span>
<span class="line"><span style="color:#24292E;">				value </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"><span style="color:#6A737D;">				// 设置状态为过期状态</span></span>
<span class="line"><span style="color:#24292E;">				status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> that.status.</span><span style="color:#005CC5;">TIMEOUT</span></span>
<span class="line"><span style="color:#6A737D;">				// 删除该字段</span></span>
<span class="line"><span style="color:#24292E;">				that.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			// 未获取数据字符串状态为失败状态</span></span>
<span class="line"><span style="color:#24292E;">			status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> that.status.</span><span style="color:#005CC5;">FAILURE</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 设置结果</span></span>
<span class="line"><span style="color:#24292E;">		result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			status: status,</span></span>
<span class="line"><span style="color:#24292E;">			value: value,</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#6A737D;">		// 执行回调函数</span></span>
<span class="line"><span style="color:#24292E;">		callback </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> callback.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, result.status, result.value)</span></span>
<span class="line"><span style="color:#6A737D;">		// 返回结果</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 删除数据</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 key: 数据字段标识</span></span>
<span class="line"><span style="color:#6A737D;">	 * 参数 callback: 回调函数</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#6F42C1;">	remove</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cb</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 设置默认操作状态为失败</span></span>
<span class="line"><span style="color:#D73A49;">		let</span><span style="color:#24292E;"> _status </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.status.</span><span style="color:#005CC5;">FAILURE</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取实际数据字段名称</span></span>
<span class="line"><span style="color:#24292E;">			_key </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getKey</span><span style="color:#24292E;">(key),</span></span>
<span class="line"><span style="color:#6A737D;">			// 设置默认数据结果为空</span></span>
<span class="line"><span style="color:#24292E;">			_value </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">			// 获取字段对应的数据</span></span>
<span class="line"><span style="color:#24292E;">			_value </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.storage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(_key)</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (e) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (_value) {</span></span>
<span class="line"><span style="color:#D73A49;">			try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">.storage.</span><span style="color:#6F42C1;">removeItem</span><span style="color:#24292E;">(_key)</span></span>
<span class="line"><span style="color:#24292E;">				_status </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.status.</span><span style="color:#005CC5;">SUCCESS</span></span>
<span class="line"><span style="color:#24292E;">			} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (e) {}</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">		// 成功则返回真实的数据结果,否则返回空</span></span>
<span class="line"><span style="color:#24292E;">		cb </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">			cb.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#005CC5;">				this</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				_status,</span></span>
<span class="line"><span style="color:#24292E;">				_status </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#D73A49;"> ?</span><span style="color:#005CC5;"> null</span><span style="color:#D73A49;"> :</span><span style="color:#24292E;"> _value.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(_value.</span><span style="color:#6F42C1;">indexof</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.timesign) </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.timesign.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			)</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> Ls </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> BaseLocalstorage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Ls__&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">Ls.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;xiao ming&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// [0,&quot;Ls__a&quot;, &quot;xiao ming&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Ls.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// [0, &quot;xiao ming&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Ls.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// [0, &quot;xiao ming&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Ls.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// [1, null]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Ls.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// [1, null]</span></span></code></pre></div><h3 id="封装数据库操作方法" tabindex="-1">封装数据库操作方法 <a class="header-anchor" href="#封装数据库操作方法" aria-label="Permalink to &quot;封装数据库操作方法&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在nodejs中写入配置项 config.js</span></span>
<span class="line"><span style="color:#6A737D;">// 将配置数据输出</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">	// 数据库相关配置数据</span></span>
<span class="line"><span style="color:#24292E;">	DB: {</span></span>
<span class="line"><span style="color:#24292E;">		db: </span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 数据库名称</span></span>
<span class="line"><span style="color:#24292E;">		host: </span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 主机名</span></span>
<span class="line"><span style="color:#24292E;">		port: </span><span style="color:#005CC5;">27017</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 端口号</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 连接MongoDB</span></span>
<span class="line"><span style="color:#6A737D;">/* db.js */</span></span>
<span class="line"><span style="color:#6A737D;">// 引用mongodb模块</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> mongodb </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongodb&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 引用配置模块的数据库配置信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> config </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./config&#39;</span><span style="color:#24292E;">).</span><span style="color:#005CC5;">DB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建数据库对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#24292E;"> mongodb.</span><span style="color:#6F42C1;">Db</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	config.db, </span><span style="color:#6A737D;">// 数据库名称</span></span>
<span class="line"><span style="color:#D73A49;">	new</span><span style="color:#24292E;"> mongodb.</span><span style="color:#6F42C1;">server</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		config.host, </span><span style="color:#6A737D;">// 主机名</span></span>
<span class="line"><span style="color:#24292E;">		config.port, </span><span style="color:#6A737D;">// 端口号</span></span>
<span class="line"><span style="color:#24292E;">		{</span></span>
<span class="line"><span style="color:#24292E;">			auto_reconnect: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#6A737D;">// 自动连接</span></span>
<span class="line"><span style="color:#24292E;">	),</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		safe: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#6A737D;">// 安全模式</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出数据访问对象</span></span>
<span class="line"><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DB</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 操作集合</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 打开数据库, 操作集合</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> col</span><span style="color:#6A737D;"> 集合名</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> fn</span><span style="color:#6A737D;"> 操作方法</span></span>
<span class="line"><span style="color:#6A737D;"> **/</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> connect</span><span style="color:#24292E;">(</span><span style="color:#E36209;">col</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// 打开数据库</span></span>
<span class="line"><span style="color:#24292E;">	d.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">db</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">		// 打开数据库报错则抛出错误</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#D73A49;">			throw</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">		} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			db.</span><span style="color:#6F42C1;">collection</span><span style="color:#24292E;">(col, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">col</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 操作集合报错则抛出错误</span></span>
<span class="line"><span style="color:#D73A49;">				if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#D73A49;">					throw</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">				} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">					// 执行操作</span></span>
<span class="line"><span style="color:#24292E;">					fn </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> fn</span><span style="color:#24292E;">(col, db)</span></span>
<span class="line"><span style="color:#24292E;">				}</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	})</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DB</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">col</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">	return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">		/****</span></span>
<span class="line"><span style="color:#6A737D;">  插入数据</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> data</span><span style="color:#6A737D;"> 插入数据项</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> success</span><span style="color:#6A737D;"> 操作成功回调函数</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> fail</span><span style="color:#6A737D;"> 操作失败回调函数</span></span>
<span class="line"><span style="color:#6A737D;">  **/</span></span>
<span class="line"><span style="color:#6F42C1;">		insert</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">success</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fail</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 打开数据库操作col集合</span></span>
<span class="line"><span style="color:#6F42C1;">			connect</span><span style="color:#24292E;">(col, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">col</span><span style="color:#24292E;">, </span><span style="color:#E36209;">db</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 向集合中插入数据</span></span>
<span class="line"><span style="color:#24292E;">				col.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(data, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">docs</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">					// 失败,抛出插入错误</span></span>
<span class="line"><span style="color:#D73A49;">					if</span><span style="color:#24292E;"> (err) fail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> fail</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#6A737D;">					// 成功,执行成功回调函数</span></span>
<span class="line"><span style="color:#D73A49;">					else</span><span style="color:#24292E;"> success </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> success</span><span style="color:#24292E;">(docs)</span></span>
<span class="line"><span style="color:#6A737D;">					// 关闭数据库</span></span>
<span class="line"><span style="color:#24292E;">					db.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">				})</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">		/****</span></span>
<span class="line"><span style="color:#6A737D;">  删除数据</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> data</span><span style="color:#6A737D;"> 删除数据项</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> success</span><span style="color:#6A737D;"> 成功回调</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> fail</span><span style="color:#6A737D;"> 失败回调</span></span>
<span class="line"><span style="color:#6A737D;">  **/</span></span>
<span class="line"><span style="color:#6F42C1;">		remove</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">success</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fail</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">			// 打开数据库操作col集合</span></span>
<span class="line"><span style="color:#6F42C1;">			connect</span><span style="color:#24292E;">(col, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">col</span><span style="color:#24292E;">, </span><span style="color:#E36209;">db</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 在集合中删除数据项</span></span>
<span class="line"><span style="color:#24292E;">				col.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(data, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">len</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">					if</span><span style="color:#24292E;"> (err) fail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> fail</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#D73A49;">					else</span><span style="color:#24292E;"> success </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> success</span><span style="color:#24292E;">(len)</span></span>
<span class="line"><span style="color:#24292E;">					db.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">				})</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">		/**</span></span>
<span class="line"><span style="color:#6A737D;">		 * 更新数据</span></span>
<span class="line"><span style="color:#6A737D;">		 * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> con</span><span style="color:#6A737D;"> 筛选条件</span></span>
<span class="line"><span style="color:#6A737D;">		 * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> doc</span><span style="color:#6A737D;"> 更新数据项</span></span>
<span class="line"><span style="color:#6A737D;">		 * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> success</span><span style="color:#6A737D;"> 成功回调</span></span>
<span class="line"><span style="color:#6A737D;">		 * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> fail</span><span style="color:#6A737D;"> 失败回调</span></span>
<span class="line"><span style="color:#6A737D;">		 **/</span></span>
<span class="line"><span style="color:#6F42C1;">		update</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">con</span><span style="color:#24292E;">, </span><span style="color:#E36209;">doc</span><span style="color:#24292E;">, </span><span style="color:#E36209;">success</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fail</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">			connect</span><span style="color:#24292E;">(col, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">col</span><span style="color:#24292E;">, </span><span style="color:#E36209;">db</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 在集合中更新数据项</span></span>
<span class="line"><span style="color:#24292E;">				col.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(con, doc, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">len</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">					if</span><span style="color:#24292E;"> (err) fail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> fail</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#D73A49;">					else</span><span style="color:#24292E;"> success </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> success</span><span style="color:#24292E;">(len)</span></span>
<span class="line"><span style="color:#24292E;">					db.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">				})</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">		/****</span></span>
<span class="line"><span style="color:#6A737D;">  查找数据</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> con</span><span style="color:#6A737D;"> 查找条件</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> success</span><span style="color:#6A737D;"> 成功回调</span></span>
<span class="line"><span style="color:#6A737D;">  * </span><span style="color:#D73A49;">@param</span><span style="color:#24292E;"> fail</span><span style="color:#6A737D;"> 失败回调</span></span>
<span class="line"><span style="color:#6A737D;">  **/</span></span>
<span class="line"><span style="color:#6F42C1;">		find</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">con</span><span style="color:#24292E;">, </span><span style="color:#E36209;">success</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fail</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">			connect</span><span style="color:#24292E;">(col, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">col</span><span style="color:#24292E;">, </span><span style="color:#E36209;">db</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">				// 在集合中查找数据</span></span>
<span class="line"><span style="color:#24292E;">				col.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(con).</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">docs</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">					if</span><span style="color:#24292E;"> (err) fail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> fail</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#D73A49;">					else</span><span style="color:#24292E;"> success </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#6F42C1;"> success</span><span style="color:#24292E;">(docs)</span></span>
<span class="line"><span style="color:#24292E;">					db.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">				})</span></span>
<span class="line"><span style="color:#24292E;">			})</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*test.js*/</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#005CC5;"> DB</span><span style="color:#D73A49;"> =</span><span style="color:#6F42C1;"> require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./db&#39;</span><span style="color:#24292E;">).</span><span style="color:#005CC5;">DB</span><span style="color:#6A737D;"> // 引用数据访问对象模块</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> user </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;"> DB</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 操作user集合</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 向集合中插入—条数据</span></span>
<span class="line"><span style="color:#24292E;">user.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&#39;小白&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		nick: </span><span style="color:#032F62;">&#39;雨夜清荷&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#D73A49;">	function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">docs</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(docs)</span></span>
<span class="line"><span style="color:#6A737D;">		// [{name: &#39;小白&#39;, nick: &#39;雨夜清荷&#39;, _id :54e956410017 a3fc06195be9}]（ id为数据项的索引值）</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">user.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&#39;小白&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#D73A49;">	function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">len</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(len) </span><span style="color:#6A737D;">// 1（删除数据项长度）</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">user.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&#39;小白&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&#39;小白&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		nick: </span><span style="color:#032F62;">&#39;雨夜&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#D73A49;">	function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">len</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(len) </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">user.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&#39;小白&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#D73A49;">	function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">doc</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(doc) </span><span style="color:#6A737D;">// [{name: &#39;小白&#39;, nick: &#39;雨夜清荷&#39;, _id :54e956410017a3fc06195be9}]</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div>`,15)]))}const A=n(o,[["render",t]]);export{D as __pageData,A as default};
