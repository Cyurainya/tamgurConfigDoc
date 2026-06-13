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

const claudeCodeToc = [
  ["claude-demo", "效果演示", false],
  ["claude-features", "特性", true],
  ["claude-config", "AI 模型配置方法", false],
  ["claude-windows", "Windows 端图文指引", true],
  ["claude-macos", "MacOS 端图文指引", true],
  ["claude-linux", "Linux 端图文指引", true]
];

const openClawToc = [
  ["openclaw-features", "核心特性", false],
  ["openclaw-channels", "多渠道集成", true],
  ["openclaw-security", "自托管与数据安全", true],
  ["openclaw-agent", "智能代理能力", true],
  ["openclaw-prepare", "接入前准备", false],
  ["openclaw-install", "安装 OpenClaw（macOS/Linux）", true],
  ["openclaw-onboard", "运行引导向导", true],
  ["openclaw-gateway", "检查 Gateway 与 Control UI", true],
  ["openclaw-config-file", "定位配置文件", true],
  ["openclaw-provider", "使用 Tamgur AI API 作为模型提供商", false],
  ["openclaw-approach", "接入思路", true],
  ["openclaw-secret", "推荐做法：用环境变量保存密钥", true],
  ["openclaw-details", "关键配置说明", true],
  ["openclaw-verify", "验证是否接入成功", true],
  ["openclaw-troubleshoot", "常见问题", true]
];

const detailedLocales = {
  en: {
    placeholder: "Image placeholder",
    project: "Project overview",
    official: "Official website",
    docs: "Documentation",
    source: "GitHub repository",
    openclaw: {
      title: "OpenClaw - Self-hosted AI assistant platform",
      description: "Install OpenClaw and connect it to the Tamgur AI API to build a self-hosted assistant with Telegram, Discord, WhatsApp, and other channels.",
      intro: "OpenClaw is an open-source, self-hosted personal AI assistant platform that connects messaging apps to AI agents running on your own hardware.",
      openSource: "OpenClaw is fully open source. This guide covers installation, configuration, and the complete Tamgur AI API integration.",
      headings: ["Core features", "Multi-channel integration", "Self-hosting and data security", "Agent capabilities", "Prerequisites", "Install OpenClaw (macOS/Linux)", "Run the onboarding wizard", "Check Gateway and Control UI", "Locate the configuration file", "Use Tamgur AI API as a model provider", "Integration approach", "Store the API key in an environment variable", "Key configuration fields", "Verify the integration", "Troubleshooting"],
      featureGroups: [
        ["Multiple channels", "Connect Telegram, Discord, WhatsApp, iMessage, and additional plugin-based channels.", "Single gateway", "Manage all channels through one Gateway process."],
        ["Fully self-hosted", "Run on your own computer or server.", "Local data", "Keep context and skills on infrastructure you control."],
        ["Persistent agents", "Run continuously with persistent memory and scheduled jobs.", "Tool use", "Support multi-agent routing, tools, and code execution."]
      ],
      prerequisites: "Prepare Node.js 22 or later, the Tamgur AI endpoint https://api.tamgur.tech/v1, and a valid API key.",
      beforeProvider: "Start Gateway and Control UI first. This makes it easier to distinguish an OpenClaw startup issue from a model-provider configuration issue.",
      installHelp: "For other installation methods, see the official Getting Started guide.",
      onboard: "The wizard configures authentication, Gateway, and optional channels. Get OpenClaw running before switching the default model to Tamgur AI.",
      gateway: "If Control UI opens in your browser, the base OpenClaw deployment is working.",
      configFile: "The configuration file is normally located at ~/.openclaw/openclaw.json. Continue from the file generated by onboarding.",
      pathVars: "Use OPENCLAW_HOME, OPENCLAW_STATE_DIR, and OPENCLAW_CONFIG_PATH when running under a service account or custom directory layout.",
      provider: "Add Tamgur AI as an OpenAI-compatible custom provider under models.providers, then point the default model to newapi/model-id.",
      approach: ["Declare a newapi provider under models.providers.", "Set baseUrl to https://api.tamgur.tech/v1.", "Set api to openai-completions.", "List the model IDs exposed by Tamgur AI.", "Set agents.defaults.model.primary to newapi/... ."],
      secret: "Provide the Tamgur AI token in the shell, service environment, or an .env file readable by OpenClaw.",
      configNote: "Merge this fragment into openclaw.json. The provider, model IDs, and default-model references must match.",
      table: ["Field", "Description", "Keep built-in providers and append newapi.", "Tamgur AI endpoint; include /v1.", "Inject the API key through NEWAPI_API_KEY.", "Use openai-completions for the compatible gateway.", "Model IDs must match those exposed by Tamgur AI.", "Primary model in provider/model-id format.", "Fallback models used when the primary model fails.", "Optional aliases for UI and conversations."],
      verify: "Open Control UI and confirm that newapi/... models appear and can complete a conversation.",
      issues: ["A missing /v1 suffix is a common cause of connection errors.", "primary and fallbacks must match IDs declared in models.providers.newapi.models.", "A background Gateway must also receive NEWAPI_API_KEY.", "Run openclaw gateway --port 18789 in the foreground to inspect errors."]
    },
    claude: {
      title: "Claude Code",
      description: "Connect Anthropic's terminal coding assistant to Tamgur AI, with code understanding, multi-file editing, and IDE workflows.",
      intro: "Bring Claude into your terminal to search large codebases, automate lengthy workflows, and work directly with your tools and repositories.",
      headings: ["Demo", "Features", "AI model configuration", "Windows guide", "macOS guide", "Linux guide"],
      featureHeaders: ["Category", "Capabilities"],
      features: [["Code understanding", "Analyze repositories, dependencies, and high-level architecture."], ["Code editing", "Coordinate practical edits across multiple files."], ["Integrations", "Work in the terminal with VS Code, JetBrains IDEs, GitHub, and GitLab."], ["Generation and optimization", "Generate code and tests, fix errors, and support refactoring."], ["Security and flexibility", "Request approval for changes and adapt to project conventions."], ["Cross-platform", "Support Windows, macOS, Linux, SDKs, and GitHub Actions."]],
      steps: {
        node: "1. Install Node.js", nodeBody: "Claude Code requires Node.js. Install the LTS release and verify node and npm.",
        git: "2. Install Git Bash", gitBody: "Install Git for Windows. Use Git Bash for installation when required, and PowerShell or CMD for configuration and normal use.",
        install: "3. Install Claude Code", installBody: "Install the latest Claude Code package and verify the command.",
        env: "4. Configure environment variables", envBody: "Run the setup helper, set base_url to https://api.tamgur.tech, and enter the API key created in Tamgur AI.",
        use: "5. Start using Claude Code", useBody: "Launch Claude Code directly or from a project directory. Use /model to select a model.",
        macInstall: "1. Install Claude Code CLI", macEnv: "2. Configure environment variables", macUse: "3. Start using Claude Code", macIssues: "4. Troubleshooting on macOS",
        linuxInstall: "1. Install Claude Code", linuxEnv: "2. Configure environment variables", linuxUse: "3. Start using Claude Code", linuxIssues: "4. Troubleshooting on Linux"
      },
      notes: ["Use PowerShell instead of CMD when possible.", "Run with administrator rights if permissions fail.", "Security software may require an allow-list entry."],
      modelNote: "After changing ANTHROPIC_BASE_URL, all models use the custom endpoint instead of official account credits.",
      issues: ["If macOS blocks the application, review Privacy & Security settings.", "Install build-essential on Ubuntu/Debian or Development Tools on CentOS/RHEL when dependencies are missing.", "Reload .bashrc or .zshrc if environment variables are not applied."]
    }
  },
  fr: {
    placeholder: "Emplacement de l’image", project: "Présentation du projet", official: "Site officiel", docs: "Documentation", source: "Dépôt GitHub",
    openclaw: {
      title: "OpenClaw - Plateforme d’assistant IA auto-hébergée", description: "Installez OpenClaw et connectez-le à l’API Tamgur AI pour créer un assistant auto-hébergé multicanal.",
      intro: "OpenClaw est une plateforme open source et auto-hébergée qui relie les applications de messagerie à des agents IA exécutés sur votre propre matériel.", openSource: "Ce guide couvre l’installation, la configuration et l’intégration complète de l’API Tamgur AI.",
      headings: ["Fonctionnalités principales", "Intégration multicanal", "Auto-hébergement et sécurité des données", "Capacités des agents", "Prérequis", "Installer OpenClaw (macOS/Linux)", "Exécuter l’assistant de configuration", "Vérifier Gateway et Control UI", "Localiser le fichier de configuration", "Utiliser l’API Tamgur AI comme fournisseur", "Principe d’intégration", "Stocker la clé dans une variable d’environnement", "Paramètres principaux", "Vérifier l’intégration", "Dépannage"],
      featureGroups: [["Canaux multiples", "Telegram, Discord, WhatsApp, iMessage et extensions.", "Passerelle unique", "Une passerelle gère tous les canaux."], ["Auto-hébergement", "Exécution sur votre machine ou serveur.", "Données locales", "Le contexte et les compétences restent sous votre contrôle."], ["Agents persistants", "Mémoire persistante et tâches planifiées.", "Outils", "Routage multi-agent, outils et exécution de code."]],
      prerequisites: "Préparez Node.js 22 ou plus récent, https://api.tamgur.tech/v1 et une clé API valide.", beforeProvider: "Démarrez d’abord Gateway et Control UI afin de distinguer les problèmes OpenClaw des erreurs de fournisseur.", installHelp: "Consultez le guide officiel Getting Started pour les autres méthodes.", onboard: "L’assistant configure l’authentification, Gateway et les canaux optionnels.", gateway: "Si Control UI s’ouvre, le déploiement de base fonctionne.", configFile: "Le fichier se trouve généralement dans ~/.openclaw/openclaw.json.", pathVars: "Utilisez OPENCLAW_HOME, OPENCLAW_STATE_DIR et OPENCLAW_CONFIG_PATH pour personnaliser les chemins.", provider: "Ajoutez Tamgur AI comme fournisseur compatible OpenAI, puis utilisez newapi/model-id comme modèle par défaut.", approach: ["Déclarez le fournisseur newapi.", "Définissez baseUrl sur https://api.tamgur.tech/v1.", "Utilisez openai-completions.", "Listez les identifiants de modèles Tamgur AI.", "Définissez le modèle principal sur newapi/... ."], secret: "Placez la clé Tamgur AI dans le shell, l’environnement du service ou un fichier .env.", configNote: "Fusionnez cet extrait dans openclaw.json en conservant des identifiants cohérents.", table: ["Paramètre", "Description", "Conserver les fournisseurs intégrés et ajouter newapi.", "URL Tamgur AI avec /v1.", "Injecter NEWAPI_API_KEY.", "Utiliser openai-completions.", "Les identifiants doivent correspondre à Tamgur AI.", "Modèle principal au format fournisseur/modèle.", "Modèles de secours.", "Alias facultatifs."], verify: "Ouvrez Control UI et vérifiez qu’un modèle newapi/... peut répondre.", issues: ["Vérifiez le suffixe /v1.", "Les identifiants primary et fallbacks doivent correspondre.", "Le service Gateway doit recevoir NEWAPI_API_KEY.", "Lancez Gateway au premier plan pour consulter les erreurs."]
    },
    claude: {
      title: "Claude Code", description: "Connectez l’assistant de programmation en terminal d’Anthropic à Tamgur AI.", intro: "Utilisez Claude dans votre terminal pour analyser de grands dépôts et automatiser les flux de travail.",
      headings: ["Démonstration", "Fonctionnalités", "Configuration du modèle IA", "Guide Windows", "Guide macOS", "Guide Linux"], featureHeaders: ["Catégorie", "Fonctionnalités"],
      features: [["Compréhension du code", "Analyse des dépôts, dépendances et architecture."], ["Modification du code", "Modifications coordonnées sur plusieurs fichiers."], ["Intégrations", "Terminal, VS Code, JetBrains, GitHub et GitLab."], ["Génération", "Code, tests, correction d’erreurs et refactorisation."], ["Sécurité", "Autorisation des changements et respect des conventions."], ["Multiplateforme", "Windows, macOS, Linux, SDK et GitHub Actions."]],
      steps: {node:"1. Installer Node.js",nodeBody:"Claude Code nécessite Node.js. Installez la version LTS puis vérifiez node et npm.",git:"2. Installer Git Bash",gitBody:"Installez Git for Windows selon le guide officiel.",install:"3. Installer Claude Code",installBody:"Installez le paquet puis vérifiez la commande.",env:"4. Configurer les variables d’environnement",envBody:"Exécutez l’assistant, utilisez https://api.tamgur.tech et votre clé Tamgur AI.",use:"5. Utiliser Claude Code",useBody:"Lancez Claude Code dans le terminal ou un projet et utilisez /model.",macInstall:"1. Installer Claude Code CLI",macEnv:"2. Configurer les variables",macUse:"3. Utiliser Claude Code",macIssues:"4. Dépannage macOS",linuxInstall:"1. Installer Claude Code",linuxEnv:"2. Configurer les variables",linuxUse:"3. Utiliser Claude Code",linuxIssues:"4. Dépannage Linux"},
      notes:["Privilégiez PowerShell.","Utilisez les droits administrateur si nécessaire.","Ajoutez une exception dans l’antivirus si nécessaire."], modelNote:"Après modification de ANTHROPIC_BASE_URL, tous les modèles utilisent le point d’accès personnalisé.", issues:["Vérifiez les réglages Confidentialité et sécurité sur macOS.","Installez les outils de compilation manquants sous Linux.","Rechargez .bashrc ou .zshrc si les variables ne sont pas appliquées."]
    }
  },
  ru: {
    placeholder:"Место для изображения",project:"О проекте",official:"Официальный сайт",docs:"Документация",source:"Репозиторий GitHub",
    openclaw:{title:"OpenClaw — самостоятельно размещаемый ИИ-ассистент",description:"Установите OpenClaw и подключите API Tamgur AI для создания многоканального ассистента.",intro:"OpenClaw — открытая самостоятельно размещаемая платформа, соединяющая мессенджеры с ИИ-агентами на вашем оборудовании.",openSource:"Руководство охватывает установку, настройку и подключение Tamgur AI.",headings:["Основные возможности","Интеграция каналов","Самостоятельное размещение и безопасность","Возможности агентов","Подготовка","Установка OpenClaw (macOS/Linux)","Мастер настройки","Проверка Gateway и Control UI","Файл конфигурации","Tamgur AI как поставщик моделей","Схема подключения","Хранение ключа в переменной окружения","Основные параметры","Проверка подключения","Устранение неполадок"],featureGroups:[["Много каналов","Telegram, Discord, WhatsApp, iMessage и плагины.","Единый Gateway","Один процесс управляет каналами."],["Самостоятельное размещение","Запуск на своем компьютере или сервере.","Локальные данные","Контекст и навыки остаются под вашим контролем."],["Постоянные агенты","Память и задачи по расписанию.","Инструменты","Маршрутизация агентов и выполнение кода."]],prerequisites:"Подготовьте Node.js 22+, https://api.tamgur.tech/v1 и действующий API-ключ.",beforeProvider:"Сначала запустите Gateway и Control UI.",installHelp:"Другие способы описаны в официальном Getting Started.",onboard:"Мастер настраивает аутентификацию, Gateway и каналы.",gateway:"Если Control UI открывается, базовая установка работает.",configFile:"Обычно файл находится в ~/.openclaw/openclaw.json.",pathVars:"Для собственных путей используйте OPENCLAW_HOME, OPENCLAW_STATE_DIR и OPENCLAW_CONFIG_PATH.",provider:"Добавьте Tamgur AI как OpenAI-совместимого поставщика и выберите newapi/model-id.",approach:["Объявите поставщика newapi.","Укажите https://api.tamgur.tech/v1.","Выберите openai-completions.","Перечислите модели Tamgur AI.","Укажите newapi/... как основную модель."],secret:"Передайте ключ через оболочку, окружение службы или .env.",configNote:"Добавьте фрагмент в openclaw.json и согласуйте идентификаторы моделей.",table:["Параметр","Описание","Добавить newapi, сохранив встроенные поставщики.","Адрес Tamgur AI с /v1.","Передать NEWAPI_API_KEY.","Использовать openai-completions.","ID должны совпадать с Tamgur AI.","Основная модель provider/model-id.","Резервные модели.","Необязательные псевдонимы."],verify:"Откройте Control UI и проверьте ответ модели newapi/....",issues:["Проверьте окончание /v1.","primary и fallbacks должны совпадать с ID моделей.","Gateway должен получать NEWAPI_API_KEY.","Запустите Gateway в переднем плане для просмотра ошибок."]},
    claude:{title:"Claude Code",description:"Подключите терминального помощника Anthropic к Tamgur AI.",intro:"Используйте Claude в терминале для анализа репозиториев и автоматизации рабочих процессов.",headings:["Демонстрация","Возможности","Настройка ИИ-модели","Инструкция Windows","Инструкция macOS","Инструкция Linux"],featureHeaders:["Категория","Возможности"],features:[["Понимание кода","Анализ репозиториев, зависимостей и архитектуры."],["Редактирование","Согласованные изменения нескольких файлов."],["Интеграции","Терминал, VS Code, JetBrains, GitHub и GitLab."],["Генерация","Код, тесты, исправления и рефакторинг."],["Безопасность","Подтверждение изменений и учет правил проекта."],["Платформы","Windows, macOS, Linux, SDK и GitHub Actions."]],steps:{node:"1. Установка Node.js",nodeBody:"Установите LTS-версию Node.js и проверьте node и npm.",git:"2. Установка Git Bash",gitBody:"Установите Git for Windows по официальной инструкции.",install:"3. Установка Claude Code",installBody:"Установите пакет и проверьте команду.",env:"4. Переменные окружения",envBody:"Запустите помощник, укажите https://api.tamgur.tech и ключ Tamgur AI.",use:"5. Использование Claude Code",useBody:"Запустите Claude Code в терминале или каталоге проекта; для модели используйте /model.",macInstall:"1. Установка Claude Code CLI",macEnv:"2. Переменные окружения",macUse:"3. Использование",macIssues:"4. Проблемы macOS",linuxInstall:"1. Установка Claude Code",linuxEnv:"2. Переменные окружения",linuxUse:"3. Использование",linuxIssues:"4. Проблемы Linux"},notes:["Предпочтительно используйте PowerShell.","При необходимости запустите от администратора.","Добавьте исключение антивируса при ложном срабатывании."],modelNote:"После изменения ANTHROPIC_BASE_URL все модели используют пользовательскую точку доступа.",issues:["Проверьте настройки безопасности macOS.","Установите отсутствующие инструменты сборки Linux.","Перезагрузите .bashrc или .zshrc."]}
  },
  ja: {
    placeholder:"画像プレースホルダー",project:"プロジェクト紹介",official:"公式サイト",docs:"ドキュメント",source:"GitHub リポジトリ",
    openclaw:{title:"OpenClaw - セルフホスト型 AI アシスタント",description:"OpenClaw をインストールし、Tamgur AI API に接続してマルチチャネル対応のアシスタントを構築します。",intro:"OpenClaw は、メッセージアプリを自分のハードウェア上の AI Agent に接続するオープンソースのセルフホスト型プラットフォームです。",openSource:"このガイドではインストール、設定、Tamgur AI API との連携を説明します。",headings:["主な機能","マルチチャネル連携","セルフホストとデータ保護","Agent 機能","事前準備","OpenClaw のインストール（macOS/Linux）","セットアップウィザード","Gateway と Control UI の確認","設定ファイルの場所","Tamgur AI API をモデルプロバイダーにする","連携手順","環境変数でキーを保存","主要設定項目","連携の確認","トラブルシューティング"],featureGroups:[["複数チャネル","Telegram、Discord、WhatsApp、iMessage、プラグインに対応。","単一 Gateway","1つのプロセスでチャネルを管理。"],["セルフホスト","自分のPCやサーバーで実行。","ローカルデータ","コンテキストとスキルを管理下に保持。"],["常駐 Agent","永続メモリとスケジュール実行。","ツール","複数 Agent、ツール、コード実行に対応。"]],prerequisites:"Node.js 22 以降、https://api.tamgur.tech/v1、有効な API Key を用意します。",beforeProvider:"まず Gateway と Control UI を起動してください。",installHelp:"その他の方法は公式 Getting Started を参照してください。",onboard:"ウィザードで認証、Gateway、任意のチャネルを設定します。",gateway:"Control UI が開けば基本セットアップは完了です。",configFile:"通常は ~/.openclaw/openclaw.json にあります。",pathVars:"パスの変更には OPENCLAW_HOME、OPENCLAW_STATE_DIR、OPENCLAW_CONFIG_PATH を使います。",provider:"Tamgur AI を OpenAI 互換プロバイダーとして追加し、newapi/model-id を既定モデルにします。",approach:["newapi プロバイダーを追加します。","baseUrl を https://api.tamgur.tech/v1 にします。","api は openai-completions にします。","Tamgur AI のモデル ID を列挙します。","既定モデルを newapi/... にします。"],secret:"キーは Shell、サービス環境、または .env に保存します。",configNote:"この断片を openclaw.json に統合し、モデル ID を一致させます。",table:["設定項目","説明","組み込みプロバイダーを残して newapi を追加。","/v1 を含む Tamgur AI URL。","NEWAPI_API_KEY を注入。","openai-completions を使用。","Tamgur AI のモデル ID と一致させる。","provider/model-id 形式の主モデル。","フォールバックモデル。","任意の別名。"],verify:"Control UI で newapi/... モデルが応答することを確認します。",issues:["/v1 の付け忘れを確認します。","primary と fallbacks の ID を一致させます。","Gateway に NEWAPI_API_KEY を渡します。","Gateway をフォアグラウンドで起動してログを確認します。"]},
    claude:{title:"Claude Code",description:"Anthropic のターミナル型コーディング支援を Tamgur AI に接続します。",intro:"Claude をターミナルで利用し、大規模なコードベースの分析と作業の自動化を行います。",headings:["デモ","機能","AI モデル設定","Windows ガイド","macOS ガイド","Linux ガイド"],featureHeaders:["分類","機能"],features:[["コード理解","リポジトリ、依存関係、構造を分析。"],["コード編集","複数ファイルを連携して編集。"],["連携","ターミナル、VS Code、JetBrains、GitHub、GitLab。"],["生成と最適化","コード、テスト、修正、リファクタリング。"],["安全性","変更の承認とプロジェクト規約への適応。"],["クロスプラットフォーム","Windows、macOS、Linux、SDK、GitHub Actions。"]],steps:{node:"1. Node.js のインストール",nodeBody:"Node.js の LTS をインストールし、node と npm を確認します。",git:"2. Git Bash のインストール",gitBody:"公式手順で Git for Windows をインストールします。",install:"3. Claude Code のインストール",installBody:"パッケージをインストールしてコマンドを確認します。",env:"4. 環境変数の設定",envBody:"セットアップを実行し、https://api.tamgur.tech と Tamgur AI のキーを入力します。",use:"5. Claude Code の利用",useBody:"ターミナルまたはプロジェクト内で起動し、/model でモデルを選択します。",macInstall:"1. Claude Code CLI のインストール",macEnv:"2. 環境変数の設定",macUse:"3. 利用開始",macIssues:"4. macOS の問題",linuxInstall:"1. Claude Code のインストール",linuxEnv:"2. 環境変数の設定",linuxUse:"3. 利用開始",linuxIssues:"4. Linux の問題"},notes:["PowerShell の利用を推奨します。","必要なら管理者権限で実行します。","誤検知時は許可リストに追加します。"],modelNote:"ANTHROPIC_BASE_URL の変更後は、すべてのモデルがカスタム接続先を使用します。",issues:["macOS のプライバシーとセキュリティを確認します。","Linux で不足するビルドツールを導入します。",".bashrc または .zshrc を再読み込みします。"]}
  },
  vi: {
    placeholder:"Vị trí hình ảnh",project:"Giới thiệu dự án",official:"Trang chính thức",docs:"Tài liệu",source:"Kho GitHub",
    openclaw:{title:"OpenClaw - Nền tảng trợ lý AI tự lưu trữ",description:"Cài đặt OpenClaw và kết nối API Tamgur AI để xây dựng trợ lý đa kênh tự lưu trữ.",intro:"OpenClaw là nền tảng mã nguồn mở, tự lưu trữ, kết nối ứng dụng nhắn tin với các AI Agent chạy trên phần cứng của bạn.",openSource:"Hướng dẫn này bao gồm cài đặt, cấu hình và tích hợp đầy đủ Tamgur AI API.",headings:["Tính năng chính","Tích hợp đa kênh","Tự lưu trữ và bảo mật dữ liệu","Khả năng Agent","Chuẩn bị","Cài OpenClaw (macOS/Linux)","Chạy trình hướng dẫn","Kiểm tra Gateway và Control UI","Tìm tệp cấu hình","Dùng Tamgur AI API làm nhà cung cấp mô hình","Cách tích hợp","Lưu khóa bằng biến môi trường","Các trường cấu hình chính","Xác minh tích hợp","Khắc phục sự cố"],featureGroups:[["Nhiều kênh","Telegram, Discord, WhatsApp, iMessage và plugin.","Một Gateway","Một tiến trình quản lý mọi kênh."],["Tự lưu trữ","Chạy trên máy tính hoặc máy chủ của bạn.","Dữ liệu cục bộ","Giữ ngữ cảnh và kỹ năng dưới quyền kiểm soát."],["Agent liên tục","Bộ nhớ lâu dài và tác vụ theo lịch.","Công cụ","Định tuyến nhiều Agent và thực thi mã."]],prerequisites:"Chuẩn bị Node.js 22+, https://api.tamgur.tech/v1 và API Key hợp lệ.",beforeProvider:"Hãy chạy Gateway và Control UI trước.",installHelp:"Xem Getting Started chính thức cho cách cài khác.",onboard:"Trình hướng dẫn cấu hình xác thực, Gateway và các kênh tùy chọn.",gateway:"Nếu Control UI mở được, cài đặt cơ bản đã hoạt động.",configFile:"Tệp thường nằm tại ~/.openclaw/openclaw.json.",pathVars:"Dùng OPENCLAW_HOME, OPENCLAW_STATE_DIR và OPENCLAW_CONFIG_PATH để đổi đường dẫn.",provider:"Thêm Tamgur AI làm nhà cung cấp tương thích OpenAI và đặt newapi/model-id làm mô hình mặc định.",approach:["Khai báo nhà cung cấp newapi.","Đặt baseUrl là https://api.tamgur.tech/v1.","Đặt api là openai-completions.","Liệt kê ID mô hình Tamgur AI.","Đặt mô hình chính thành newapi/... ."],secret:"Cung cấp khóa trong shell, môi trường dịch vụ hoặc tệp .env.",configNote:"Hợp nhất đoạn cấu hình vào openclaw.json và giữ ID mô hình nhất quán.",table:["Trường","Mô tả","Giữ nhà cung cấp có sẵn và thêm newapi.","URL Tamgur AI có /v1.","Chèn NEWAPI_API_KEY.","Dùng openai-completions.","ID phải khớp Tamgur AI.","Mô hình chính dạng provider/model-id.","Mô hình dự phòng.","Bí danh tùy chọn."],verify:"Mở Control UI và kiểm tra mô hình newapi/... có thể phản hồi.",issues:["Kiểm tra hậu tố /v1.","primary và fallbacks phải khớp ID.","Gateway phải nhận NEWAPI_API_KEY.","Chạy Gateway ở foreground để xem lỗi."]},
    claude:{title:"Claude Code",description:"Kết nối trợ lý lập trình terminal của Anthropic với Tamgur AI.",intro:"Dùng Claude trong terminal để phân tích kho mã lớn và tự động hóa quy trình.",headings:["Trình diễn","Tính năng","Cấu hình mô hình AI","Hướng dẫn Windows","Hướng dẫn macOS","Hướng dẫn Linux"],featureHeaders:["Phân loại","Tính năng"],features:[["Hiểu mã","Phân tích kho mã, phụ thuộc và kiến trúc."],["Chỉnh sửa mã","Phối hợp thay đổi trên nhiều tệp."],["Tích hợp","Terminal, VS Code, JetBrains, GitHub và GitLab."],["Sinh mã","Mã, kiểm thử, sửa lỗi và tái cấu trúc."],["An toàn","Yêu cầu phê duyệt và tuân theo quy ước dự án."],["Đa nền tảng","Windows, macOS, Linux, SDK và GitHub Actions."]],steps:{node:"1. Cài Node.js",nodeBody:"Cài Node.js LTS rồi kiểm tra node và npm.",git:"2. Cài Git Bash",gitBody:"Cài Git for Windows theo hướng dẫn chính thức.",install:"3. Cài Claude Code",installBody:"Cài gói và kiểm tra lệnh.",env:"4. Cấu hình biến môi trường",envBody:"Chạy trình thiết lập, dùng https://api.tamgur.tech và khóa Tamgur AI.",use:"5. Sử dụng Claude Code",useBody:"Khởi chạy trong terminal hoặc thư mục dự án và dùng /model.",macInstall:"1. Cài Claude Code CLI",macEnv:"2. Cấu hình biến môi trường",macUse:"3. Bắt đầu sử dụng",macIssues:"4. Sự cố macOS",linuxInstall:"1. Cài Claude Code",linuxEnv:"2. Cấu hình biến môi trường",linuxUse:"3. Bắt đầu sử dụng",linuxIssues:"4. Sự cố Linux"},notes:["Ưu tiên PowerShell.","Dùng quyền quản trị khi cần.","Thêm ngoại lệ antivirus nếu bị cảnh báo sai."],modelNote:"Sau khi đổi ANTHROPIC_BASE_URL, mọi mô hình dùng điểm cuối tùy chỉnh.",issues:["Kiểm tra Quyền riêng tư và Bảo mật trên macOS.","Cài công cụ build còn thiếu trên Linux.","Tải lại .bashrc hoặc .zshrc."]}
  }
};

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

let locale = localStorage.getItem("tamgur-language") || "zh-CN";
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
  document.title = "tamgur";
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

function renderCode(code, language = "bash") {
  const pack = getPack();
  return `<div class="code-block">
    <button class="copy-btn" type="button">${pack.copy}</button>
    <pre><code class="language-${language}">${escapeHtml(code)}</code></pre>
  </div>`;
}

function renderImagePlaceholder(label) {
  const placeholder = detailedLocales[locale]?.placeholder || "图片占位";
  return `<div class="image-placeholder" role="img" aria-label="${escapeHtml(label)}">
    <span class="image-placeholder-icon" aria-hidden="true">▧</span>
    <strong>${placeholder}</strong>
    <span>${escapeHtml(label)}</span>
  </div>`;
}

function renderLocalizedOpenClawDocument() {
  const common = detailedLocales[locale] || detailedLocales.en;
  const text = common.openclaw;
  const headings = text.headings;
  const providerConfig = `{
  models: {
    mode: "merge",
    providers: {
      newapi: {
        baseUrl: "https://api.tamgur.tech/v1",
        apiKey: "\${NEWAPI_API_KEY}",
        api: "openai-completions",
        models: [
          { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash" },
          { id: "gpt-5-mini", name: "GPT-5 Mini" },
        ],
      },
    },
  },
  agents: {
    defaults: {
      model: {
        primary: "newapi/gemini-2.5-flash",
        fallbacks: ["newapi/gpt-5-mini"],
      },
    },
  },
}`;
  const ids = openClawToc.map(([id]) => id);

  documentRoot.innerHTML = `
    <h1 class="page-title">${text.title}</h1>
    <p class="page-description">${text.description}</p>
    <div class="callout info">
      <div class="callout-title">ℹ&nbsp;&nbsp;${common.project}</div>
      <p>${text.intro}</p>
      <ul class="content-list compact-list">
        <li>${common.official}: <a href="https://openclaw.ai" target="_blank" rel="noreferrer">https://openclaw.ai</a></li>
        <li>${common.docs}: <a href="https://docs.openclaw.ai" target="_blank" rel="noreferrer">https://docs.openclaw.ai</a></li>
        <li>${common.source}: <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noreferrer">https://github.com/openclaw/openclaw</a></li>
      </ul>
    </div>
    <p>${text.openSource}</p>

    <section>
      <h2 id="${ids[0]}">${headings[0]}</h2>
      ${text.featureGroups.map((group, index) => `
        <h3 id="${ids[index + 1]}">${headings[index + 1]}</h3>
        <ul class="content-list">
          <li><strong>${group[0]}</strong>: ${group[1]}</li>
          <li><strong>${group[2]}</strong>: ${group[3]}</li>
        </ul>`).join("")}
    </section>

    <section>
      <h2 id="${ids[4]}">${headings[4]}</h2>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;${headings[4]}</div><p>${text.prerequisites}</p></div>
      <p>${text.beforeProvider}</p>
      <h3 id="${ids[5]}">${headings[5]}</h3>
      ${renderCode("curl -fsSL https://openclaw.ai/install.sh | bash")}
      <p>${text.installHelp} <a href="https://docs.openclaw.ai/start/getting-started" target="_blank" rel="noreferrer">Getting Started</a>.</p>
      <h3 id="${ids[6]}">${headings[6]}</h3>
      ${renderCode("openclaw onboard --install-daemon")}
      <p>${text.onboard}</p>
      <h3 id="${ids[7]}">${headings[7]}</h3>
      ${renderCode("openclaw gateway status")}
      ${renderCode("openclaw dashboard")}
      <p>${text.gateway}</p>
      <h3 id="${ids[8]}">${headings[8]}</h3>
      <p>${text.configFile}</p>
      <div class="callout tip"><div class="callout-title">✦&nbsp;&nbsp;${headings[8]}</div><p>${text.pathVars}</p></div>
    </section>

    <section>
      <h2 id="${ids[9]}">${headings[9]}</h2>
      <p>${text.provider}</p>
      <h3 id="${ids[10]}">${headings[10]}</h3>
      <ol class="content-list">${text.approach.map((item) => `<li>${item}</li>`).join("")}</ol>
      <h3 id="${ids[11]}">${headings[11]}</h3>
      <p>${text.secret}</p>
      ${renderCode('export NEWAPI_API_KEY="sk-your-api-key"')}
      ${renderCode(providerConfig, "json5")}
      <p>${text.configNote}</p>
      <h3 id="${ids[12]}">${headings[12]}</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>${text.table[0]}</th><th>${text.table[1]}</th></tr></thead>
        <tbody>
          <tr><td><code>models.mode</code></td><td>${text.table[2]}</td></tr>
          <tr><td><code>models.providers.newapi.baseUrl</code></td><td>${text.table[3]}</td></tr>
          <tr><td><code>models.providers.newapi.apiKey</code></td><td>${text.table[4]}</td></tr>
          <tr><td><code>models.providers.newapi.api</code></td><td>${text.table[5]}</td></tr>
          <tr><td><code>models.providers.newapi.models</code></td><td>${text.table[6]}</td></tr>
          <tr><td><code>agents.defaults.model.primary</code></td><td>${text.table[7]}</td></tr>
          <tr><td><code>agents.defaults.model.fallbacks</code></td><td>${text.table[8]}</td></tr>
          <tr><td><code>agents.defaults.models</code></td><td>${text.table[9]}</td></tr>
        </tbody>
      </table></div>
      <h3 id="${ids[13]}">${headings[13]}</h3>
      <p>${text.verify}</p>
      ${renderCode("openclaw dashboard")}
      ${renderCode("openclaw models list")}
      <h3 id="${ids[14]}">${headings[14]}</h3>
      <ul class="content-list">${text.issues.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>`;

  toc.innerHTML = ids.map((id, index) =>
    `<li><a href="#${id}"${[1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14].includes(index) ? ' class="sub"' : ""}>${headings[index]}</a></li>`
  ).join("");
}

function renderLocalizedClaudeCodeDocument() {
  const common = detailedLocales[locale] || detailedLocales.en;
  const text = common.claude;
  const steps = text.steps;
  const headings = text.headings;
  const setupWindows = "iex (irm 'https://raw.githubusercontent.com/QuantumNous/new-api-docs/refs/heads/main/helper/claude-cli-setup.ps1')";
  const setupUnix = "curl -fsSL https://raw.githubusercontent.com/QuantumNous/new-api-docs/refs/heads/main/helper/claude-cli-setup.sh | bash";

  documentRoot.innerHTML = `
    <h1 class="page-title">${text.title}</h1>
    <p class="page-description">${text.description}</p>
    <div class="callout info">
      <div class="callout-title">ℹ&nbsp;&nbsp;${common.project}</div>
      <p>${text.intro}</p>
      <p>${common.official}: <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noreferrer">https://www.anthropic.com/claude-code</a></p>
    </div>

    <section>
      <h2 id="claude-demo">${headings[0]}</h2>
      ${renderImagePlaceholder("introduce-01.webp")}
      ${renderImagePlaceholder("introduce-02.webp")}
      <h3 id="claude-features">${headings[1]}</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>${text.featureHeaders[0]}</th><th>${text.featureHeaders[1]}</th></tr></thead>
        <tbody>${text.features.map(([category, feature]) => `<tr><td><strong>${category}</strong></td><td>${feature}</td></tr>`).join("")}</tbody>
      </table></div>
    </section>

    <section>
      <h2 id="claude-config">${headings[2]}</h2>
      <h3 id="claude-windows">${headings[3]}</h3>
      <h4>${steps.node}</h4>
      <p>${steps.nodeBody}</p>
      <p><a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">https://nodejs.org/en/download</a></p>
      <div class="callout warning"><div class="callout-title">⚠&nbsp;&nbsp;Windows</div><ul class="content-list compact-list">${text.notes.map((item) => `<li>${item}</li>`).join("")}</ul></div>
      ${renderCode("node --version\nnpm --version")}
      <h4>${steps.git}</h4>
      <p>${steps.gitBody}</p>
      <p><a href="https://git-scm.com/install/windows" target="_blank" rel="noreferrer">https://git-scm.com/install/windows</a></p>
      ${renderCode("git --version")}
      <h4>${steps.install}</h4>
      <p>${steps.installBody}</p>
      ${renderCode("npm install -g @anthropic-ai/claude-code")}
      ${renderCode("claude --version")}
      <h4>${steps.env}</h4>
      <p>${steps.envBody}</p>
      ${renderCode(setupWindows, "powershell")}
      <p><a href="https://api.tamgur.tech" target="_blank" rel="noreferrer">https://api.tamgur.tech</a></p>
      <h4>${steps.use}</h4>
      <p>${steps.useBody}</p>
      ${renderCode("# Project directory\ncd C:\\path\\to\\your\\project\n\nclaude")}
      ${renderCode("/model")}
      <blockquote>${text.modelNote}</blockquote>

      <h3 id="claude-macos">${headings[4]}</h3>
      <h4>${steps.macInstall}</h4>
      ${renderCode("curl -fsSL https://claude.ai/install.sh | bash")}
      ${renderCode("echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.bashrc && source ~/.bashrc")}
      <h4>${steps.macEnv}</h4>
      ${renderCode(setupUnix)}
      <p><a href="https://api.tamgur.tech" target="_blank" rel="noreferrer">https://api.tamgur.tech</a></p>
      ${renderCode("claude --version")}
      <h4>${steps.macUse}</h4>
      ${renderCode("cd /path/to/your/project\nclaude")}
      ${renderCode("/model")}
      <h4>${steps.macIssues}</h4>
      <p>${text.issues[0]}</p>

      <h3 id="claude-linux">${headings[5]}</h3>
      <h4>${steps.linuxInstall}</h4>
      ${renderCode("curl -fsSL https://claude.ai/install.sh | bash")}
      ${renderCode("sudo curl -fsSL https://claude.ai/install.sh | bash")}
      ${renderCode("claude --version")}
      <h4>${steps.linuxEnv}</h4>
      ${renderCode(setupUnix)}
      <p><a href="https://api.tamgur.tech" target="_blank" rel="noreferrer">https://api.tamgur.tech</a></p>
      <h4>${steps.linuxUse}</h4>
      ${renderCode("cd /path/to/your/project\nclaude")}
      ${renderCode("/model")}
      <blockquote>${text.modelNote}</blockquote>
      <h4>${steps.linuxIssues}</h4>
      <ul class="content-list"><li>${text.issues[1]}</li><li>${text.issues[2]}</li></ul>
    </section>`;

  const ids = ["claude-demo", "claude-features", "claude-config", "claude-windows", "claude-macos", "claude-linux"];
  toc.innerHTML = ids.map((id, index) =>
    `<li><a href="#${id}"${[1, 3, 4, 5].includes(index) ? ' class="sub"' : ""}>${headings[index]}</a></li>`
  ).join("");
}

function renderOpenClawDocument() {
  const providerConfig = `{
  models: {
    mode: "merge",
    providers: {
      newapi: {
        baseUrl: "https://api.tamgur.tech/v1",
        apiKey: "\${NEWAPI_API_KEY}",
        api: "openai-completions",
        models: [
          { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash" },
          { id: "gpt-5-mini", name: "GPT-5 Mini" },
        ],
      },
    },
  },

  agents: {
    defaults: {
      model: {
        primary: "newapi/gemini-2.5-flash",
        fallbacks: ["newapi/gpt-5-mini"],
      },
      models: {
        "newapi/gemini-2.5-flash": { alias: "flash" },
        "newapi/gpt-5-mini": { alias: "GPT-5 Mini" },
      },
    },
  },
}`;

  documentRoot.innerHTML = `
    <h1 class="page-title">OpenClaw - 自托管 AI 智能助手平台</h1>
    <p class="page-description">OpenClaw 教程 — 安装 OpenClaw、对接 Tamgur AI 的 API，快速搭建自托管 AI 助手。开源项目，支持 Telegram、Discord、WhatsApp 等多渠道集成。</p>

    <div class="callout info">
      <div class="callout-title">ℹ&nbsp;&nbsp;项目介绍</div>
      <p>OpenClaw 是一个开源、自托管的个人 AI 助手平台，将消息应用连接到运行在你自己硬件上的 AI 代理。专为开发者和高级用户设计，无需交出数据控制权即可拥有自主 AI 助手。</p>
      <ul class="content-list compact-list">
        <li>官方主页：<a href="https://openclaw.ai" target="_blank" rel="noreferrer">https://openclaw.ai</a></li>
        <li>项目文档：<a href="https://docs.openclaw.ai" target="_blank" rel="noreferrer">https://docs.openclaw.ai</a></li>
        <li>GitHub：<a href="https://github.com/openclaw/openclaw" target="_blank" rel="noreferrer">https://github.com/openclaw/openclaw</a></li>
      </ul>
    </div>
    <p>OpenClaw 完全开源，你可以在 <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noreferrer">OpenClaw 的 GitHub 仓库</a>浏览源码、提交 Issue 或参与贡献。本教程涵盖安装、配置，以及将 OpenClaw 对接 Tamgur AI 的 API 的完整步骤。</p>

    <section>
      <h2 id="openclaw-features">🌟 核心特性</h2>

      <h3 id="openclaw-channels">多渠道集成</h3>
      <ul class="content-list">
        <li><strong>多渠道集成</strong>：支持 Telegram、Discord、WhatsApp、iMessage 等多种消息渠道，也可通过插件扩展更多平台</li>
        <li><strong>单一网关</strong>：通过一个 Gateway 进程统一管理所有渠道</li>
        <li><strong>语音支持</strong>：支持 macOS/iOS/Android 语音交互</li>
        <li><strong>Canvas 界面</strong>：可渲染交互式 Canvas 界面</li>
      </ul>

      <h3 id="openclaw-security">自托管与数据安全</h3>
      <ul class="content-list">
        <li><strong>完全自托管</strong>：运行在你自己的机器或服务器上</li>
        <li><strong>开源透明</strong>：MIT 开源协议，代码完全透明</li>
        <li><strong>数据本地化</strong>：上下文和技能存储在你的本地计算机，而非云端</li>
      </ul>

      <h3 id="openclaw-agent">智能代理能力</h3>
      <ul class="content-list">
        <li><strong>持续运行</strong>：支持后台常驻运行，拥有持久记忆</li>
        <li><strong>计划任务</strong>：支持 cron 定时任务</li>
        <li><strong>会话隔离</strong>：按代理/工作区/发送者隔离会话</li>
        <li><strong>多代理路由</strong>：支持多代理协同工作</li>
        <li><strong>工具调用</strong>：原生支持工具调用和代码执行</li>
      </ul>
    </section>

    <section>
      <h2 id="openclaw-prepare">📦 接入前准备</h2>
      <div class="callout info">
        <div class="callout-title">ℹ&nbsp;&nbsp;准备信息</div>
        <ul class="content-list compact-list">
          <li>Node.js 22 或更高版本</li>
          <li>一个可用的 Tamgur AI API 地址（通常以 <code>/v1</code> 结尾，如：<code>https://api.tamgur.tech/v1</code>）</li>
          <li>一个可用的 Tamgur AI API Key</li>
        </ul>
      </div>
      <p>在开始接入 Tamgur AI API 之前，建议先按 OpenClaw 官方当前推荐流程把 Gateway 和 Control UI 跑起来。这样后续排查问题时，更容易区分是 OpenClaw 本身未启动，还是模型提供商配置有误。</p>

      <h3 id="openclaw-install">1. 安装 OpenClaw（macOS/Linux）</h3>
      ${renderCode("curl -fsSL https://openclaw.ai/install.sh | bash")}
      <p>其他安装方式可参考 OpenClaw 官方文档：<a href="https://docs.openclaw.ai/start/getting-started" target="_blank" rel="noreferrer">Getting Started</a>。</p>

      <h3 id="openclaw-onboard">2. 运行引导向导</h3>
      ${renderCode("openclaw onboard --install-daemon")}
      <p>该向导会完成基础认证、Gateway 设置，以及可选的渠道初始化。这里的目标是先把 OpenClaw 跑起来，后面再把默认模型切到 Tamgur AI API。</p>

      <h3 id="openclaw-gateway">3. 检查 Gateway 与 Control UI</h3>
      ${renderCode("openclaw gateway status")}
      ${renderCode("openclaw dashboard")}
      <p>如果浏览器能打开 Control UI，说明 OpenClaw 基础运行已经正常。这个阶段不需要先配置 Telegram、Discord、飞书等消息渠道。</p>

      <h3 id="openclaw-config-file">4. 定位配置文件</h3>
      <p>OpenClaw 的配置文件通常位于 <code>~/.openclaw/openclaw.json</code>，你可以在引导向导生成的基础上继续修改。</p>
      <div class="callout tip">
        <div class="callout-title">✦&nbsp;&nbsp;路径相关环境变量</div>
        <p>如果你把 OpenClaw 跑在专用服务账号下，或希望自定义配置/状态目录，可以使用：</p>
        <ul class="content-list compact-list">
          <li><code>OPENCLAW_HOME</code></li>
          <li><code>OPENCLAW_STATE_DIR</code></li>
          <li><code>OPENCLAW_CONFIG_PATH</code></li>
        </ul>
        <p>详细说明见官方环境变量文档：<a href="https://docs.openclaw.ai/help/environment" target="_blank" rel="noreferrer">Environment Variables</a>。</p>
      </div>
    </section>

    <section>
      <h2 id="openclaw-provider">🚀 使用 Tamgur AI API 作为模型提供商</h2>
      <p>OpenClaw 支持通过 <code>models.providers</code> 接入自定义或兼容 OpenAI 接口的模型网关。对于 Tamgur AI，最常见的做法是把它作为一个自定义 provider 加进配置里，再把默认模型指向 <code>newapi/模型ID</code>。</p>

      <h3 id="openclaw-approach">接入思路</h3>
      <ol class="content-list">
        <li>在 <code>models.providers</code> 下声明一个 <code>newapi</code> provider</li>
        <li>将 <code>baseUrl</code> 指向你的 Tamgur AI API 地址，并确保包含 <code>/v1</code>，如：<code>https://api.tamgur.tech/v1</code></li>
        <li>将 <code>api</code> 设为 <code>openai-completions</code></li>
        <li>在 <code>models</code> 中列出你希望 OpenClaw 使用的模型 ID</li>
        <li>在 <code>agents.defaults.model.primary</code> 中把默认模型切到 <code>newapi/...</code></li>
      </ol>

      <h3 id="openclaw-secret">推荐做法：用环境变量保存密钥</h3>
      <p>先在当前 shell、服务环境，或 OpenClaw 可读取的 <code>.env</code> 中提供你的 Tamgur AI API 密钥令牌：</p>
      ${renderCode('export NEWAPI_API_KEY="sk-your-api-key"')}
      <p>然后在 <code>openclaw.json</code> 里补充或修改以下片段：</p>
      ${renderCode(providerConfig, "json5")}
      <p>这不是一份必须原样照抄的完整配置，而是接入 Tamgur AI API 最关键的部分。只要 <code>provider</code>、模型 ID 和默认模型引用对应正确，OpenClaw 就能通过 Tamgur AI API 调用你暴露出来的模型资源。</p>

      <h3 id="openclaw-details">关键配置说明</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>配置项</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td><code>models.mode</code></td><td>建议设为 <code>merge</code>，在保留 OpenClaw 内置 provider 的同时追加 <code>newapi</code></td></tr>
            <tr><td><code>models.providers.newapi.baseUrl</code></td><td>你的 Tamgur AI API 地址，通常需要带上 <code>/v1</code></td></tr>
            <tr><td><code>models.providers.newapi.apiKey</code></td><td>Tamgur AI API 密钥，推荐通过 <code>\${NEWAPI_API_KEY}</code> 注入</td></tr>
            <tr><td><code>models.providers.newapi.api</code></td><td>对于 Tamgur AI API 这类 OpenAI 兼容网关，使用 <code>openai-completions</code></td></tr>
            <tr><td><code>models.providers.newapi.models</code></td><td>这里列出的模型 ID 必须与你的 Tamgur AI API 实际暴露的模型名称一致</td></tr>
            <tr><td><code>agents.defaults.model.primary</code></td><td>默认主模型，格式必须是 <code>provider/model-id</code></td></tr>
            <tr><td><code>agents.defaults.model.fallbacks</code></td><td>备选模型列表，主模型失败时自动切换</td></tr>
            <tr><td><code>agents.defaults.models</code></td><td>可选，用来给模型起别名，方便在 UI 或会话里引用</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="openclaw-verify">验证是否接入成功</h3>
      <p>完成配置后，回到 Control UI 或重新打开：</p>
      ${renderCode("openclaw dashboard")}
      <p>如果你能在 OpenClaw 中正常发起对话，并且默认模型已经变成 <code>newapi/...</code>，说明接入成功。你也可以使用：</p>
      ${renderCode("openclaw models list")}
      <p>确认 <code>newapi/</code> 前缀的模型已经出现在可选列表中。</p>

      <h3 id="openclaw-troubleshoot">常见问题</h3>
      <ul class="content-list">
        <li><code>baseUrl</code> 没带 <code>/v1</code>：这是最常见的接入错误之一。</li>
        <li>模型 ID 填错：<code>primary</code> 和 <code>fallbacks</code> 必须与 <code>models.providers.newapi.models</code> 里的 <code>id</code> 对应。</li>
        <li>密钥只在当前终端生效：如果 Gateway 以后台服务运行，请确保服务进程也能读取 <code>NEWAPI_API_KEY</code>。</li>
        <li>想前台排障：可使用官方前台运行方式 <code>openclaw gateway --port 18789</code> 观察日志与报错。</li>
      </ul>
    </section>`;

  toc.innerHTML = openClawToc.map(([id, label, sub]) =>
    `<li><a href="#${id}"${sub ? ' class="sub"' : ""}>${label}</a></li>`
  ).join("");
}

function renderClaudeCodeDocument() {
  documentRoot.innerHTML = `
    <h1 class="page-title">Claude Code</h1>
    <p class="page-description">Claude Code 教程 — 将 Anthropic 的终端编程助手对接 Tamgur AI。支持代码理解、多文件编辑，集成 VS Code 与 JetBrains IDE。</p>

    <div class="callout info">
      <div class="callout-title">ℹ&nbsp;&nbsp;项目介绍</div>
      <p>直接在你的终端中释放 Claude 的强大能力。瞬间搜索百万行代码库。将耗时数小时的工作流程化为一条命令。你的工具，你的工作流，你的代码库，以思维速度进化。</p>
      <ul class="content-list compact-list">
        <li>官方主页：<a href="https://www.anthropic.com/claude-code" target="_blank" rel="noreferrer">https://www.anthropic.com/claude-code</a></li>
      </ul>
    </div>

    <section>
      <h2 id="claude-demo"></h2>
     <!-- ${renderImagePlaceholder("introduce-01.webp")}  -->
    <!--  ${renderImagePlaceholder("introduce-02.webp")}-->

      <h3 id="claude-features">特性</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>功能分类</th><th>特性</th></tr></thead>
          <tbody>
            <tr><td><strong>代码理解</strong></td><td>深度代码库分析，利用智能代理搜索理解项目结构和依赖</td></tr>
            <tr><td></td><td>自动生成高层次代码概述，快速帮助用户理解代码库</td></tr>
            <tr><td><strong>代码编辑</strong></td><td>支持多文件协同编辑，适用于复杂代码修改</td></tr>
            <tr><td></td><td>提供符合项目模式和架构的实际可用代码建议</td></tr>
            <tr><td><strong>集成能力</strong></td><td>支持在终端中直接运行，无需切换上下文</td></tr>
            <tr><td></td><td>与VS Code和JetBrains IDE无缝集成，无需复制粘贴</td></tr>
            <tr><td><strong>代码生成和优化</strong></td><td>自动生成代码、创建测试、修复错误，支持从概念到提交的完整流程</td></tr>
            <tr><td></td><td>为代码生成和理解优化，结合Claude Opus 4等先进模型</td></tr>
            <tr><td><strong>安全与灵活性</strong></td><td>改动需获得用户明确授权，文件和命令操作更安全</td></tr>
            <tr><td></td><td>适应用户代码规范，支持自定义配置</td></tr>
            <tr><td><strong>工具链整合</strong></td><td>支持与GitHub、GitLab等工具结合，实现自动化工作流程</td></tr>
            <tr><td></td><td>与测试套件、构建系统集成，增强现有开发工具</td></tr>
            <tr><td><strong>跨平台与扩展</strong></td><td>支持Windows、macOS、Linux操作系统</td></tr>
            <tr><td></td><td>可配置运行在SDK或GitHub Actions中，灵活适配不同需求</td></tr>
            <tr><td><strong>主要应用场景</strong></td><td>代码库入门和理解、新成员快速上手</td></tr>
            <tr><td></td><td>代码问题修复与优化流程，从分析问题到提交PR</td></tr>
            <tr><td></td><td>项目代码重构与新功能实现</td></tr>
            <tr><td><strong>用户反馈亮点</strong></td><td>提升日常开发效率，省去例行任务消耗的时间</td></tr>
            <tr><td></td><td>处理复杂多步骤任务表现优异，扩展开发可能性</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 id="claude-config">AI 模型配置方法</h2>

      <h3 id="claude-windows">Windows 端图文指引</h3>
      <h4>1.安装 Node.js 环境</h4>
      <p>Claude Code 需要 Node.js 环境才能运行。</p>
      <p>可参考官方教程：<a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">https://nodejs.org/en/download</a></p>
      <div class="callout info">
        <div class="callout-title">ℹ&nbsp;&nbsp;Node.js 环境安装步骤</div>
        <ul class="content-list compact-list">
          <li>打开浏览器访问 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">https://nodejs.org/</a></li>
          <li>点击 "LTS"版本进行下载（推荐长期支持版本）</li>
          <li>下载完成后双击 .msi 文件</li>
          <li>按照安装向导完成安装，保持默认设置即可</li>
        </ul>
      </div>
      <div class="callout warning">
        <div class="callout-title">⚠&nbsp;&nbsp;Windows 注意事项</div>
        <ul class="content-list compact-list">
          <li>建议使用 PowerShell 而不是 CMD</li>
          <li>如果遇到权限问题，尝试以管理员身份运行</li>
          <li>某些杀毒软件可能会误报，需要添加白名单</li>
        </ul>
      </div>
    <!--  ${["windows-img-01.webp", "windows-img-02.webp", "windows-img-03.webp", "windows-img-04.webp", "windows-img-05.webp"].map(renderImagePlaceholder).join("")} -->
      <div class="callout info">
        <div class="callout-title">ℹ&nbsp;&nbsp;验证安装是否成功</div>
        <p>安装完成后，打开 PowerShell 或 CMD，输入以下命令：</p>
        ${renderCode("node --version\nnpm --version")}
        <p>如果显示版本号，说明安装成功。</p>
      </div>

      <h4>2.安装 Git Bash</h4>
      <div class="callout warning"><div class="callout-title">⚠&nbsp;&nbsp;Windows 注意事项</div><p>Windows 环境下需要使用 Git Bash 安装 Claude code。安装完成后，环境变量设置和使用 Claude Code 仍然在普通的 PowerShell 或 CMD 中进行。</p></div>
      <div class="callout info">
        <div class="callout-title">ℹ&nbsp;&nbsp;下载并安装 Git for Windows</div>
        <ul class="content-list compact-list">
          <li>安装可参考官方教程：<a href="https://git-scm.com/install/windows" target="_blank" rel="noreferrer">https://git-scm.com/install/windows</a></li>
          <li>点击 "Download for Windows" 下载安装包</li>
          <li>运行下载的 .exe 安装文件</li>
          <li>在安装过程中保持默认设置，直接点击 "Next" 完成安装</li>
        </ul>
      </div>
      <!-- ${["windows-img-06.webp", "windows-img-07.webp", "windows-img-08.webp"].map(renderImagePlaceholder).join("")} -->
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;验证 Git Bash 安装</div><p>安装完成后，打开 Git Bash，输入以下命令验证：</p>${renderCode("git --version")}<p>如果显示版本号，说明安装成功。</p></div>

      <h4>3.安装 Claude Code</h4>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;安装 Claude Code</div><p>打开 PowerShell，运行以下命令：</p>${renderCode("npm install -g @anthropic-ai/claude-code")}<p>这个命令会从 npm 官方仓库下载并安装最新版本的 Claude Code。</p></div>
    <!-- ${renderImagePlaceholder("windows-img-09.webp")} -->
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;将 ~/.local/bin 加入 PATH（仅当提示要求时）</div>${renderCode("[Environment]::SetEnvironmentVariable('Path', ([Environment]::GetEnvironmentVariable('Path','User') + \";$HOME\\.local\\bin\"), 'User')", "powershell")}</div>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;验证 Claude Code 安装</div><p>安装完成后，输入以下命令检查是否安装成功：</p>${renderCode("claude --version")}<p>如果显示版本号，恭喜你！Claude Code 已经成功安装了。</p></div>

      <h4>4.设置环境变量</h4>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;一键设置命令 (Windows 系统)</div><p>为了让 Claude Code 连接到 Tamgur AI 的API服务，需要设置多个环境变量：</p></div>
      ${renderCode("iex (irm 'https://raw.githubusercontent.com/QuantumNous/new-api-docs/refs/heads/main/helper/claude-cli-setup.ps1')", "powershell")}
      <!-- ${renderImagePlaceholder("windows_configure.webp")} -->
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;设置API地址和KEY秘钥</div><p>将base_url设置为：<a href="https://api.tamgur.tech" target="_blank" rel="noreferrer">https://api.tamgur.tech</a><br>API KEY秘钥设置成你在 Tamgur AI 开放平台创建的令牌</p></div>

      <h4>5.开始使用 Claude Code</h4>
      <p>现在你可以开始使用 Claude Code 了！</p>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;启动 Claude Code</div><p>打开 PowerShell，直接启动 Claude Code：</p>${renderCode("claude")}<p>在特定项目中使用：</p>${renderCode("# 进入你的项目目录\ncd C:\\path\\to\\your\\project\n\n# 启动 Claude Code\nclaude")}</div>
    <!--  ${["windows-img-11.webp", "windows-img-12.webp", "windows-img-13.webp", "windows-img-14.webp", "windows-img-15.webp"].map(renderImagePlaceholder).join("")} -->
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;选择模型</div><p>输入命令：</p>${renderCode("/model")}<p>按 Enter 进入，选择模型，通常使用默认设置 (/ default )即可。</p></div>
     <!-- ${["windows-img-16.webp", "windows-img-17.webp"].map(renderImagePlaceholder).join("")} -->
      <blockquote>注意：设置环境变量修改后，使用所有模型（包括官方预设模型）均调用自定义接入点，而不使用官方账号额度。</blockquote>

      <h3 id="claude-macos">MacOS 端图文指引</h3>
      <h4>1.安装 Claude Code CLI</h4>
      <p>打开终端</p>
      <!-- ${renderImagePlaceholder("macos-img-01.webp")} -->
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;安装 Claude Code</div><p>打开终端，运行以下命令：</p>${renderCode("curl -fsSL https://claude.ai/install.sh | bash")}<p>可选项：出现提示后运行提供的命令</p>${renderCode("echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.bashrc && source ~/.bashrc")}</div>
      <!--${renderImagePlaceholder("macos-img-02.webp")} -->

      <h4>2.设置环境变量</h4>
      <p>为了让 Claude Code 连接到 Tamgur AI 服务，需要设置环境变量：</p>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;一键设置 Claude Code 环境变量</div><p>输入命令：</p>${renderCode("curl -fsSL https://raw.githubusercontent.com/QuantumNous/new-api-docs/refs/heads/main/helper/claude-cli-setup.sh | bash")}</div>
      <!-- ${renderImagePlaceholder("macos_configure.webp")} -->
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;设置API地址和KEY秘钥</div><p>将base_url设置为：<a href="https://api.tamgur.tech" target="_blank" rel="noreferrer">https://api.tamgur.tech</a><br>API KEY秘钥设置成你在 Tamgur AI 开放平台创建的令牌</p></div>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;验证 Claude Code 安装</div><p>安装完成后，输入以下命令检查是否安装成功：</p>${renderCode("claude --version")}<p>如果显示版本号，恭喜你！Claude Code 已经成功安装了。</p></div>

      <h4>3.开始使用 Claude Code</h4>
      <p>现在你可以开始使用 Claude Code 了！</p>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;启动 Claude Code</div><p>直接启动 Claude Code：</p>${renderCode("claude")}<p>在特定项目中使用：</p>${renderCode("# 进入你的项目目录\ncd /path/to/your/project\n\n# 启动 Claude Code\nclaude")}</div>
     <!-- ${["macos-img-04.webp", "macos-img-05.webp", "macos-img-06.webp", "macos-img-07.webp", "macos-img-08.webp"].map(renderImagePlaceholder).join("")} -->
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;选择模型 (可选)</div><p>输入命令：</p>${renderCode("/model")}<p>按 Enter 进入，选择官方模型，通常使用默认模型即可。</p></div>
      <!-- ${["macos-img-09.webp", "macos-img-10.webp", "macos-img-11.webp"].map(renderImagePlaceholder).join("")} -->
      <blockquote>注意：设置环境变量修改 <code>ANTHROPIC_BASE_URL</code> 后，使用所有模型（包括官方预设模型）均调用自定义接入点，而不使用官方账号额度。</blockquote>

      <h4>4.macOS 常见问题解决</h4>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;macOS 安全设置阻止运行</div><p>如果系统阻止运行 Claude Code：</p><ul class="content-list compact-list"><li>打开"系统偏好设置" → "安全性与隐私"</li><li>点击"仍要打开"或"允许"</li><li>或者在 Terminal 中运行：<code>sudo spctl --master-disable</code></li></ul></div>

      <h3 id="claude-linux">Linux 端图文指引</h3>
      <h4>1.安装 Claude Code</h4>
      ${renderImagePlaceholder("linux-img-01.webp")}
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;安装 Claude Code</div><p>打开终端，运行以下命令：</p>${renderCode("curl -fsSL https://claude.ai/install.sh | bash")}<p>如果遇到权限问题，可以使用 sudo：</p>${renderCode("sudo curl -fsSL https://claude.ai/install.sh | bash")}</div>
      ${renderImagePlaceholder("linux-img-03.webp")}
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;验证 Claude Code 安装</div><p>安装完成后，输入以下命令检查是否安装成功：</p>${renderCode("claude --version")}<p>如果显示版本号，恭喜你！Claude Code 已经成功安装了。</p></div>

      <h4>2.设置环境变量</h4>
      <p>为了让 Claude Code 连接 Tamgur AI 服务，需要设置两个环境变量：</p>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;一键修改环境变量</div><p>输入命令：</p>${renderCode("curl -fsSL https://raw.githubusercontent.com/QuantumNous/new-api-docs/refs/heads/main/helper/claude-cli-setup.sh | bash")}</div>
      ${renderImagePlaceholder("macos_configure.webp")}
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;设置API地址和KEY秘钥</div><p>将base_url设置为：<a href="https://api.tamgur.tech" target="_blank" rel="noreferrer">https://api.tamgur.tech</a><br>API KEY秘钥设置成你在 Tamgur AI 开放平台创建的令牌</p></div>

      <h4>3.开始使用 Claude Code</h4>
      <p>现在你可以开始使用 Claude Code 了！</p>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;启动 Claude Code</div><p>直接启动 Claude Code：</p>${renderCode("claude")}<p>在特定项目中使用：</p>${renderCode("# 进入你的项目目录\ncd /path/to/your/project\n\n# 启动 Claude Code\nclaude")}</div>
      ${["linux-img-03.webp", "linux-img-04.webp", "linux-img-05.webp"].map(renderImagePlaceholder).join("")}
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;选择模型</div><p>输入命令：</p>${renderCode("/model")}<p>按 Enter 进入，选择官方模型，通常使用默认模型即可。</p></div>
    <!--  ${["linux-img-06.webp", "linux-img-07.webp", "linux-img-08.webp", "linux-img-09.webp"].map(renderImagePlaceholder).join("")} -->
      <blockquote>注意：设置环境变量修改 <code>ANTHROPIC_BASE_URL</code> 后，使用所有模型（包括官方预设模型）均调用自定义接入点，而不使用官方账号额度。</blockquote>

      <h4>4.Linux 常见问题解决</h4>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;缺少依赖库</div><p>某些 Linux 发行版需要安装额外依赖：</p>${renderCode('# Ubuntu/Debian\nsudo apt install build-essential\n\n# CentOS/RHEL\nsudo dnf groupinstall "Development Tools"')}</div>
      <div class="callout info"><div class="callout-title">ℹ&nbsp;&nbsp;环境变量不生效</div><p>检查以下几点：</p><ul class="content-list compact-list"><li>确认修改了正确的配置文件（<code>.bashrc</code> 或 <code>.zshrc</code>）</li><li>重新启动终端或运行 <code>source ~/.bashrc</code></li><li>验证设置：<code>echo $ANTHROPIC_BASE_URL</code></li></ul></div>
    </section>`;

  toc.innerHTML = claudeCodeToc.map(([id, label, sub]) =>
    `<li><a href="#${id}"${sub ? ' class="sub"' : ""}>${label}</a></li>`
  ).join("");
}

function renderDocument() {
  const pack = getPack();
  const product = products.find(([id]) => id === activeId) || products[0];
  if (activeId === "openclaw") {
    if (locale === "zh-CN") renderOpenClawDocument();
    else renderLocalizedOpenClawDocument();
    bindCopyButtons(pack);
    return;
  }
  if (activeId === "claude-code") {
    if (locale === "zh-CN") renderClaudeCodeDocument();
    else renderLocalizedClaudeCodeDocument();
    bindCopyButtons(pack);
    return;
  }
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

  bindCopyButtons(pack);
}

function bindCopyButtons(pack) {
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
  localStorage.setItem("tamgur-language", locale);
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
