import "./styles.css";

const languages = [
  ["zh-CN", "简体中文"],
  ["en", "English"],
  ["fr", "Français"],
  ["ru", "Русский"],
  ["ja", "日本語"],
  ["vi", "Tiếng Việt"]
];

const products = [
  ["openclaw", "OpenClaw", "assistant", ["prepare", "install", "model", "start", "verify", "troubleshoot"], [
    "git clone https://github.com/example/openclaw.git\ncd openclaw\nnpm install",
    "cp .env.example .env\n\nAI_API_KEY=your_api_key\nAI_BASE_URL=https://api.example.com/v1\nAI_MODEL=your-model",
    "npm run dev\n# production\nnpm run build && npm run start"
  ]],
  ["claude-code", "Claude Code", "terminal", ["requirements", "install", "auth", "project", "advice"], [
    "npm install -g @anthropic-ai/claude-code", "claude", "cd your-project\nclaude"
  ]],
  ["codex-cli", "OpenAI Codex CLI", "terminal", ["requirements", "install", "auth", "project", "security"], [
    "npm install -g @openai/codex", "codex"
  ]],
  ["factory-droid", "Factory Droid CLI", "terminal", ["requirements", "install", "project", "run"], [
    "npm install -g @factory-ai/droid", "droid init"
  ]],
  ["cc-switch", "CC Switch", "manager", ["intro", "install", "configure", "verify", "security"], []],
  ["cherry-studio", "Cherry Studio", "desktop", ["download", "provider", "model", "chat"], []],
  ["aionui", "AionUi", "agent", ["install", "model", "permission", "task"], []],
  ["fluent-read", "FluentRead", "translation", ["extension", "provider", "style", "shortcut"], []],
  ["langbot", "LangBot", "bot", ["prepare", "start", "model", "platform", "logs"], ["docker compose up -d"]],
  ["astrbot", "AstrBot", "bot", ["deploy", "start", "model", "platform", "plugin"], ["docker compose up -d"]]
];

const packs = {
  "zh-CN": {
    home: "返回 Tamgur 主页", toc: "目录", info: "说明", tip: "建议",
    copy: "复制", copied: "已复制!", recommendation: "先使用测试环境确认配置，再迁移到长期运行的生产环境。",
    categories: {
      assistant: "自托管 AI 智能助手平台", terminal: "终端 AI 编程助手", manager: "AI CLI 统一管理工具",
      desktop: "桌面 AI 客户端", agent: "免费开源桌面办公 Agent", translation: "开源翻译插件", bot: "Agent 聊天机器人平台"
    },
    title: (name) => `${name} 部署与配置教程`,
    description: (name) => `从环境准备到服务启动，快速完成 ${name} 的安装、配置与验证。`,
    sections: {
      prepare: ["准备工作", "部署前请确认服务器可以访问互联网，并准备好所需的账号、模型密钥和运行环境。"],
      requirements: ["环境要求", "准备现代 Node.js 环境、Git 和一个可用终端。"],
      install: ["安装", "使用推荐的安装方式获取最新稳定版本，并确认命令可以正常运行。"],
      model: ["配置模型服务", "填写模型接口地址、密钥和默认模型，然后发送测试请求。"],
      start: ["启动服务", "启动应用并检查运行日志。生产环境建议使用容器或进程管理器托管。"],
      verify: ["验证部署", "浏览器访问服务地址，完成一次实际操作以确认配置可用。"],
      troubleshoot: ["常见问题", "如果请求失败，请依次检查网络、凭证权限、日志和反向代理设置。"],
      auth: ["登录与认证", "按照终端提示完成账号授权，或配置服务所需的 API 密钥。"],
      project: ["在项目中使用", "进入项目目录启动工具，并用清晰的目标和验收条件描述任务。"],
      advice: ["使用建议", "先从范围明确、可以验证的小任务开始，并在执行后检查结果。"],
      security: ["权限与安全", "只授予任务所需权限，不要把生产密钥提交到 Git 仓库。"],
      run: ["运行任务", "描述修改目标并运行项目测试，确认结果符合预期。"],
      intro: ["工具简介", "该工具适合统一管理多个 AI 服务、模型和命令行配置。"],
      configure: ["添加配置", "填写服务名称、接口地址、模型和凭证环境变量。"],
      download: ["下载安装", "下载与你的操作系统匹配的版本，完成安装后启动应用。"],
      provider: ["添加服务商", "选择服务商并填写兼容接口地址和密钥。"],
      chat: ["开始对话", "创建会话，选择模型并发送测试消息确认配置可用。"],
      permission: ["工作区权限", "只授权任务所需目录，将敏感文件保留在工作区之外。"],
      task: ["创建任务", "先从小范围、可验证的任务开始，再逐步增加自动化程度。"],
      extension: ["安装扩展", "安装浏览器扩展并将它固定到工具栏。"],
      style: ["页面样式", "根据阅读习惯调整原文、译文、字体和布局。"],
      shortcut: ["快捷操作", "设置常用快捷键以快速处理选中文本或整个页面。"],
      platform: ["连接消息平台", "创建平台机器人，填写令牌、回调地址和验证信息。"],
      logs: ["日志排查", "检查回调日志、签名配置、网络状态和容器运行情况。"],
      deploy: ["选择部署方式", "本地体验可直接运行，服务器部署推荐使用 Docker。"],
      plugin: ["插件管理", "只安装可信来源的插件，并在升级前备份配置和数据。"]
    }
  },
  en: {
    home: "Back to Tamgur", toc: "On this page", info: "Information", tip: "Tip",
    copy: "Copy", copied: "Copied!", recommendation: "Validate the configuration in a test environment before moving it to production.",
    categories: {
      assistant: "Self-hosted AI assistant platform", terminal: "Terminal AI coding assistant", manager: "Unified AI CLI manager",
      desktop: "Desktop AI client", agent: "Open-source desktop office agent", translation: "Open-source translation extension", bot: "Agent chatbot platform"
    },
    title: (name) => `${name} deployment and configuration`,
    description: (name) => `Install, configure, launch, and verify ${name} from start to finish.`,
    sections: {
      prepare: ["Preparation", "Confirm internet access and prepare the required account, model credentials, and runtime."],
      requirements: ["Requirements", "Prepare a modern Node.js runtime, Git, and a working terminal."],
      install: ["Installation", "Use the recommended installation method to get the latest stable release and verify the command."],
      model: ["Model service", "Enter the API endpoint, credentials, and default model, then send a test request."],
      start: ["Start the service", "Launch the application and inspect its logs. Use a container or process manager in production."],
      verify: ["Verify deployment", "Open the service in a browser and complete a real operation to confirm it works."],
      troubleshoot: ["Troubleshooting", "Check networking, credential permissions, logs, and reverse-proxy settings in that order."],
      auth: ["Authentication", "Follow the terminal prompts to authorize your account or configure an API key."],
      project: ["Use in a project", "Open the project directory, start the tool, and describe the task with clear acceptance criteria."],
      advice: ["Best practices", "Start with small, verifiable tasks and review the result after execution."],
      security: ["Permissions and security", "Grant only required permissions and never commit production secrets to Git."],
      run: ["Run a task", "Describe the intended change and run project tests to verify the result."],
      intro: ["Overview", "This tool provides one place to manage multiple AI services, models, and CLI profiles."],
      configure: ["Add configuration", "Enter the service name, endpoint, model, and credential environment variables."],
      download: ["Download and install", "Download the build for your operating system, install it, and launch the app."],
      provider: ["Add a provider", "Choose a provider and enter its compatible endpoint and API key."],
      chat: ["Start a conversation", "Create a chat, choose a model, and send a test message."],
      permission: ["Workspace permissions", "Authorize only the required folders and keep sensitive files outside the workspace."],
      task: ["Create a task", "Begin with a small, verifiable task before increasing automation."],
      extension: ["Install extension", "Install the browser extension and pin it to the toolbar."],
      style: ["Page appearance", "Adjust source text, translation, fonts, and layout for comfortable reading."],
      shortcut: ["Shortcuts", "Configure shortcuts for selected text or full-page actions."],
      platform: ["Connect a platform", "Create a bot and configure its token, callback URL, and verification details."],
      logs: ["Inspect logs", "Check callback logs, signatures, networking, and container status."],
      deploy: ["Choose deployment", "Run directly for local use; Docker is recommended for servers."],
      plugin: ["Plugin management", "Install plugins only from trusted sources and back up data before upgrades."]
    }
  }
};

const sectionOrder = Object.keys(packs.en.sections);
const localizedOverrides = {
  fr: {
    ui: ["Retour à Tamgur", "Sur cette page", "Informations", "Conseil", "Copier", "Copié !", "Déploiement et configuration", "Installez, configurez, démarrez et vérifiez"],
    categories: ["Plateforme d’assistant IA auto-hébergée", "Assistant de programmation IA en terminal", "Gestionnaire unifié de CLI IA", "Client IA de bureau", "Agent bureautique open source", "Extension de traduction open source", "Plateforme de chatbot Agent"],
    headings: ["Préparation", "Prérequis", "Installation", "Service de modèle", "Démarrer le service", "Vérifier le déploiement", "Dépannage", "Authentification", "Utilisation dans un projet", "Bonnes pratiques", "Autorisations et sécurité", "Exécuter une tâche", "Présentation", "Ajouter une configuration", "Télécharger et installer", "Ajouter un fournisseur", "Démarrer une conversation", "Autorisations de l’espace de travail", "Créer une tâche", "Installer l’extension", "Apparence de la page", "Raccourcis", "Connecter une plateforme", "Consulter les journaux", "Choisir le déploiement", "Gestion des extensions"],
    body: "Suivez cette étape avec les paramètres recommandés, puis vérifiez le résultat avant de continuer.",
    recommendation: "Validez la configuration dans un environnement de test avant le passage en production."
  },
  ru: {
    ui: ["Вернуться в Tamgur", "На этой странице", "Информация", "Совет", "Копировать", "Скопировано!", "Развертывание и настройка", "Установите, настройте, запустите и проверьте"],
    categories: ["Самостоятельно размещаемый ИИ-ассистент", "Терминальный ИИ-помощник программиста", "Единый менеджер AI CLI", "Настольный ИИ-клиент", "Открытый офисный агент", "Открытое расширение перевода", "Платформа Agent-чатботов"],
    headings: ["Подготовка", "Требования", "Установка", "Сервис модели", "Запуск сервиса", "Проверка развертывания", "Устранение неполадок", "Аутентификация", "Использование в проекте", "Рекомендации", "Права и безопасность", "Запуск задачи", "Обзор", "Добавление конфигурации", "Загрузка и установка", "Добавление провайдера", "Начало диалога", "Права рабочей области", "Создание задачи", "Установка расширения", "Оформление страницы", "Горячие клавиши", "Подключение платформы", "Проверка журналов", "Выбор развертывания", "Управление плагинами"],
    body: "Выполните этот шаг с рекомендуемыми параметрами и проверьте результат перед продолжением.",
    recommendation: "Проверьте конфигурацию в тестовой среде перед переносом в production."
  },
  ja: {
    ui: ["Tamgur ホームへ", "このページ", "情報", "ヒント", "コピー", "コピー済み", "導入と設定", "インストール、設定、起動、確認を行います"],
    categories: ["セルフホスト型 AI アシスタント", "ターミナル AI コーディング支援", "AI CLI 統合管理ツール", "デスクトップ AI クライアント", "オープンソース業務 Agent", "オープンソース翻訳拡張", "Agent チャットボット基盤"],
    headings: ["準備", "動作要件", "インストール", "モデルサービス", "サービスの起動", "デプロイの確認", "トラブルシューティング", "認証", "プロジェクトで使う", "推奨事項", "権限とセキュリティ", "タスクの実行", "概要", "設定の追加", "ダウンロードとインストール", "プロバイダーの追加", "会話を開始", "ワークスペース権限", "タスクの作成", "拡張機能のインストール", "ページ表示", "ショートカット", "プラットフォーム接続", "ログの確認", "デプロイ方法", "プラグイン管理"],
    body: "推奨設定でこの手順を実行し、次へ進む前に結果を確認してください。",
    recommendation: "本番環境へ移行する前に、テスト環境で設定を確認してください。"
  },
  vi: {
    ui: ["Về trang Tamgur", "Trong trang này", "Thông tin", "Gợi ý", "Sao chép", "Đã sao chép!", "Triển khai và cấu hình", "Cài đặt, cấu hình, khởi chạy và xác minh"],
    categories: ["Nền tảng trợ lý AI tự lưu trữ", "Trợ lý lập trình AI trên terminal", "Trình quản lý AI CLI hợp nhất", "Ứng dụng AI trên máy tính", "Agent văn phòng mã nguồn mở", "Tiện ích dịch mã nguồn mở", "Nền tảng chatbot Agent"],
    headings: ["Chuẩn bị", "Yêu cầu", "Cài đặt", "Dịch vụ mô hình", "Khởi động dịch vụ", "Xác minh triển khai", "Khắc phục sự cố", "Xác thực", "Sử dụng trong dự án", "Khuyến nghị", "Quyền và bảo mật", "Chạy tác vụ", "Tổng quan", "Thêm cấu hình", "Tải xuống và cài đặt", "Thêm nhà cung cấp", "Bắt đầu trò chuyện", "Quyền không gian làm việc", "Tạo tác vụ", "Cài tiện ích", "Giao diện trang", "Phím tắt", "Kết nối nền tảng", "Kiểm tra nhật ký", "Chọn cách triển khai", "Quản lý plugin"],
    body: "Thực hiện bước này với cấu hình được đề xuất và kiểm tra kết quả trước khi tiếp tục.",
    recommendation: "Hãy xác minh cấu hình trong môi trường thử nghiệm trước khi chuyển sang production."
  }
};

for (const [locale, data] of Object.entries(localizedOverrides)) {
  const values = data.ui;
  const categoryKeys = Object.keys(packs.en.categories);
  packs[locale] = {
    ...packs.en,
    home: values[0], toc: values[1], info: values[2], tip: values[3],
    copy: values[4], copied: values[5],
    recommendation: data.recommendation,
    categories: Object.fromEntries(categoryKeys.map((key, index) => [key, data.categories[index]])),
    title: (name) => `${name} - ${values[6]}`,
    description: (name) => `${values[7]} ${name}.`,
    sections: Object.fromEntries(sectionOrder.map((key, index) => [
      key,
      [data.headings[index], data.body]
    ]))
  };
}

let locale = localStorage.getItem("tamgurDoc-language") || "zh-CN";
let activeId = location.hash.slice(1) || products[0][0];

const sidebar = document.querySelector("#sidebar-left");
const documentRoot = document.querySelector("#document");
const toc = document.querySelector("#toc");
const contentCenter = document.querySelector("#content-center");
const homeLink = document.querySelector("#home-link");
const languageButton = document.querySelector("#language-button");
const languageMenu = document.querySelector("#language-menu");
const currentLanguage = document.querySelector("#current-language");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function getPack() {
  return packs[locale] || packs.en;
}

function renderNavigation() {
  const pack = getPack();
  document.documentElement.lang = locale;
  document.title = "tamgurDoc";
  homeLink.textContent = pack.home;
  document.querySelector(".toc-title").textContent = pack.toc;
  currentLanguage.textContent = languages.find(([code]) => code === locale)?.[1] || "English";
  sidebar.setAttribute("aria-label", pack.toc);

  sidebar.innerHTML = `<ul class="nav-list">${products.map(([id, name, category]) => `
    <li><button class="nav-item${id === activeId ? " active" : ""}" type="button" data-doc="${id}">
      <strong>${name}</strong><span>${pack.categories[category]}</span>
    </button></li>`).join("")}</ul>`;

  languageMenu.innerHTML = languages.map(([code, label]) => `
    <button type="button" data-language="${code}" class="${code === locale ? "selected" : ""}">
      <span>${label}</span><span class="check">${code === locale ? "✓" : ""}</span>
    </button>`).join("");
}

function renderSection(key, index, code) {
  const pack = getPack();
  const [heading, body] = pack.sections[key] || packs.en.sections[key];
  return `<section>
    <h2 id="heading-${index}">${heading}</h2>
    ${index === 0
      ? `<div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;${pack.info}</div><p>${body}</p></div>`
      : `<p>${body}</p>`}
    ${code ? `<div class="code-block"><button class="copy-btn" type="button">${pack.copy}</button><pre><code>${escapeHtml(code)}</code></pre></div>` : ""}
    ${index === 2 ? `<div class="callout tip"><div class="callout-title">✦&nbsp;&nbsp;${pack.tip}</div><p>${pack.recommendation}</p></div>` : ""}
  </section>`;
}

function renderDocument() {
  const pack = getPack();
  const product = products.find(([id]) => id === activeId) || products[0];
  const [, name, , sectionKeys, commands] = product;
  let commandIndex = 0;
  const renderedSections = sectionKeys.map((key, index) => {
    const codeKeys = ["install", "model", "start", "auth", "project", "run"];
    const code = codeKeys.includes(key) ? commands[commandIndex++] : null;
    return renderSection(key, index, code);
  });

  documentRoot.innerHTML = `<h1 class="page-title">${pack.title(name)}</h1>
    <p class="page-description">${pack.description(name)}</p>${renderedSections.join("")}`;

  toc.innerHTML = sectionKeys.map((key, index) => {
    const section = pack.sections[key] || packs.en.sections[key];
    return `<li><a href="#heading-${index}">${section[0]}</a></li>`;
  }).join("");

  documentRoot.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(button.nextElementSibling.textContent);
      button.textContent = pack.copied;
      window.setTimeout(() => { button.textContent = pack.copy; }, 2000);
    });
  });
}

function renderAll(resetScroll = false) {
  renderNavigation();
  renderDocument();
  if (resetScroll) contentCenter.scrollTop = 0;
}

sidebar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-doc]");
  if (!button) return;
  activeId = button.dataset.doc;
  history.replaceState(null, "", `#${activeId}`);
  renderAll(true);
});

languageButton.addEventListener("click", () => {
  const open = languageMenu.hidden;
  languageMenu.hidden = !open;
  languageButton.setAttribute("aria-expanded", String(open));
});

languageMenu.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (!button) return;
  locale = button.dataset.language;
  localStorage.setItem("tamgurDoc-language", locale);
  languageMenu.hidden = true;
  languageButton.setAttribute("aria-expanded", "false");
  renderAll();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-picker")) {
    languageMenu.hidden = true;
    languageButton.setAttribute("aria-expanded", "false");
  }
});

toc.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  event.preventDefault();
  document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
});

renderAll();
