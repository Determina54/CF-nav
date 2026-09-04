/**
 * @fileoverview
 * @author adou
 * @copyright Copyright (c) 2026 adou. All rights reserved.
 * @license MIT
 * @disclaimer 免责声明：本软件及相关代码仅用于学术研究与个人学习，作者不对因使用本软件产生的任何直接或间接损失承担责任。
 */

/**
 * ==========================================
 * defaultData.js - 默认初始化数据
 * 包含分类和网站条目的默认配置
 *
 * ==========================================
 */

export const defaultData = {
  // 全局设置
  settings: {
    zenMode: false,
    link_target: '_blank',
    hideBgMask: true,
    isolatedView: false,
    density: 'standard',
    showFrequent: true,
    bgUrl: '',
    syncInterval: 7
  },

  // 分类列表
  categories: [
    { id: "cat_mk54", name: "MK54", icon: "⚓", hidden: false },
    { id: "cat_main", name: "常用推荐", icon: "⭐", hidden: false },
    { id: "cat_media", name: "媒体资讯", icon: "☕", hidden: false },
    { id: "cat_ai", name: "AI工具包", icon: "🧠", hidden: false },
    { id: "cat_dev", name: "开发者工具包", icon: "📦", hidden: false },
    { id: "cat_investor", name: "投资者工具包", icon: "🏢", hidden: false },
    { id: "cat_creator", name: "自媒体工具包", icon: "🎬", hidden: false },
    { id: "cat_tools", name: "常用工具", icon: "💻", hidden: false },
    { id: "cat_resources", name: "素材资源", icon: "👍", hidden: false },
    { id: "cat_opensource", name: "开源项目", icon: "💻", hidden: false }
  ],

  // 网站条目列表
  items: [
    // ===== MK54 (cat_mk54) =====
    { id: "item_mk54_home", catId: "cat_mk54", title: "主页", url: "https://mk54.win", desc: "", icon: "😎", hidden: false },
    { id: "item_mk54_play", catId: "cat_mk54", title: "mk54", url: "https://play.mk54.win", desc: "", icon: "⚓", hidden: false },
    { id: "item_mk54_chat", catId: "cat_mk54", title: "Chat54", url: "https://chat.mk54.win", desc: "", icon: "🎞", hidden: false },
    { id: "item_mk54_pan", catId: "cat_mk54", title: "Pan54", url: "https://pan.mk54.win", desc: "", icon: "📱", hidden: false },

    // ===== 常用推荐 (cat_main) =====
    { id: "item_vercel", catId: "cat_main", title: "Vercel", url: "https://vercel.com/", desc: "Vercel 提供开发者工具和云基础设施，帮助构建、扩展和保护更快、更个性化的网络应用。", icon: "", hidden: false },
    { id: "item_analytics", catId: "cat_main", title: "Google Analytics", url: "https://analytics.google.com/", desc: "Google分析（Google Analytics）是一个由Google所提供的网站流量统计服务。", icon: "", hidden: false },
    { id: "item_cloudflare", catId: "cat_main", title: "Cloudflare", url: "https://dash.cloudflare.com/", desc: "Cloudflare以向客户提供基于反向代理的内容分发网络及分布式域名解析服务为主要业务。", icon: "", hidden: false },
    { id: "item_adsense", catId: "cat_main", title: "Google AdSense", url: "https://www.google.com/adsense/", desc: "Google AdSense广告服务。", icon: "", hidden: false },
    { id: "item_producthunt", catId: "cat_main", title: "Producthunt", url: "https://www.producthunt.com/", desc: "发现新鲜有趣的产品", icon: "", hidden: false },
    { id: "item_leonardo", catId: "cat_main", title: "Leonardo.AI", url: "https://app.leonardo.ai/", desc: "Leonardo.AI是一个人工智能绘图社区和工具。它基于Stable Diffusion人工智能模型,深度集成了其各种插件,提供强大的图片生成和创作功能。", icon: "", hidden: false },
    { id: "item_tensorart", catId: "cat_main", title: "Tensor.art", url: "https://tensor.art/", desc: "Tensor.art是一个免费的在线图像生成和模型托管平台。", icon: "", hidden: false },
    { id: "item_shots", catId: "cat_main", title: "截图美化工具", url: "https://shots.so/", desc: "截图美化，套上不同设备的壳，浏览器、iPhone、iPad、MacBook，Apple Watch", icon: "", hidden: false },
    { id: "item_postspark", catId: "cat_main", title: "PostSpark", url: "https://postspark.app/", desc: "Beautiful Screenshots and Mockups\nCusomizable, eye-catching presentation for any content", icon: "", hidden: false },
    { id: "item_deepseek", catId: "cat_main", title: "DeepSeek - 探索未至之境", url: "https://chat.deepseek.com/", desc: "Chat with DeepSeek AI – your intelligent assistant for coding, content creation, file reading, and more. Upload documents, engage in long-context conversations, and get expert help in AI, natural language processing, and beyond. | 深度求索（DeepSeek）助力编程代码开发、创意写作、文件处理等任务，支持文件上传及长文本对话，随时为您提供高效的AI支持。", icon: "", hidden: false },
    { id: "item_lucide", catId: "cat_main", title: "Lucide", url: "https://lucide.dev/", desc: "Beautiful & consistent icon toolkit made by the community.", icon: "", hidden: false },
    { id: "item_freefordev", catId: "cat_main", title: "Free for Developers", url: "https://free-for.dev/#/", desc: "Developers and Open Source authors now have a massive amount of services offering free tiers, but it can be hard to find them all to make informed decisions.", icon: "", hidden: false },
    { id: "item_hn_main", catId: "cat_main", title: "Hacker News", url: "https://news.ycombinator.com/", desc: "", icon: "", hidden: false },

    // ===== 媒体资讯 (cat_media) =====
    { id: "item_hn_media", catId: "cat_media", title: "Hacker News", url: "https://news.ycombinator.com/", desc: "Hacker News 是一家关于计算机黑客和创业公司的社会化新闻网站，由保罗·格雷厄姆的创业孵化器 Y Combinator 创建。与其它社会化新闻网站不同的是 Hacker News 未登录访客没有赞成或反对一条提交新闻的选项，不过还是可以被有足够 Karma 的用户投赞成或反对票。简而言之，Hacker News 允许提交任何可以被理解为“任何满足人们求知欲”的新闻", icon: "", hidden: false },
    { id: "item_ph_media", catId: "cat_media", title: "Product Hunt", url: "https://www.producthunt.com/", desc: "Product Hunt is a curation of the best new products, every day. Discover the latest mobile apps, websites, and technology products that everyone&#x27;s talking about.", icon: "", hidden: false },
    { id: "item_reddit_media", catId: "cat_media", title: "Reddit", url: "https://www.reddit.com/", desc: "Reddit 拥有超过 100,000 subreddit 社区，数百万用户在此聚集，讨论各自关心的话题。", icon: "", hidden: false },

    // ===== AI工具包 (cat_ai) =====
    { id: "item_chatgpt", catId: "cat_ai", title: "ChatGPT", url: "https://chat.openai.com/", desc: "OpenAI开发的人工智能聊天机器人程序。", icon: "", hidden: false },
    { id: "item_claude", catId: "cat_ai", title: "Claude", url: "https://claude.ai/", desc: "Anthropic开发的AI助手，擅长分析和创作。", icon: "", hidden: false },
    { id: "item_gemini", catId: "cat_ai", title: "Gemini", url: "https://gemini.google.com/", desc: "Google开发的生成式人工智能聊天机器人。它基于同名的Gemini系列大型语言模型。", icon: "", hidden: false },
    { id: "item_poe", catId: "cat_ai", title: "Poe", url: "https://poe.com/", desc: "Poe一款由Quora开发的应用程序。该应用程序集成了多种生成式人工智能，可使用户能够便利切换，比较和使用市场上主流的大型语言模型。", icon: "", hidden: false },
    { id: "item_perplexity", catId: "cat_ai", title: "perplexity", url: "https://www.perplexity.ai/", desc: "一个人工智能助手，旨在为您提供信息、解答问题和帮助您完成各种任务。", icon: "", hidden: false },
    { id: "item_grok", catId: "cat_ai", title: "Grok", url: "https://grok.com/", desc: "Grok is a free AI assistant designed by xAI to maximize truth and objectivity. Grok offers real-time search, image generation, trend analysis, and more.", icon: "", hidden: false },
    { id: "item_napkin", catId: "cat_ai", title: "Napkin", url: "https://www.napkin.ai/", desc: "Napkin turns your text into visuals so sharing your ideas is quick and effective.\n\nNapkin 能够将你的文本转化为视觉内容，使分享你的想法变得快速而有效。", icon: "", hidden: false },
    { id: "item_gamma", catId: "cat_ai", title: "gamma", url: "https://gamma.app/", desc: "AI生成PPT工具", icon: "", hidden: false },
    { id: "item_smithery", catId: "cat_ai", title: "MCP Server 集合站", url: "https://smithery.ai/", desc: "各种各样的 MCP Server", icon: "", hidden: false },
    { id: "item_suno", catId: "cat_ai", title: "Suno | AI Music", url: "https://suno.com/home", desc: "Create stunning original music for free in seconds using AI. Make your own masterpieces, share with friends, and discover music from artists worldwide.", icon: "", hidden: false },
    { id: "item_sora", catId: "cat_ai", title: "Sora", url: "https://sora.chatgpt.com/", desc: "Transform text and images into immersive videos. Animate stories, visualize ideas, and bring your concepts to life.", icon: "", hidden: false },
    { id: "item_nanobanana", catId: "cat_ai", title: "Nano Banana", url: "https://aistudio.google.com/gen-media", desc: "在AI 图像生成领域，神秘的Nano Banana 悄悄窜起，现已正名为Gemini 2.5 Flash Image。它最初并非透过Google 官方宣传引起关注，而是在LM Arena 评比平台上表现亮眼，还掀起 Gemini 公仔风潮！", icon: "", hidden: false },
    { id: "item_veo3", catId: "cat_ai", title: "veo-3", url: "https://aistudio.google.com/models/veo-3", desc: "The fastest path from prompt to production with Gemini", icon: "", hidden: false },
    { id: "item_v0", catId: "cat_ai", title: "v0 by Vercel", url: "https://v0.app/", desc: "Your collaborative AI assistant to design, iterate, and scale full-stack applications for the web.", icon: "", hidden: false },

    // ===== 开发者工具包 (cat_dev) - 精简保留代表性条目 =====
    { id: "item_shadcn", catId: "cat_dev", title: "shadcn/ui", url: "https://ui.shadcn.com/", desc: "Build your component library. Beautifully designed components that you can copy and paste into your apps. Made with Tailwind CSS. Open source.", icon: "", hidden: false },
    { id: "item_cursor", catId: "cat_dev", title: "Cursor", url: "https://www.cursor.com/", desc: "The AI Code Editor Built to make you extraordinarily productive, Cursor is the best way to code with AI.", icon: "", hidden: false },
    { id: "item_windsurf", catId: "cat_dev", title: "Windsurf", url: "https://codeium.com/", desc: "Introducing the Windsurf Editor. The new purpose-built IDE to harness magic.", icon: "", hidden: false },
    { id: "item_github_copilot", catId: "cat_dev", title: "GitHub Copilot", url: "https://github.com/features/copilot", desc: "The AI editor for everyone", icon: "", hidden: false },
    { id: "item_trae", catId: "cat_dev", title: "Trae", url: "https://www.trae.ai/", desc: "字节新出的 Cursor 竞品 Trae，可以用 claude3.5，限时免费。它的 Builder 相当于 Cursor 的 Composer 和 Agent 合体，建议默认使用 Builder。", icon: "", hidden: false },
    { id: "item_kiro", catId: "cat_dev", title: "Kiro", url: "https://kiro.dev/", desc: "The AI IDE for prototype to production", icon: "", hidden: false },
    { id: "item_claude_code", catId: "cat_dev", title: "Claude Code", url: "https://www.anthropic.com/claude-code", desc: "Unleash Claude's raw power directly in your terminal. Search million-line codebases instantly. Turn hours-long workflows into a single command.", icon: "", hidden: false },
    { id: "item_codex", catId: "cat_dev", title: "Codex | OpenAI", url: "https://openai.com/zh-Hans-CN/codex/", desc: "Codex 是 OpenAI 推出的一系列人工智能编码工具，通过将任务委托给强大的云端和本地编码代理，帮助开发人员提升工作效率。", icon: "", hidden: false },
    { id: "item_vercel_dev", catId: "cat_dev", title: "Vercel", url: "https://vercel.com/", desc: "Vercel 提供开发者工具和云基础设施，帮助构建、扩展和保护更快、更个性化的网络应用。", icon: "", hidden: false },
    { id: "item_cloudflare_dev", catId: "cat_dev", title: "Cloudflare", url: "https://dash.cloudflare.com/", desc: "Cloudflare以向客户提供基于反向代理的内容分发网络及分布式域名解析服务为主要业务。", icon: "", hidden: false },
    { id: "item_netlify", catId: "cat_dev", title: "netlify", url: "https://www.netlify.com/", desc: "Netlify is the essential platform for the delivery of exceptional and dynamic web experiences, without limitations.", icon: "", hidden: false },
    { id: "item_edgeone", catId: "cat_dev", title: "Tencent EdgeOne", url: "https://edgeone.ai/zh", desc: "Tencent EdgeOne，亚洲领先的CDN，利用腾讯先进的边缘节点提供卓越的边缘解决方案，用于加速、安全、无服务器和视频。", icon: "", hidden: false },
    { id: "item_drawio", catId: "cat_dev", title: "draw.io", url: "https://www.drawio.com/", desc: "可以绘制架构图、流程图，软件周期内的其它设计图。为团队绘制安全第一的图表。", icon: "", hidden: false },
    { id: "item_processon", catId: "cat_dev", title: "ProccessOn", url: "https://www.processon.com/", desc: "ProccessOn是一款优秀的国产在线协作画图软件，非常好用，也非常漂亮。专业强大的作图工具，支持多人实时在线协作。", icon: "", hidden: false },
    { id: "item_excalidraw", catId: "cat_dev", title: "Excalidraw", url: "https://excalidraw.com/", desc: "Excalidraw是免费的在线协作画图工具。手写风格的草图非常好看；漂亮的图库。", icon: "", hidden: false },
    { id: "item_reactflow", catId: "cat_dev", title: "React Flow", url: "https://reactflow.dev/", desc: "Highly customizable React library for workflow builders, no-code apps, image processing, visualizers, and more", icon: "", hidden: false },
    { id: "item_lottie", catId: "cat_dev", title: "LottieFiles", url: "https://lottiefiles.com/", desc: "Effortlessly bring the smallest, free, ready-to-use motion graphics for the web, app, social, and designs. Create, edit, test, collaborate, and ship Lottie animations in no time!", icon: "", hidden: false },
    { id: "item_aisdk", catId: "cat_dev", title: "AI SDK", url: "https://ai-sdk.dev/", desc: "The AI Toolkit for TypeScript, from the creators of Next.js.", icon: "", hidden: false },
    { id: "item_bt", catId: "cat_dev", title: "宝塔", url: "https://www.bt.cn/new/index.html", desc: "国内用户量很大的一家服务器运维面板", icon: "", hidden: false },
    { id: "item_1panel", catId: "cat_dev", title: "1panel", url: "https://1panel.cn/", desc: "1Panel 提供了一个直观的 Web 界面，帮助用户轻松管理 Linux 服务器中的应用、网站、文件、数据库以及大语言模型（LLMs）等。", icon: "", hidden: false },
    { id: "item_dokploy", catId: "cat_dev", title: "Dokploy", url: "https://dokploy.com/zh-Hans", desc: "以前所未有的简洁和高效提供一站式项目、数据的管理以及系统监控。", icon: "", hidden: false },
    { id: "item_coolify", catId: "cat_dev", title: "Coolify", url: "https://coolify.io/", desc: "Self-hosting platform with superpowers. Deploy apps, databases & 280+ services to your server. Open-source alternative to Heroku.", icon: "", hidden: false },

    // ===== 投资者工具包 (cat_investor) =====
    { id: "item_tradingview", catId: "cat_investor", title: "TradingView", url: "https://www.tradingview.com/", desc: "Where the world charts, chats, and trades markets. We're a supercharged super-charting platform and social network for traders and investors. Free to sign up.", icon: "", hidden: false },
    { id: "item_cninfo", catId: "cat_investor", title: "巨潮资讯网", url: "https://www.cninfo.com.cn/", desc: "巨潮资讯网", icon: "", hidden: false },
    { id: "item_value500", catId: "cat_investor", title: "价值投资导航数据", url: "http://value500.com/", desc: "坚守了十四年的投资数据与资讯网站", icon: "", hidden: false },
    { id: "item_jisilu", catId: "cat_investor", title: "集思录", url: "https://www.jisilu.cn/", desc: "集思录，一个以数据为本的投资社区", icon: "", hidden: false },
    { id: "item_kancaibao", catId: "cat_investor", title: "看财报-价值投资分析工具", url: "https://www.kancaibao.com/", desc: "看财报为价值投资者提供上市公司财务数据,各项基本面分析指标,同时提供DCF折现工具、杜邦分析表、历史PE（市盈率）和PB（市净率）数据、还有多家公司对比和企业估值功能", icon: "", hidden: false },
    { id: "item_jisilu_realtime", catId: "cat_investor", title: "集思录-实时数据", url: "https://www.jisilu.cn/data/cbnew/#cb", desc: "集思录-实时数据", icon: "", hidden: false },
    { id: "item_palmmicro", catId: "cat_investor", title: "palmmicro", url: "https://palmmicro.com/woody/res/chinafuturecn.php", desc: "A股商品等基金净值计算工具", icon: "", hidden: false },

    // ===== 自媒体工具包 (cat_creator) =====
    { id: "item_mp", catId: "cat_creator", title: "公众号助手", url: "https://mp.weixin.qq.com/", desc: "公众号管理平台", icon: "", hidden: false },
    { id: "item_channels", catId: "cat_creator", title: "视频号助手", url: "https://channels.weixin.qq.com", desc: "视频号助手，视频号创作站点", icon: "", hidden: false },
    { id: "item_xhs", catId: "cat_creator", title: "小红书创作中心", url: "https://creator.xiaohongshu.com/", desc: "小红书创作中心", icon: "", hidden: false },
    { id: "item_neurapress_pro", catId: "cat_creator", title: "NeuraPress Pro", url: "https://mp.leti.ltd/", desc: "NeuraPress 是一个现代化的 Markdown 编辑器，专注于提供优质的内容排版体验。响应式设计，支持移动设备，让创作变得更加高效。", icon: "", hidden: false },
    { id: "item_neurapress", catId: "cat_creator", title: "NeuraPress", url: "https://md.leti.ltd/", desc: "Markdown 转微信公众号内容神器", icon: "", hidden: false },
    { id: "item_wxmd", catId: "cat_creator", title: "WeChat Markdown Editor", url: "https://doocs.github.io/md/", desc: "WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性", icon: "", hidden: false },
    { id: "item_mdnice", catId: "cat_creator", title: "mdnice", url: "https://editor.mdnice.com/", desc: "微信公众号样式一键转换，知乎/语雀专属排版优化", icon: "", hidden: false },
    { id: "item_md2card", catId: "cat_creator", title: "MD2Card", url: "https://md2card.com/zh/editor", desc: "MD2Card 是一个免费的 Markdown 转知识卡片工具，支持一键生成小红书风格海报、社交媒体文案排版，让创作者轻松制作精美的图文内容。", icon: "", hidden: false },
    { id: "item_screenity", catId: "cat_creator", title: "Screenity", url: "https://screenity.io/", desc: "开源免费的 chrome 录屏插件。", icon: "", hidden: false },
    { id: "item_cursorful", catId: "cat_creator", title: "Cursorful", url: "https://cursorful.com/", desc: "具有自动缩放功能的屏幕录像 使用 Cursorful 浏览器扩展程序录制精美的屏幕录像跟随光标缩放或在编辑器中加载您自己的视频并可以手动添加缩放。", icon: "", hidden: false },
    { id: "item_tencent_ai", catId: "cat_creator", title: "腾讯朱雀AI文本检测", url: "https://matrix.tencent.com/ai-detect/", desc: "腾讯朱雀AI文本检测基于多种先进的人工智能模型，构造数百万级别的数据进行训练，能够识别出人类和AI的书写模式。该系统不仅具备优秀的英文检测能力，在处理中文数据方面表现尤为出色。", icon: "", hidden: false },
    { id: "item_quaily", catId: "cat_creator", title: "Quaily", url: "https://quaily.com/", desc: "Quaily 是一个现代化的，基于 AI 的，新闻订阅服务。它支持多种推送渠道，包括邮件，telegram 和 discord。它与流行的编辑器（如 Obsidian 和 VScode）有很好的集成。", icon: "", hidden: false },
    { id: "item_medium", catId: "cat_creator", title: "Medium", url: "https://medium.com/", desc: "On Medium, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world.", icon: "", hidden: false },
    { id: "item_substack", catId: "cat_creator", title: "Substack", url: "https://substack.com/", desc: "The app for independent voices", icon: "", hidden: false },
    { id: "item_xiaobot", catId: "cat_creator", title: "小报童", url: "https://xiaobot.net/", desc: "付费专栏，体面而用心地创作", icon: "", hidden: false },
    { id: "item_zsxq", catId: "cat_creator", title: "知识星球", url: "https://zsxq.com/", desc: "知识星球是创作者连接铁杆粉丝，实现知识变现的工具。任何从事创作或艺术的人，例如艺术家、工匠、教师、学术研究、科普等，只要能获得一千位铁杆粉丝，就足够生计无忧，自由创作。", icon: "", hidden: false },

    // ===== 常用工具 (cat_tools) =====
    { id: "item_tableconvert", catId: "cat_tools", title: "TableConvert", url: "https://tableconvert.com/", desc: "Excel转sql在线工具。将你的Excel数据转换成一个网络友好格式,包括HTML、JSON和XML,还可以把Excel 转换成Sql,excel 表格转成 Markdown", icon: "", hidden: false },
    { id: "item_jsoneditor", catId: "cat_tools", title: "JSON Editor Online", url: "https://jsoneditoronline.org/", desc: "在线的JSON编辑器，包括格式化，可视化，对比，显示行号功能。", icon: "", hidden: false },
    { id: "item_beautifier", catId: "cat_tools", title: "Beautifier", url: "https://beautifier.io/", desc: "Beautify JavaScript, JSON, React.js, HTML, CSS, SCSS, and SASS", icon: "", hidden: false },
    { id: "item_sqlformat", catId: "cat_tools", title: "SQL格式化", url: "https://www.dpriver.com/pp/sqlformat.htm", desc: "在线美化SQL语句的工具，格式化方便阅读", icon: "", hidden: false },
    { id: "item_tinypng", catId: "cat_tools", title: "TinyPNG", url: "https://tinypng.com/", desc: "在线图片压缩工具", icon: "", hidden: false },
    { id: "item_screenshots_pro", catId: "cat_tools", title: "ScreenShots.pro", url: "https://screenshots.pro/", desc: "App Screenshot Generator for App Store&Google Play,Create panoramic screenshots for iOS and Android apps. No account needed.", icon: "", hidden: false },
    { id: "item_photoshop", catId: "cat_tools", title: "Photoshop", url: "https://www.adobe.com/cn/products/photoshop.html", desc: "Photoshop不需要解释", icon: "", hidden: false },
    { id: "item_affinity", catId: "cat_tools", title: "Affinity Designer", url: "https://affinity.serif.com/", desc: "专业创意软件", icon: "", hidden: false },
    { id: "item_illustrator", catId: "cat_tools", title: "Illustrator", url: "https://www.adobe.com/cn/products/illustrator/", desc: "矢量图形和插图。", icon: "", hidden: false },
    { id: "item_figma", catId: "cat_tools", title: "Figma", url: "https://www.figma.com/", desc: "在线UI设计工具", icon: "", hidden: false },
    { id: "item_ae", catId: "cat_tools", title: "Adobe After Effects", url: "https://www.adobe.com/cn/products/aftereffects/", desc: "电影般的视觉效果和动态图形。", icon: "", hidden: false },
    { id: "item_principle", catId: "cat_tools", title: "Principle", url: "http://principleformac.com/", desc: "Animate Your Ideas, Design Better Apps", icon: "", hidden: false },
    { id: "item_flinto", catId: "cat_tools", title: "Flinto", url: "https://www.flinto.com/", desc: "Flinto is a Mac app used by top designers around the world to create interactive and animated prototypes of their app designs.", icon: "", hidden: false },
    { id: "item_framer", catId: "cat_tools", title: "Framer", url: "https://framer.com/", desc: "Design everything from detailed icons to high-fidelity interactions—all in one place.", icon: "", hidden: false },
    { id: "item_colorhunt", catId: "cat_tools", title: "Color Hunt", url: "https://colorhunt.co/", desc: "色彩搭配", icon: "", hidden: false },

    // ===== 素材资源 (cat_resources) =====
    { id: "item_iconfinder", catId: "cat_resources", title: "Iconfinder", url: "https://www.iconfinder.com", desc: "2,100,000+ free and premium vector icons.", icon: "", hidden: false },
    { id: "item_iconfont", catId: "cat_resources", title: "iconfont", url: "http://www.iconfont.cn/", desc: "阿里巴巴矢量图标库", icon: "", hidden: false },
    { id: "item_iconmonstr", catId: "cat_resources", title: "iconmonstr", url: "https://iconmonstr.com/", desc: "Free simple icons for your next project", icon: "", hidden: false },
    { id: "item_iconarchive", catId: "cat_resources", title: "Icon Archive", url: "http://www.iconarchive.com/", desc: "Search 590,912 free icons", icon: "", hidden: false },
    { id: "item_findicons", catId: "cat_resources", title: "FindIcons", url: "https://findicons.com/", desc: "Search through 300,000 free icons", icon: "", hidden: false },
    { id: "item_icomoon", catId: "cat_resources", title: "IcoMoonApp", url: "https://icomoon.io/app/", desc: "Icon Font, SVG, PDF & PNG Generator", icon: "", hidden: false },
    { id: "item_flaticon", catId: "cat_resources", title: "flaticon", url: "https://www.flaticon.com/", desc: "634,000+ Free vector icons in SVG, PSD, PNG, EPS format or as ICON FONT.", icon: "", hidden: false },
    { id: "item_uicloud", catId: "cat_resources", title: "UICloud", url: "http://ui-cloud.com/", desc: "The largest user interface design database in the world.", icon: "", hidden: false },
    { id: "item_material_icons", catId: "cat_resources", title: "Material icons", url: "https://material.io/icons/", desc: "Access over 900 material system icons, available in a variety of sizes and densities, and as a web font.", icon: "", hidden: false },
    { id: "item_fontawesome", catId: "cat_resources", title: "Font Awesome", url: "fontawesomeicon", desc: "The complete set of 675 icons in Font Awesome", icon: "", hidden: false },
    { id: "item_ionicons", catId: "cat_resources", title: "ion icons", url: "http://ionicons.com/", desc: "The premium icon font for Ionic Framework.", icon: "", hidden: false },
    { id: "item_simpleline", catId: "cat_resources", title: "Simpleline Icons", url: "http://simplelineicons.com/", desc: "Simple line Icons pack", icon: "", hidden: false },
    { id: "item_iconsfeed", catId: "cat_resources", title: "Iconsfeed", url: "http://www.iconsfeed.com/", desc: "iOS icons gallery", icon: "", hidden: false },
    { id: "item_iosicon", catId: "cat_resources", title: "iOS Icon Gallery", url: "http://iosicongallery.com/", desc: "Showcasing beautiful icon designs from the iOS App Store", icon: "", hidden: false },
    { id: "item_worldvector", catId: "cat_resources", title: "World Vector Logo", url: "https://worldvectorlogo.com/", desc: "Brand logos free to download", icon: "", hidden: false },
    { id: "item_instantlogo", catId: "cat_resources", title: "Instant Logo Search", url: "http://instantlogosearch.com/", desc: "Search & download thousands of logos instantly", icon: "", hidden: false },
    { id: "item_freepik", catId: "cat_resources", title: "Freepik", url: "https://www.freepik.com/", desc: "免费矢量素材", icon: "", hidden: false },
    { id: "item_unsplash", catId: "cat_resources", title: "Unsplash", url: "https://unsplash.com/", desc: "免费高清图片", icon: "", hidden: false },

    // ===== 开源项目 (cat_opensource) =====
    { id: "item_docusaurus", catId: "cat_opensource", title: "Docusaurus", url: "https://docusaurus.io/", desc: "Build optimized websites quickly, focus on your content.", icon: "", hidden: false },
    { id: "item_vuepress", catId: "cat_opensource", title: "VuePress", url: "https://vuepress.vuejs.org/", desc: "Vue 驱动的静态网站生成器", icon: "", hidden: false }
  ]
};

/**
 * 工业级底层兜底配置 (Hard-bottom Fallback)
 * 当外部模板和内置 defaultData 都损坏时的最终防线
 */
export const MINIMAL_SAFE_DATA = {
  settings: { zenMode: true, link_target: '_blank', themeMode: 'auto' },
  categories: [
    { id: 'f-cat-1', name: 'MK54', icon: '⭐', hidden: false },
    { id: 'f-cat-2', name: 'AI工具包', icon: '🧠', hidden: false },
    { id: 'f-cat-3', name: '开发者工具', icon: '📦', hidden: false },
    { id: 'f-cat-4', name: '实用工具', icon: '🛠️', hidden: false }
  ],
  items: [
    { id: "f-i-1", catId: "f-cat-1", title: "主页", url: "https://mk54.win", desc: "", icon: "😎", hidden: false },
    { id: "f-i-2", catId: "f-cat-1", title: "mk54", url: "https://play.mk54.win", desc: "", icon: "⚓", hidden: false },
    { id: "f-i-3", catId: "f-cat-1", title: "Chat54", url: "https://chat.mk54.win", desc: "", icon: "🎞", hidden: false },
    { id: "f-i-4", catId: "f-cat-1", title: "Pan54", url: "https://pan.mk54.win", desc: "", icon: "📱", hidden: false },
    { id: 'f-i-5', catId: 'f-cat-2', title: 'ChatGPT', url: 'https://chat.openai.com/', desc: 'OpenAI 人工智能聊天机器人', icon: '', hidden: false },
    { id: 'f-i-6', catId: 'f-cat-2', title: 'Claude', url: 'https://claude.ai/', desc: 'Anthropic 开发的AI助手', icon: '', hidden: false },
    { id: 'f-i-7', catId: 'f-cat-3', title: 'Cursor', url: 'https://www.cursor.com/', desc: 'The AI Code Editor', icon: '', hidden: false },
    { id: 'f-i-8', catId: 'f-cat-3', title: 'shadcn/ui', url: 'https://ui.shadcn.com/', desc: 'Beautifully designed components', icon: '', hidden: false },
    { id: 'f-i-9', catId: 'f-cat-4', title: 'Figma', url: 'https://www.figma.com/', desc: '在线UI设计工具', icon: '', hidden: false },
    { id: 'f-i-10', catId: 'f-cat-4', title: 'TinyPNG', url: 'https://tinypng.com/', desc: '在线图片压缩工具', icon: '', hidden: false }
  ]
};
