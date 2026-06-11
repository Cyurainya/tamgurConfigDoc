import "./styles.css";

const docs = [
  {
    id: "openclaw",
    nav: "OpenClaw - 自托管 AI 智能助手平台",
    title: "OpenClaw 部署教程",
    description: "从环境准备到服务启动，快速搭建一个可自行托管的 AI 智能助手平台。",
    sections: [
      ["准备工作", "部署前请确认服务器可以访问互联网，并准备好可用的模型服务密钥。", ["Node.js 20 或更高版本", "至少 2 GB 可用内存", "一个支持反向代理的域名（可选）"]],
      ["安装 OpenClaw", "推荐使用项目脚本完成初始化。脚本会创建工作目录并安装运行依赖。", null, "git clone https://github.com/example/openclaw.git\ncd openclaw\nnpm install"],
      ["配置模型服务", "复制环境变量模板，然后填写模型地址、密钥和默认模型。", null, "cp .env.example .env\n\nAI_API_KEY=your_api_key\nAI_BASE_URL=https://api.example.com/v1\nAI_MODEL=your-model"],
      ["启动服务", "开发环境可以直接启动；正式环境建议先构建，再由进程管理器托管。", null, "npm run dev\n# 或\nnpm run build && npm run start"],
      ["验证部署", "浏览器访问服务地址。能够看到会话页面并收到模型回复，即表示基础部署完成。"],
      ["常见问题", "如果请求超时，请依次检查网络连通性、模型密钥权限和反向代理超时设置。"]
    ]
  },
  {
    id: "claude-code",
    nav: "Claude Code - Anthropic 终端编程助手",
    title: "Claude Code 安装与配置",
    description: "在终端中安装、认证并开始使用 Claude Code。",
    sections: [
      ["环境要求", "准备 Node.js 18+、Git 和一个可用终端。"],
      ["安装", "使用 npm 全局安装命令行工具。", null, "npm install -g @anthropic-ai/claude-code"],
      ["登录与认证", "运行登录命令，根据终端提示完成账号授权或配置 API 密钥。", null, "claude"],
      ["在项目中使用", "进入代码仓库后启动助手，它会先读取项目结构，再等待你的任务。", null, "cd your-project\nclaude"],
      ["使用建议", "提交任务时写清目标、约束和验收方式，并在执行前检查计划。"]
    ]
  },
  {
    id: "codex-cli",
    nav: "OpenAI Codex CLI - OpenAI 终端 AI 编程助手",
    title: "OpenAI Codex CLI 使用教程",
    description: "安装 Codex CLI，在本地代码仓库中完成分析、修改与验证。",
    sections: [
      ["安装前准备", "请准备现代 Node.js 环境和一个 Git 仓库。"],
      ["安装 Codex CLI", "通过 npm 安装命令行程序。", null, "npm install -g @openai/codex"],
      ["完成认证", "首次运行时按照终端提示登录，或在环境变量中配置凭证。", null, "codex"],
      ["开始一个任务", "在项目根目录启动 Codex，并用自然语言描述需要完成的代码任务。"],
      ["权限与安全", "执行命令前留意权限范围，不要把生产密钥写入仓库。"]
    ]
  },
  {
    id: "factory-droid",
    nav: "Factory Droid CLI - Factory 终端 AI 编程助手",
    title: "Factory Droid CLI 配置教程",
    description: "完成 Droid CLI 的安装、授权与项目初始化。",
    sections: [
      ["系统要求", "确认终端、Git 和运行时版本满足当前发行版要求。"],
      ["安装 CLI", "使用官方安装方式获取最新稳定版。", null, "npm install -g @factory-ai/droid"],
      ["初始化项目", "在代码仓库中运行初始化命令，生成项目级配置。", null, "droid init"],
      ["运行任务", "用清晰的验收条件描述修改目标，并在完成后运行项目测试。"]
    ]
  },
  {
    id: "cc-switch",
    nav: "CC Switch - AI CLI 统一管理工具",
    title: "CC Switch 安装与使用",
    description: "统一管理多个 AI CLI 的服务地址、模型与凭证配置。",
    sections: [
      ["工具简介", "CC Switch 适合需要在多个供应商或配置方案之间频繁切换的用户。"],
      ["安装", "下载与你的操作系统匹配的版本并完成安装。"],
      ["添加配置", "为每个服务填写名称、接口地址、模型和凭证环境变量。"],
      ["切换与验证", "切换配置后重新打开终端，并运行对应 CLI 验证当前连接。"],
      ["安全提示", "凭证应保存在系统密钥链或本地安全存储中，不要提交到 Git。"]
    ]
  },
  {
    id: "cherry-studio",
    nav: "Cherry Studio - 桌面 AI 客户端",
    title: "Cherry Studio 配置教程",
    description: "安装桌面客户端并接入常用模型服务。",
    sections: [
      ["下载安装", "从项目发布页下载对应系统版本，完成安装后启动应用。"],
      ["添加服务商", "在设置中选择服务商，填写 API 地址和密钥。"],
      ["配置模型", "添加模型标识并设置上下文长度、温度等常用参数。"],
      ["开始对话", "新建助手，选择模型并发送测试消息确认配置可用。"]
    ]
  },
  {
    id: "aionui",
    nav: "AionUi - 免费开源的桌面办公Agent",
    title: "AionUi 部署教程",
    description: "安装并配置开源桌面办公 Agent。",
    sections: [
      ["安装应用", "获取适合当前系统的安装包，并根据系统提示完成安装。"],
      ["连接模型", "在偏好设置中添加模型提供方和凭证。"],
      ["工作区权限", "只授权任务所需的目录，敏感文件建议保持在工作区之外。"],
      ["创建任务", "先从小范围、可验证的办公任务开始，再逐步增加自动化程度。"]
    ]
  },
  {
    id: "fluent-read",
    nav: "流畅阅读 (FluentRead) - 开源翻译插件",
    title: "流畅阅读 FluentRead 配置",
    description: "安装浏览器翻译插件并设置双语阅读体验。",
    sections: [
      ["安装扩展", "在浏览器扩展管理页安装 FluentRead，并固定到工具栏。"],
      ["翻译服务", "选择内置服务或填写兼容接口地址和密钥。"],
      ["页面样式", "根据阅读习惯调整原文、译文的显示方式和字体。"],
      ["快捷操作", "设置常用快捷键，以便快速翻译选中文本或整篇网页。"]
    ]
  },
  {
    id: "langbot",
    nav: "LangBot - 即时通信机器人开发平台",
    title: "LangBot 部署教程",
    description: "部署即时通信机器人平台并接入模型与消息渠道。",
    sections: [
      ["部署准备", "准备 Docker、数据库和可以接收回调的公网地址。"],
      ["启动服务", "拉取配置并使用 Compose 启动服务。", null, "docker compose up -d"],
      ["接入模型", "在后台创建模型供应商配置，并发送测试请求。"],
      ["连接消息平台", "按照目标平台要求创建机器人，填写回调地址和验证信息。"],
      ["日志排查", "出现消息丢失时，检查平台回调日志、签名配置和网络状态。"]
    ]
  },
  {
    id: "astrbot",
    nav: "AstrBot - Agent 聊天机器人",
    title: "AstrBot 安装与部署",
    description: "搭建支持插件与多平台接入的 Agent 聊天机器人。",
    sections: [
      ["选择部署方式", "本地体验可直接运行，服务器部署推荐使用 Docker。"],
      ["Docker 启动", "准备配置文件后启动容器。", null, "docker compose up -d"],
      ["模型配置", "在管理面板中添加模型接口，并设置默认对话模型。"],
      ["平台适配器", "启用需要的聊天平台适配器，完成令牌和回调配置。"],
      ["插件管理", "仅安装可信来源的插件，并在升级前备份配置和数据。"]
    ]
  }
];

const sidebar = document.querySelector("#sidebar-left");
const documentRoot = document.querySelector("#document");
const toc = document.querySelector("#toc");
const contentCenter = document.querySelector("#content-center");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function renderSidebar() {
  sidebar.innerHTML = `
    <ul class="nav-list">
      ${docs.map((doc) => `
        <li>
          <button class="nav-item" type="button" data-doc="${doc.id}">
            ${doc.nav}
          </button>
        </li>
      `).join("")}
    </ul>
  `;

  sidebar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-doc]");
    if (!button) return;
    renderDocument(button.dataset.doc);
  });
}

function renderSection(section, index) {
  const [heading, body, bullets, code] = section;
  const callout = index === 0
    ? `<div class="callout info"><div class="callout-title">ℹ️&nbsp;&nbsp;说明</div><p>${body}</p></div>`
    : `<p>${body}</p>`;

  return `
    <section>
      <h2 id="heading-${index}">${heading}</h2>
      ${callout}
      ${bullets ? `<ul class="content-list">${bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      ${code ? `
        <div class="code-block">
          <button class="copy-btn" type="button">复制</button>
          <pre><code>${escapeHtml(code)}</code></pre>
        </div>
      ` : ""}
      ${index === 2 ? `
        <div class="callout tip">
          <div class="callout-title">✨&nbsp;&nbsp;建议</div>
          <p>先使用测试环境确认配置，再迁移到长期运行的生产环境。</p>
        </div>
      ` : ""}
    </section>
  `;
}

function renderDocument(id) {
  const doc = docs.find((item) => item.id === id) || docs[0];

  documentRoot.innerHTML = `
    <h1 class="page-title">${doc.title}</h1>
    <p class="page-description">${doc.description}</p>
    ${doc.sections.map(renderSection).join("")}
  `;

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.doc === doc.id);
  });

  toc.innerHTML = doc.sections.map((section, index) => `
    <li><a href="#heading-${index}">${section[0]}</a></li>
  `).join("");

  documentRoot.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const code = button.nextElementSibling.textContent;
      await navigator.clipboard.writeText(code);
      button.textContent = "已复制!";
      window.setTimeout(() => {
        button.textContent = "复制";
      }, 2000);
    });
  });

  contentCenter.scrollTop = 0;
  history.replaceState(null, "", `#${doc.id}`);
}

toc.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  event.preventDefault();
  document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
});

renderSidebar();
renderDocument(location.hash.slice(1));
