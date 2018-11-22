function ChineseProvider($translateProvider) {
    'ngInject'

    $translateProvider.translations('cn', {

        // HEADER COMPONENT
        WALLET_NAME_1: 'NEM',
        WALLET_NAME_2: 'Wallet',
        APP_NAME_SUB: '安全界面正在连接NEM平台',
        HEADER_LOGIN_BUTTON: '登录',
        HEADER_SIGNUP_BUTTON: '注册',
        HEADER_DASHBOARD: '仪表板',
        HEADER_WALLET: '钱包',
        HEADER_SERVICES: '服务',
        HEADER_EXPLORER: '浏览器',
        HEADER_NODE: '节点',
        HEADER_ACCOUNT: '帐户',
        HEADER_LANG_TITLE: '语言',
        HEADER_LANG_SELECT: '选择语言',
        HEADER_NODE_BLOCK_HEIGHT: '区块高',
        HEADER_NODE_CURRENT_NODE: '当前节点',
        HEARDER_NODE_LIST: '节点清单',
        HEADER_NODE_SELECT: '选择节点',
        HEADER_NODE_CUSTOM: '自定义节点',
        HEADER_NODE_CONNECT: '连接',
        HEADER_NODE_CUSTOM_INFO: '节点IP或域名',
        HEADER_NODE_CUSTOM_TOOLTIP: '这里输入你自己的NIS节点',
        HEADER_PURGE: '清理',
        HEADER_PURGE_MESSAGE: '请确认清理功能将删除您本地保存的全部信息。如确认，点击OK，本地存储的所有钱包信息将被全部删除，请确认所有钱包均已做好备份，确保资金安全。',
        HEADER_OFFLINE_TX: '准备离线交易',
        HEADER_RELEASE_TX: '发布交易',

        // FOOTER COMPONENT
        FOOTER_POWERED_BY_1: '基于',
        FOOTER_POWERED_BY_2: 'NEM技术实现.',
        FOOTER_VERSION: '版本',

        // DASHBOARD MODULE
        DASHBOARD_TITLE: '仪表盘',
        DASHBOARD_UNCONFIRMED: '未确认',
        DASHBOARD_CONFIRMED: '已确认',
        DASHBOARD_HARVEST_INCOME_TITLE: '最近创建的25个块的收获',
        DASHBOARD_HARVEST_INCOME_NOTE: '仅包含费用高于0的块',
        DASHBOARD_HARVEST_INCOME_MESSAGE: '最近25个区块中无费用',
        DASHBOARD_NEWS_TITLE: '最新消息',
        DASHBOARD_HARVESTED_BLOCKS_TITLE: '已收获块',
        DASHBOARD_HARVESTED_BLOCKS_TH: '已获取费用',
        DASHBOARD_MARKET_INFO_TITLE: '市场信息',
        DASHBOARD_MARKET_INFO_CAP: '总市值',
        DASHBOARD_MARKET_INFO_PRICE: '价格',
        DASHBOARD_MARKET_INFO_VOLUME: '24小时交易量',
        DASHBOARD_MARKET_INFO_CHANGES: '换手率',
        DASHBOARD_MARKET_INFO_CHANGES_1H: '1小时',
        DASHBOARD_MARKET_INFO_CHANGES_24H: '24小时',
        DASHBOARD_MARKET_INFO_CHANGES_7D: '7天',
        DASHBOARD_MARKET_INFO_NOTE: '<a href="http://coinmarketcap.com/" target="_blank">CoinMarketCap</a> 数据每5分钟更新一次',
        DASHBOARD_NOTICE_1:  '欢迎来到 NEM Wallet Beta!',
        DASHBOARD_NOTICE_2: '请 <a href="https://github.com/bad-weather-corp/NEMWallet" target="_blank">在这里报告问题</a>',
        DASHBOARD_NOTICE_3: 'NEM team 不对由于在主网上使用此应用程序而导致的任何资金损失负责，以及我们建议您首先在测试网上进行测试，以便先熟悉NEM Wallet. 用户自己负责其资金并具有其私钥。.',
        DASHBOARD_NOTICE_4: '如果您不确定您的所有资金是否安全，请勿使用该网络。我们建议在纸上写下私钥并将其存放在安全的地方。 此外，您可以将您的账户导入Lightwallet/NCC.',
        DASHBOARD_NOTICE_5: '感谢您的参与!',

        // GENERAL
        GENERAL_BLOCK: '块',
        GENERAL_BLOCKS: '分段',
        GENERAL_NO_RESULTS: '无结果',
        GENERAL_ACCOUNT: '账户',
        GENERAL_ACCOUNTS: '帐户',
        GENERAL_MULTISIG_ACCOUNT: '多重签名账户',
        GENERAL_AMOUNT: '量',
        GENERAL_MESSAGE: '消息',
        GENERAL_DATE: '日期',
        GENERAL_TAB_NORMAL: '普通',
        GENERAL_TAB_SEND: '发送',
        GENERAL_TAB_MULTISIG: '多重签名',
        GENERAL_TOTAL: '总量',
        GENERAL_REMOVE: '删除',
        GENERAL_MOSAIC: '马赛克',
        GENERAL_FEE: '费用',
        GENERAL_LEVY: '征费',
        GENERAL_LEVY_TYPES: '征费类型',
        GENERAL_LEVY_TYPES_NOTE: 'I - 固定费用; II - 百分比方式',
        GENERAL_LEVY_TYPE_1: '不变的费用',
        GENERAL_LEVY_TYPE_2: '利率',
        GENERAL_SEND: '发送',
        GENERAL_TO: '目标',
        GENERAL_HASH: '哈希',
        GENERAL_HASH_FUNCTION: '哈希函数',
        GENERAL_NAME: '名称',
        GENERAL_INFORMATION: '信息',
        GENERAL_ADDRESS: '地址',
        GENERAL_PUBLIC_KEY: '公钥',
        GENERAL_PRIVATE_KEY: '私钥',
        GENERAL_CLEAR_ALL: '全部清除',
        GENERAL_CLOSE: '关闭',
        GENERAL_COMING_SOON: '即将推出',
        GENERAL_NONE: '无',
        GENERAL_DROPBOX: '拖拽文件至此，点击或浏览',
        GENERAL_NETWORK_FEE: '网络费用',
        GENERAL_YES: '是',
        GENERAL_NO: '否',
        GENERAL_TAGS: '标签',
        GENERAL_SINK: 'Sink',
        GENERAL_SINK_ADDRESS: 'Sink 地址',
        GENERAL_STORAGE: '存储',
        GENERAL_REASON: '原因',
        GENERAL_TRANSACTION_HASH: '事务哈希',
        GENERAL_TRANSACTION_ID: '事务ID',
        GENERAL_OWNER: '属主',
        GENERAL_RESULTS: '结果集',
        GENERAL_RESULT: '结果',
        GENERAL_STATUS: '状态',
        GENERAL_LOCATION: '位置',
        GENERAL_ACTION: '行动',
        GENERAL_ACTIONS: '行动',
        GENERAL_ADD: '添加',
        GENERAL_ADDED: '已添加',
        GENERAL_REMOVED: '已删除',
        GENERAL_COSIGNATORY: '共签人',
        GENERAL_COSIGNATORIES: '共签人集',
        GENERAL_PROCESSING: '处理中',
        GENERAL_ACCOUNT_LABEL: '账户标签',
        GENERAL_OPTIONAL: '(可选)',
        GENERAL_ERROR: '错误',
        GENERAL_EXAMPLE: '例',
        GENERAL_PUBLIC: '公开',
        GENERAL_NAMESPACES: '命名空间门',
        GENERAL_NAMESPACE: '命名空间',
        GENERAL_SUB_NAMESPACES: '命名空间门子类别',
        GENERAL_SUB_NAMESPACE: '命名空间子类别e',
        GENERAL_MOSAICS: '马赛克',
        GENERAL_VALUE: '价钱',
        GENERAL_CONNECTION_ERROR: '发生错误，无论节点关闭还是脱机',
        GENERAL_HISTORY: '历史',
        GENERAL_REVEAL: '揭示',
        GENERAL_QR: 'QR代码',
        GENERAL_UPDATE:  '更新',
        GENERAL_UNKNOWN: '不明',
        GENERAL_IMPORTANCE: '重要性',
        GENERAL_TRANSACTIONS: '交易',
        GENERAL_REGISTER: '注册',
        GENERAL_CREATE: '创建',
        GENERAL_RENEW: '更新',
        GENERAL_CHARACTERS_LEFT: '剩余字符',
        GENERAL_CURRENCY: '货币',
        GENERAL_EDIT: '编辑',
        GENERAL_SEND_XEM: '发送 XEM',
        GENERAL_ACTIVE: '活性',
        GENERAL_INACTIVE: '待用',
        GENERAL_ACTIVATING: '激活',
        GENERAL_DEACTIVATING: '停用',
        GENERAL_REMOTE: '远程',
        GENERAL_WARNING: '警告',
        GENERAL_SCORE: '得分',
        GENERAL_LENGTH: '长度',
        GENERAL_GO_BACK: '回去',
        GENERAL_NEXT: '下一个',
        GENERAL_START: '开始',
        GENERAL_ALIAS: '别号',
        GENERAL_CONTACTS: '往来',
        GENERAL_ENCRYPTED: '加密',
        GENERAL_UNENCRYPTED: '未加密',
        GENERAL_HEXADECIMAL: '十六进制',
        GENERAL_SELECT_ACCOUNT: '选择帐户',
        GENERAL_INVOICE: '账单',

        // HOME MODULE
        HOME_UNSUPPORTED_BROWSER: '对不起，但你不能在这里安全地使用NEM Wallet...',
        HOME_RECOMMENDED_BROWSERS: '推荐的浏览器:',
        HOME_FEATURE_STAND_BY: '将光标置于特征上以显示信息.',
        HOME_FEATURE_1: '只需1分钟的时间，几乎立即发送和接收XEM !',

        // TRANSFER TRANSACTION MODULE
        TRANSFER_TRANSACTION_TITLE: '发送和接收',
        TRANSFER_TRANSACTION_NAME: '传输事务',
        TRANSFER_TRANSACTION_MULTISIG_NAME: '多重签名传输事务',
        TRANSFER_TRANSACTION_INVOICE: '创建账单',
        TRANSFER_TRANSACTION_TAB_INVOICE: '账单',
        TRANSFER_TRANSACTION_MOSAIC_TRANSFER: '马赛克传输',
        TRANSFER_TRANSACTION_ATTACH_MOSAIC: '附加马赛克',
        TRANSFER_TRANSACTION_ATTACH: '附加',
        TRANSFER_TRANSACTION_MOSAICS_ATTACHED: '马赛克加入完成',
        TRANSFER_TRANSACTION_ENCRYPT_MESSAGE: '加密消息',
        TRANSFER_TRANSACTION_MESSAGE_TYPE: '消息类型',

        // TRANSACTION LINES
        LINE_TX_DETAILS_FROM: '来自',
        LINE_TX_DETAILS_FROM_MULTISIG: '来自多重签名',
        LINE_TX_DETAILS_WAITING: '事务正在等待成立',
        LINE_TX_DETAILS_NEED_SIG: '需要共签人签名',
        LINE_TX_DETAILS_NEED_SIG_2: '这个事务需要您的签名',
        //LINE_TX_DETAILS_MESS_ENC: '加密',
        LINE_TX_DETAILS_MESS_DEC: '解密',
        LINE_TX_DETAILS_HASH: 'Hash',
        LINE_TX_DETAILS_DEC_MESS: '解密消息',
        LINE_TX_DETAILS_MOS_ATTACHED: '已附加马赛克',
        LINE_TX_DETAILS_LEVY_TYPE_1: '常量',
        LINE_TX_DETAILS_LEVY_TYPE_2: '百分比方式',
        LINE_TX_DETAILS_ISSUER: '创建者',
        LINE_TX_DETAILS_MULTISIG_FEE: '多重签名费用',
        LINE_TX_DETAILS_MULTISIG_HASH: '多重签名hash',
        LINE_TX_DETAILS_COSIGN: '签名事务',
        LINE_TX_DETAILS_SIGNATURES: '签名',
        LINE_TX_DETAILS_COSIGNATORY: '共签人',
        LINE_TX_DETAILS_TIMESTAMP: '时间戳',
        LINE_TX_DETAILS_MOS_CREATE: '创建马赛克',
        LINE_TX_DETAILS_MOS_EDIT: '编辑马赛克',
        LINE_TX_DETAILS_NS_CREATE: '创建命名空间',
        LINE_TX_DETAILS_NS_NEW_SUB: '新建下属命名空间',
        LINE_TX_DETAILS_NS_ROOT: '根命名空间',
        LINE_TX_DETAILS_RECIPIENT: '接受者',
        LINE_TX_DETAILS_MULTISIG_CREATE: '创建多重签名账户',
        LINE_TX_DETAILS_MULTISIG_EDIT: '编辑多重签名账户',
        LINE_TX_DETAILS_MULTISIG_MOD: '修改',
        LINE_TX_DETAILS_MULTISIG_MIN_COSIG: '最小签署人数',
        LINE_TX_DETAILS_MULTISIG_AFFECTED: '相关账号',

        // IMPORTANCE MODULE
        IMPORTANCE_TRANSFER_NAME: '重要性传输事务',
        IMPORTANCE_TRANSFER_MULTISIG_NAME: '多重签名重要性传输事务',
        IMPORTANCE_TRANSFER_MODE: '模式',
        IMPORTANCE_TRANSFER_MODE_1: '激活',
        IMPORTANCE_TRANSFER_MODE_2: '取消激活',
        IMPORTANCE_TRANSFER_TITLE: '管理远程账户',
	    IMPORTANCE_TRANSFER_MULTISIGNATURE_TITLE: '管理委托的多重签名账户',
        IMPORTANCE_TRANSFER_CUSTOM_KEY: '使用远程公钥',
        IMPORTANCE_TRANSFER_MODE_SELECT: '选择模式',
        IMPORTANCE_TRANSFER_REMOTE_ACCOUNT: '远程账户',
        IMPORTANCE_TRANSFER_REMOTE_PUBLIC: '远程公钥',
        IMPORTANCE_TRANSFER_INFO_PART_1: '重要性传输事务产生后，需要等待6小时以完成激活。激活完成后，您将可以选择一个节点用于委托收获，点击账户页的Harvesting按钮开始收获。',
        IMPORTANCE_TRANSFER_INFO_PART_2: '如果您的账户属备份导入，请确认这个账户并未激活委托收获。如果已激活，您需要先使用旧公钥执行解除激活。',
        IMPORTANCE_TRANSFER_INFO_PART_MULTISIG: '对于多重签名账户，只有发起重要性转移操作的共同签字人才能启动/停止块的收集. 对于多重签名账户，只有发起重要性转移交易的合同可以启动和停止收获.',
        IMPORTANCE_TRANSFER_NO_BLOCKS_HARVESTED: '没有组装的块',
        IMPORTANCE_TRANSFER_HARVESTING_PANEL: '收集面板',
        IMPORTANCE_TRANSFER_REMOTE_ACTIVATING: '您必须等到删除的状态更改为“激活”才能开始授权的块集合.',
        IMPORTANCE_TRANSFER_REMOTE_INACTIVE: '您必须在左侧面板中发送交易以激活您的远程帐户.',
        IMPORTANCE_TRANSFER_MULTISIG_NOT_INITIATOR: '您不是激活已删除帐户的签署者, 所以您不能启动/停止代理块的集合.',
        IMPORTANCE_TRANSFER_PRIVATE_KEY_PLACEHOLDER: '显示委托帐户的私钥',
        IMPORTANCE_TRANSFER_DELEGATED_KEYS: '委托帐户密钥',
        IMPORTANCE_TRANSFER_HARVESTING_STATUS: '收获状态',
        IMPORTANCE_TRANSFER_START_HARVESTING: '开始授权收获',
        IMPORTANCE_TRANSFER_STOP_HARVESTING: '停止授权收割',
        IMPORTANCE_TRANSFER_ACTIVATE_DEACTIVATE_REMOTE: '激活/取消激活委托的帐户',
        IMPORTANCE_TRANSFER_SHOW_DELEGATED_KEYS: '显示委托的帐户密钥',

        // CREATE MOSAIC MODULE
        MOSAIC_DEFINITION_TITLE: '创建马赛克',
        MOSAIC_DEFINITION_NAME: '马赛克定义事务',
        MOSAIC_DEFINITION_MULTISIG_NAME: '多重签名马赛克定义事务',
        MOSAIC_DEFINITION_QUANTITY: '量',
        MOSAIC_DEFINITION_DIV: '可分割性',
        MOSAIC_DEFINITION_TOTAL_SUPPLY: '总供给',
        MOSAIC_DEFINITION_FINAL_NAME: '全名',
        MOSAIC_DEFINITION_DESCRPITION: '描述',
        MOSAIC_DEFINITION_INITIAL_SUPPLY: '初始供应',
        MOSAIC_DEFINITION_MUTABLE_SUPPLY: '可变供应量',
        MOSAIC_DEFINITION_TRANSFERABLE: '可传输',
        MOSAIC_DEFINITION_PROPERTIES: '属性',
        MOSAIC_DEFINITION_MOSAIC_PROPERTIES: '马赛克属性',
        MOSAIC_DEFINITION_REQUIRES_LEVY: '需要征费',
        MOSAIC_DEFINITION_LEVY_LIMITATION: 'UI限制： 当前仅允许已拥有的马赛克作为征费。',
        MOSAIC_DEFINITION_LEVY_SELECT_MOSAIC: '选择征费马赛克',
        MOSAIC_DEFINITION_LEVY_ADDRESS: '征费地址',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE: '征费类型',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_1: '绝对值',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2: '百分比值',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_1_NOTE: '选择绝对值，将会产生的常量征费',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE: '选择百分比，将会产生现行的征费为：',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_2: '发送中',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_3: '将包含征费',
        MOSAIC_DEFINITION_PARENT: '父命名空间',
        MOSAIC_DEFINITION_INFORMATION_TITLE: '创建马赛克',
        MOSAIC_DEFINITION_INFORMATION: '想要了解更多关于马赛克的信息?',
        MOSAIC_DEFINITION_INFORMATION_1: '马赛克允许最长32个字符：',
        MOSAIC_DEFINITION_INFORMATION_2: '第一个字符必须是英文字母。',
        MOSAIC_DEFINITION_INFORMATION_3: '描述必须在512个字符以内。描述文字中所使用的字符无限制。',
        MOSAIC_DEFINITION_INFORMATION_4: '马赛克的行为可由属性方式定制:',
        MOSAIC_DEFINITION_INFORMATION_5: '供给量需要以整数个单元马赛克描述，不可使用小数。 供应量必须在限制区间0到90亿内。',
        MOSAIC_DEFINITION_INFORMATION_6: '分割性将决定马赛克的最小单位可以精确到几位小数。当分割性为3时，这个马赛克可以被定义为最小0.001。分割性需要在0~6区间取值.',
        MOSAIC_DEFINITION_INFORMATION_7: '如果勾选，将允许以后变更马赛克的供应量，否则，将不能变更。',
        MOSAIC_DEFINITION_INFORMATION_8: '允许传输马赛克至创建者以外的账户。如果可传输性未勾选，则只有马赛克的属主作为发送者或者接收者的情形才能生成事务。如果勾选，马赛克将可以被传输至任何账户。',
        MOSAIC_DEFINITION_INFORMATION_9: '如果勾选，创建者可以向事务的发送者征收费用。(创建者可以指定任何有效账户作为费用接收账户)。征费的状态如下:',
        MOSAIC_DEFINITION_INFORMATION_10: '征费所用的马赛克类型，任何现有的马赛克都可以指定。',
        MOSAIC_DEFINITION_INFORMATION_11: '征费的接收者，可以使用任何有效账户。',
        MOSAIC_DEFINITION_INFORMATION_12: '征费量。根据以上类型的选择，指定百分比或绝对值。',
        MOSAIC_DEFINITION_INFORMATION_13: '支持百分比和绝对值两种征费类型。',
        MOSAIC_DEFINITION_INFORMATION_14: '征费已选择使用绝对值，它将不取决于传输的量。',
        MOSAIC_DEFINITION_INFORMATION_15: '征费已选择为百分比。费用将随传输的量线性增加。',
        MOSAIC_DEFINITION_INFORMATION_16: '在NEM区块链上发送马赛克需要收费. 确切的费用根据其总数和在交易期间发送的数量计算.对于任何<b>小型商业马赛克</ b>的转让佣金为0.05 XEM. 这是一个可分割度为0且金额≤10000的马赛克.',
        MOSAIC_DEFINITION_INFORMATION_17: '如果您拥有100％的供应量，则可以通过使用相同的“namespace：mosaic”名称再次发送创建事务来覆盖所有马赛克属性.',

        // EDIT MOSAIC MODULE
        MOSAIC_SUPPLY_CHANGE_TITLE: '变更马赛克供应量',
        MOSAIC_SUPPLY_CHANGE_NAME: '马赛克供应量变更事务',
        MOSAIC_SUPPLY_CHANGE_MULTISIG_NAME: '多重签名马赛克供应量变更事务',
        MOSAIC_SUPPLY_CHANGE_SELECT: '选择马赛克',
        MOSAIC_SUPPLY_CHANGE_TYPE: '变更类型',
        MOSAIC_SUPPLY_CHANGE_TYPE_1: '创建',
        MOSAIC_SUPPLY_CHANGE_TYPE_2: '删除',
        MOSAIC_SUPPLY_CHANGE_SUPPLY: '供应量',
        MOSAIC_SUPPLY_CHANGE_CURRENT_SUPPLY: '现有供应量',
        MOSAIC_SUPPLY_CHANGE_AMOUNT: '变更量',
        MOSAIC_SUPPLY_CHANGE_RES_SUPPLY: '变更后供应量',

        // NAMESPACE MODULE
        NAMESPACE_PROVISION_TITLE: '创建命名空间和子命名空间',
        NAMESPACE_PROVISION_NAME: '命名空间部署事务',
        NAMESPACE_PROVISION_MULTISIG_NAME: '多重签名命名空间部署事务',
        NAMESPACE_PROVISION_PARENT: '父命名空间 (不包括3层)',
        NAMESPACE_PROVISION_NEW_ROOT: '创建新的根命名空间',
        NAMESPACE_PROVISION_PARENT: '父命名空间',
        NAMESPACE_PROVISION_NEW_ROOT: '新的根命名空间',
        NAMESPACE_PROVISION_NS: '称空间',
        NAMESPACE_PROVISION_NS_NAME: '命名空间名',
        NAMESPACE_PROVISION_RESTRICTIONS: '命名空间限制',
        NAMESPACE_PROVISION_INFORMATION_1: '命名空间所使用的长度和字符均存在限制。根命名空间长度限制为16个字符以内，二级命名空间长度限制为64个字符以内。有效的字符有：',
        NAMESPACE_PROVISION_INFORMATION_2: '命名空间的首个字符必须使用英文字母。 \'alice\'是有效命名空间，而 \'1alice\'不是。部分字符串被保留，不可用于命名空间的申请。不被允许的命名空间包含字符串如下：',
        NAMESPACE_PROVISION_INFORMATION_3: '这个清单将可能会增加内容，请注意查看。 \'user.alice\' 和 \'alice.user\' 都不被NEM命名空间系统允许申请。命名空间最多可以被定义为三层，如\'gimre.metals.silver\' 有效，而 \'gimre.metals.silver.coin\' 无效。',

        // RENEW NAMESPACE MODULE
        RENEW_NS_TITLE: '更新命名空间',
        RENEW_NS_NONE: '没有要更新的命名空间',
        RENEW_NS_INFORMATION_TITLE: '更新命名空间',
        RENEW_NS_INFORMATION_TITLE_1: '费用',
        RENEW_NS_INFORMATION_TITLE_2: '根命名空间',
        RENEW_NS_INFORMATION_TITLE_3: '更新期',
        RENEW_NS_INFORMATION_1: '续订命名空间的花费与注册新命名空间的花费相同- 100XEM.',
        RENEW_NS_INFORMATION_2: '只有根命名空间需要更新. 所有子空间命名空间将在根命名空间扩展后自动扩展.',
        RENEW_NS_INFORMATION_3: '根据租赁协议，与命名空间签订的合同最长可达一年. 合同可以在其到期日之前或之后的一个月续约.',
        RENEW_NS_INFORMATION_4: '如果命名空间没有及时扩展，则在其下创建的名称和马赛克的所有子空间都将丢失.',
        RENEW_NS_ALERT_PART_1: '<b>警告 !</b> 命名空间:',
        RENEW_NS_ALERT_PART_2: '将在不到一个月内到期 ! ',
        RENEW_NS_ALERT_PART_3: '收到更多信息，请访问<b>命名空间扩展页面</ b>。.',

        // ACCOUNT MODULE
        ACCOUNT_TITLE: '账户',
        ACCOUNT_ACCOUNT_INFORMATION: '账户信息',
        ACCOUNT_IMPORTANCE_SCORE: '重要性得分',
        ACCOUNT_VESTED_BALANCE: '归属余额',
        ACCOUNT_HARVESTING: '收获',
        ACCOUNT_REMOTE_STATUS: '远程状态',
        ACCOUNT_DELEGATED_PUBLIC: '委托公钥',
        ACCOUNT_HARVESTED_BLOCKS: '已收获块',
        ACCOUNT_START_STOP_HARVESTING: '开始/停止委托收获',
        ACCOUNT_HARVESTING_NOTE: '如果您已经<b>使用纳米钱包</b>开始了收获，且您的本地数据执行过清理，请使用原电脑关闭委托以还原收获状态。 (您未停止收获).',
        ACCOUNT_HARVESTING_NODE_SELECT: '挑选一个用于收获的节点',
        ACCOUNT_HARVESTING_START: '开启委托收获',
        ACCOUNT_HARVESTING_STOP: '停止委托收获',
        ACCOUNT_HARVESTING_NO_SLOTS: '您选取的节点没有空闲收获席位，请选择其他',
        ACCOUNT_HARVESTING_BELOW_THRESHOLD: '您需要10000XEM归属余额以开始委托收获',
        ACCOUNT_ACCOUNT_SELECT: '选择其他账户',
        ACCOUNT_ACCOUNT_SELECT_LABEL: '使用其他账户',
        ACCOUNT_ACCOUNT_SELECT_BTN_NOTE: '变更账户',
        ACCOUNT_WALLET_KEYS: '钱包和密钥',
        ACCOUNT_ADD_NEW_ACCOUNT: '添加新账号',
        ACCOUNT_ADD_NEW_ACCOUNT_BTN: '向钱包中添加新账号',
        ACCOUNT_PRIVATE_KEY_NOTE: '您的私钥掌管着您账号的最高权限。请确保它被<b><u>离线</u></b>安全存储：存储加密的.wlt文件，写在纸张上缩入保险柜，以图片代替文档，或下载<b><u>导出的二维码</u></b>妥善保管。',
        ACCOUNT_PRIVATE_KEY_SHOW: '显示私钥',
        ACCOUNT_EXPORT_MOBILE: '导出至移动钱包',
        ACCOUNT_INFO_QR_BTN: '账户二维码',
        ACCOUNT_WALLET_QR_BTN: 'NEMpay二维码',
        ACCOUNT_WALLET_QR_BTN_2: '移动钱包二维码',
        ACCOUNT_BACKUP_WALLET: '备份钱包',
        ACCOUNT_BACKUP_WALLET_NOTE: '备份您的钱包<b><u>非常重要</u></b>否则您将可能丢失账户',
        ACCOUNT_BACKUP_WALLET_DOWNLOAD: '下载钱包',
        ACCOUNT_INFO_QR_TITLE: '账户信息二维码',
        ACCOUNT_WALLET_QR_NOTE: '这个二维码将被用于未推出的NEMpay移动应用',
        ACCOUNT_WALLET_QR_ANDROID_IOS_TITLE: '移动端钱包二维码',
        ACCOUNT_ADD_NEW_ACCOUNT_WARNING: '所有的账户均使用BIP32由主私钥获取，使用您的主私钥和密码您可以列出所有已导入其他账户信息。 <br><b><u>强烈建议</u></b>添加新账户后再次备份您的新账户私钥',
        ACCOUNT_CUSTOM_NODE: '使用自定义节点',
        ACCOUNT_NODE_FROM_LIST: '使用列表中的节点',
        ACCOUNT_DELEGATED_PRIVATE_KEY: '委托私钥',

        // PORTAL MODULE
        PORTAL_TITLE: '服务',
        PORTAL_MULTISIG_TITLE: '多重签名或多用户账户',
        PORTAL_MULTISIG_TEXT: '多重签名账户中提供可编辑的链上协议，是存储资金，实现共有账户的最佳实现方式',
        PORTAL_MULTISIG_BTN_1: '转换账户为多重签名',
        PORTAL_MULTISIG_BTN_2: '编辑已有协议',
        PORTAL_MULTISIG_BTN_3: '签署多重签名事务',
        PORTAL_HARVESTING_TITLE: '委托收获',
        PORTAL_HARVESTING_TEXT: '委托收获是可以实现远程在线“挖矿”而不必保持原账号开启的途径',
        PORTAL_HARVESTING_BTN_1: '管理远程账户',
        PORTAL_HARVESTING_BTN_2: '管理多重签名远程账户',
        PORTAL_CHANGELLY_TITLE: 'Changelly实时交易',
        PORTAL_CHANGELLY_TEXT: '使用Changelly服务，以当前最优定价实时交易XEM!',
        PORTAL_CHANGELLY_BTN: '购买XEM',
        PORTAL_NS_TITLE: '命名空间和子空间',
        PORTAL_NS_TEXT: '命名空间是存储马赛克的域名，每个命名空间在区块链中唯一，可在多层子命名空间上定义和认证马赛克。',
        PORTAL_NS_BTN: '创建命名空间',
        PORTAL_MOSAIC_TITLE: '马赛克',
        PORTAL_MOSAIC_TEXT: 'NEM马赛克是具备丰富属性和功能的智能资产。如需创建马赛克，必须为账户置备根命名空间。',
        PORTAL_MOSAIC_BTN_1: '创建马赛克',
        PORTAL_MOSAIC_BTN_2: '编辑马赛克',
        PORTAL_APOSTILLE_TITLE: 'Apostille',
        PORTAL_APOSTILLE_TEXT: '使用NEM Apostille服务创建区块链公证时间戳,跟踪和审计文件认证状态。',
        PORTAL_APOSTILLE_BTN_1: '创建',
        PORTAL_APOSTILLE_BTN_2: '审计',
        PORTAL_ADDRESS_BOOK_TEXT: ' 将标签分配给地址以轻松跟踪联系人.',
        PORTAL_ADDRESS_BOOK_BTN: '地址簿管理',
        PORTAL_INVOICE_TEXT: '创建账单以通过QR码共享',

        // ADDRESS BOOK MODULE
        ADDRESS_BOOK_TITLE: '地址簿”',
        ADDRESS_BOOK_LIST: '联系人',
        ADDRESS_BOOK_NAVIGATION: '导航',
        ADDRESS_BOOK_NEW: '新联系人',
        ADDRESS_BOOK_EDIT: '修改联系人',
        ADDRESS_BOOK_REMOVE: '删除联系人',
        ADDRESS_BOOK_NEW_BTN: '添加',
        ADDRESS_BOOK_EDIT_BTN: '保存',
        ADDRESS_BOOK_REMOVE_BTN: '删除',
        ADDRESS_BOOK_EXPORT_BTN: '导出地址簿',
        ADDRESS_BOOK_IMPORT_BTN: '导入地址簿',
        ADDRESS_BOOK_CONTACT_LABEL: '标签',
        ADDRESS_BOOK_ACCOUNT_ADDRESS: '帐户地址',
        ADDRESS_BOOK_ACTIONS: '行动',
        ADDRESS_BOOK_CONFIRM_DELETE: '确认从地址簿中删除联系人',

        // EXPLORER MODULE NAV
        EXPLORER_NAV_HOME: '主页',
        EXPLORER_NAV_NSM: '命名空间和马赛克',
        EXPLORER_NAV_APOSTILLES: 'Apostilles',

        // EXPLORER HOME MODULE
        EXPLORER_HOME_TITLE: '浏览 - 主页',
        EXPLORER_HOME_NS: '您的命名空间',
        EXPLORER_HOME_MOSAICS: '您的马赛克',
        EXPLORER_HOME_NS_MULTISIG: '多重签名账户所属命名空间',
        EXPLORER_HOME_MOSAICS_LEVY: '征费马赛克',

        // EXPLORER NAMESPACES AND MOSAICS
        EXPLORER_NS_MOS_TITLE: '浏览器 - 名称和马赛克空间',
        EXPLORER_NS_MOS_SELECT_MOS: '所选马赛克的细节',
        EXPLORER_NS_MOS_SEARCH: '搜索命名空间',

        // EXPLORER APOSTILLES MODULE
        EXPLORER_APOSTILLES_TITLE: '浏览 - 公证',
        EXPLORER_APOSTILLES_YOURS: '您的公证',
        EXPLORER_APOSTILLES_PUBLIC: '公有池',
        EXPLORER_APOSTILLES_NO_NTY: '未加载nty文件，请点击这里检查并导入。',

        // ACCOUNT EXPLORER
        ACCOUNTS_EXPLORER_TITLE: '浏览器 - 帐号',
        ACCOUNTS_EXPLORER_SEARCH: '搜索',

        // APOSTILLE HISTORY MODULE
        APOSTILLE_HISTORY_TITLE: 'Apostille 历史',
        APOSTILLE_HISTORY_BTN_TRANSFER: '转让/分割财产',
        APOSTILLE_HISTORY_BACKUP: '公证数据备份',
        APOSTILLE_HISTORY_PURGE: '清理公证资料',

        // CREATE APOSTILLE MODULE
        APOSTILLE_CREATE_TITLE: '创建Apostille',
        APOSTILLE_CREATE_HELP: '想知道更多关于 apostille?',
        APOSTILLE_TRANSACTION_NAME: '公证事务',
        APOSTILLE_TRANSACTION_MULTISIG_NAME: '多重签名公证事务',
        APOSTILLE_KEEP_PRIVATE: '需保密',
        APOSTILLE_USE_DEDICATED: '使用专一账户',
        APOSTILLE_FILES_TO_NOTARIZE: '需要公证的文件',
        APOSTILLE_REJECTED: '拒绝',
        APOSTILLE_FILE_HASH: '文件hash',
        APOSTILLE_PRIVATE: '私有',
        APOSTILLE_FILENAME: '文件名',
        APOSTILLE_NAME_TOO_LONG: '文件名过长，最多允许40个字符。',
        APOSTILLE_MAX_NUMBER: '最大的一批公证文件数为25',
        APOSTILLE_INFORMATION_TITLE: '创建 Apostille',
        APOSTILLE_INFORMATION_1: '每个文件的上传均以在左栏的选项为准自动处理。您可以添加文件，变更类型或添加其他属性。您也可以切换至多重签名标签页添加更多文件.',
        APOSTILLE_INFORMATION_2: '"<b>保密机制</b>" 您文件的hash都会被您的私钥加密，并发送至一个分层账户。以这种方式，除了你以外的任何人都无法获取接受认证的信息或认证本身。',
        APOSTILLE_INFORMATION_3: '使用左窗格中安装的设置自动处理每个下载的文件.您可以添加新文件，更改设置，然后使用不同参数添加更多文件.您也可以切换到多重签名选项卡并添加更多文件.',
        APOSTILLE_INFORMATION_4: '如果需要两方或多方核准的功能,公证可存放于一个具备n-of-n 多重签名合约的账户中.',
        APOSTILLE_INFORMATION_5: '对于选择了“私人，传输和更新”选项的多重签名合同中的帐户，签名发起人的私钥用于对哈希进行签名并创建分层账户, 而不是多重签名的母账户.',
        APOSTILLE_INFORMATION_6: '分层账户是一个特殊帐户，由文件名称的哈希创建，然后使用您的私钥签名.在此过程中创建的哈希用于创建第二个私钥. 该私钥在文件的块中标记; 此技术属区块链应用创新，仅在Apostille中存在. ',
        APOSTILLE_INFORMATION_7: '特殊的分层帐户允许您存储文件的原始哈希并将其更新到特殊帐户.如果选择<b>公共<b />，交易将转到公共账户（默认）.',
        APOSTILLE_INFORMATION_8: '交易完成后，下载档案. 存档包含您的签名文件，此文件包含Apostille证书以及新的或更新的* .nty文件，文件名中存在NEM线程中跟踪您的时间戳记.',
        APOSTILLE_NO_NTY: '没有加载nty文件，请点击这里导入或自动生成。',
        APOSTILLE_IMPORT_FILES: '导入文件',
        APOSTILLE_CREATE_TEXT: '创建字符文档',
        APOSTILLE_ENTER_TEXT: '输入需要公证的信息',
        APOSTILLE_DOCUMENT_TITLE: '文件名',
        APOSTILLE_DROPBOX_MESSAGE: '选择文件之前，请输入您的密码和所需的标签',
        APOSTILLE_DROPBOX_MESSAGE_2: '选择文件之前，请输入您的密码',

        // AUDIT APOSTILLE MODULE
        APOSTILLE_AUDIT_TITLE: '审计公证',
        APOSTILLE_AUDIT_CHOOSE_NODE: '选择节点',
        APOSTILLE_AUDIT_CHOOSE_NODE_NOTE: '只有部分节点可以查阅所有的事务历史(NIS中默认关闭这一选项)。', //
        APOSTILLE_AUDIT_WRONG_FORMAT: '这个文件不符Apostille认证格式!',
        APOSTILLE_AUDIT_FAIL_NO_PUBLIC_KEY: '认证失败，所有者没有公钥。',
        APOSTILLE_AUDIT_SUCCESS: '文件认证成功！',
        APOSTILLE_AUDIT_FAIL: '认证失败！',
        APOSTILLE_AUDIT_WAITING: '公证事务正等待确认！',
        APOSTILLE_AUDIT_NOT_FOUND: '未发现事务，请查验它是否正在等待确认，否则这项公证不存在。',
        APOSTILLE_AUDIT_ERROR_UNCONFIRMED: '获取未确认数据时错误发生，事务不存在。',
        APOSTILLE_AUDIT_ERROR_SIGNER: '获取签署者信息发生错误',
        APOSTILLE_AUDIT_ERROR_SIGNATURE: '确认错误，签名确认中发生故障！',
        APOSTILLE_AUDIT_INFORMATION_1: '待审计文件必须以<b>Apostille格式</b>存在',
        APOSTILLE_AUDIT_INFORMATION_2: '您可通过文件名确认文件：',
        //APOSTILLE_AUDIT_NON_SIGNED: '未签名范例:',
        //APOSTILLE_AUDIT_SIGNED: '已签名范例:',
        APOSTILLE_AUDIT_FILES: '审核文件',
        APOSTILLE_AUDIT_FORMAT_EXAMPLE: 'Apostille 格式示例',
        APOSTILLE_AUDIT_REMOVE_RECORDS: '本地删除记录',

        // APOSTILLE MESSAGE MODULE
        APOSTILLE_MESSAGE_TITLE: '发送消息给公证账户',
        APOSTILLE_MESSAGE_NS_BRAND: '在品牌中使用我的命名空间',
        APOSTILLE_MESSAGE_ADD_MOSAIC: '添加马赛克',
        APOSTILLE_NTY_ACCOUNT: '公证帐户',
        APOSTILLE_REQUEST_MESSAGE: '请求消息',
        APOSTILLE_CREATE_MESSAGE_REQUEST: '创建消息请求',

        // TRANSFER APOSTILLE OWNLERSHIP MODULE
        APOSTILLE_TRANSFER_TITLE: '转让或分离所apostille有权 ',

        // UPADTE APOSTILLE MODULE
        APOSTILLE_UPDATE_TITLE: '更新apostille',

        // ERROR ALERTS
        ALERT_MISSING_FORM_DATA: '请完整填写表格！',
        ALERT_ERROR_WALLET_DOWNLOAD: '无法下载钱包，钱包不存在！',
        ALERT_PASSWORDS_NOT_MATCHING: '您提供的密码和密钥串不匹配！',
        ALERT_INVALID_KEY_FOR_ADDR: '您提供的私钥与地址不匹配！',
        ALERT_NO_WALLET_LOADED: '您无法在未登录钱包状态下访问仪表盘',
        ALERT_WALLET_NAME_EXISTS: '同名钱包已存在！',
        ALERT_INVALID_WALLET_FILE: '您导入的文件并非钱包文件！',
        ALERT_NO_NODE_SET: '请确认并输入合规节点名！',
        ALERT_INVALID_CUSTOM_NODE: '您的自定义节点名不合规！',
        ALERT_INVALID_WEBSOCKET_PORT: '自定义节点的端口不合规！',
        ALERT_MIJIN_DISABLED: '猕迅网络当前未开放服务，请选择其他网络！',
        ALERT_GET_NS_BY_ID_ERROR: '获取命名空间信息错误，原因： ',
        ALERT_GET_ACCOUNT_DATA_ERROR: '获取账户信息错误，原因：',
        ALERT_ERROR_OCCURRED: '错误发生！ ',
        ALERT_INVALID_ADDR_FOR_NETWORK: '地址与本网规范不符',
        ALERT_INVALID_PASSWORD: '您输入的密码不正确！',
        ALERT_COSIG_ALREADY_IN_LIST: '共签人在列表中已存在！',
        ALERT_COSIGNATORY_HAS_NO_PUBLIC: '共签人账户需要在加入前已发送至少1个事务以获取私钥！',
        ALERT_MULTISIG_HAS_NO_PUBLIC: '多重签名账户需要在加入前已发送至少1个事务以获取私钥！',
        ALERT_COSIG_CANNOT_BE_MULTISIG: '您所选择的带转换账户是其他多重签名账户的共签人，这样的转换无法进行。',
        ALERT_NO_NS_OWNED: '账户不拥有这个命名空间，请重新创建或使用别的账户执行.',
        ALERT_UNLOCKED_INFO_ERROR: '获取解锁信息错误',
        ALERT_LOCK_ERROR: '锁定账户错误，原因: ',
        ALERT_UNLOCK_ERROR: '解锁账户错误，原因: ',
        ALERT_SUPERNODES_ERROR: '获取超级节点数据错误！',
        ALERT_INVALID_NTY_FILE: '您所提供的文件不是合规的nty文件！',
        ALERT_CREATE_WALLET_FAILED: '创建钱包失败，原因: ',
        ALERT_DERIVATION_FROM_SEED_FAILED: '从种子获取账户失败，原因: ',
        ALERT_BIP32_GENERATION_FAILED: '生成bip32数据失败，原因：',
        ALERT_NO_WALLET_DATA: '错误，空白的钱包数据！',
        ALERT_CANNOT_LOGIN_WITHOU_WALLET: '错误，无法在无钱包状态下登录！',
        ALERT_NO_WALLET_TO_SET: '错误，无法设置当前钱包为空白！',
        ALERT_INVALID_WALLET_INDEX: '错误，所选账户索引不正确！',
        ALERT_NO_CURRENT_WALLET: '错误，当前钱包不存在时无法设置钱包账户！',
        ALERT_ALREADY_MULTISIG: '所选账户已经是多重签名账户！',
        ALERT_INVALID_MODIFICATION_ARRAY: '一个多重签名账户不能作为自身的共签人，请检查并更换！',
        ALERT_GET_MARKET_INFO_ERROR: '获取市场信息失败！',
        ALERT_MULTISIG_CANNOT_BE_COSIG: '多重签名账户无法设为共同签署人！',
        ALERT_PURGE_CANCELLED: '清理已取消！',
        ALERT_MAINNET_DISABLED: '当前版本禁止主网络使用',
        ALERT_EMPTY_DECODED_MSG: '错误，无解密信息！',
        ALERT_INVALID_NS_NAME: '命名空间名不合规！',
        ALERT_INVALID_MOSAIC_NAME: '马赛克名不合规！',
        ALERT_MOSAIC_DESCRIPTION: '马赛克描述不合规！',
        //ALERT_GET_INCOMING_TXES_ERROR: '接收事务错误，请检查网络或更换节点后再次尝试',
        ALERT_GET_INCOMING_TXES_ERROR: '检索传入事务时发生错误，原因是: ',
        ALERT_GET_MOSAICS_DEFINITIONS_ERROR: '获取特定马赛克出错，原因: ',
        ALERT_GET_SUB_NS_ERROR: '获取某个子空间时出错，原因: ',
        ALERT_GET_MOSAICS_ERROR: '获取马赛克错误，原因: ',
        ALERT_GET_TRANSACTIONS_ERROR: '错误获取交易，原因: ',
        ALERT_INVALID_ADDRESS_BOOK_FILE: '该文件不是 *.adb格式 !',
        ALERT_INVALID_ADDRESS: '指定的地址无效 !',
        ALERT_INVALID_AMOUNT: '指定的金额无效 !',
        ALERT_INVALID_PRIVATE_KEY: '私人密钥无效 !',
        ALERT_FILE_SIZE_ERROR: ' 太大，最大大小为100 MB',
        ALERT_MESSAGE_DECODE_KEY_ERROR: '解密邮件时出错，因为该帐户在网络上没有可见的公钥',
        ALERT_FETCH_TIME_SYNC_ERROR: '检索网络时间时发生错误 !',
        ALERT_MULTISIG_MIN_SIGNATURE: '多重签名账户至少需要一个最小签名',
        ALERT_BTC_MARKET_ERROR: '尝试获取比特币价格时出错',
        ALERT_COSIG_REMOVAL_LIMIT: '一次只能有一个共享资源被删除',
        ALERT_MULTISIG_MIN_SIGNATURE_INVALID: '最小签名无效',
        ALERT_INSUFFICIENT_BALANCE: '操作平衡不够',
        ALERT_VOTING_ERROR: '投票无效',
        ALERT_BRAIN_PASSWORD_TOO_SHORT: '密码短语必须至少包含40个字符!',
        ALERT_NODE_SEEMS_OFFLINE: '节点似乎离线，请选择另一个节点',
        ALERT_WEAK_PASSPHRASE: '密码的安全分数必须至少为3',
        ALERT_BRAIN_WALLET_UPGRADE: '你的大脑钱包似乎很脆弱 ! 所有脑袋必须使用至少40个字符的密码.<br>我们建议您从注册页面创建一个新钱包，并将资金转入其中.<br>更多信息 <a href="https://forum.nem.io/t/2791" target="_blank"><u>here</u></a>.',
        ALERT_RECIPIENT_PUBLIC_KEY: '收件人没有公开密钥对网络可见的',
        ALERT_ENCRYPT_MULTISIG: '无法通过多会话帐户发送加密邮件',
        ALERT_EXCHANGE_NEEDS_MESSAGE: '收件人是交换钱包，因此它需要一条消息才能正确记入您的帐户，请仔细阅读交换存款说明 !',
        ALERT_ACCOUNT_ALREADY_IN_ADDRESS_BOOK: '联系人已经存在于地址簿中!',
        ALERT_MAX_MOSAIC_SUPPLY: '最大马赛克供应量为 9\'000\'000\'000',
        ALERT_GET_MOSAIC_SUPPLY_ERROR: '获取马赛克供应时出错，原因: ',
        ALERT_ENCRYPTED_MSG_OFFLINE: '在离线交易中未启用加密消息',

        // SUCCESS ALERTS
        ALERT_CREATE_WALLET_SUCCESS: '钱包成功创建和加载！',
        ALERT_SUCCESS_PURGE: '本地存储成功清理!',
        ALERT_SUCCESS_LOGOUT: '退出登录成功！',
        ALERT_LOAD_WALLET_SUCCESS: '钱包加载成功！',
        ALERT_TRANSACTION_SUCCESS: '事务发送成功！',
        ALERT_GENERATE_ACCOUNT_SUCCESS: '账户创建成功，请勿遗忘下载您创建的钱包文件 ！',
        ALERT_UPGRADE_SUCCESS: '钱包升级成功！',
        ALERT_SIGNATURE_SUCCESS: '事务已成功签署！',
        ALERT_NTY_FILE_SUCCESS: '成功加载nty文件！',
        ALERT_INCOMING_TX_FROM: '接收事务，来源',
        ALERT_ADDRESS_BOOK_FILE_SUCCESS: '地址簿已成功导入 !',
        ALERT_VOTING_SUCCESS: '语音消息发送成功',
        ALERT_POLL_CREATION_SUCCESS: '投票成功创建',
        ALERT_COPY_SIGNED_TX_SUCCESS: '签名的交易已复制 !',

        // CONVERT ACCOUNT TO MULTISIG
        AGGREGATE_MODIFICATION_TITLE: '变更账户至多重签名',
        AGGREGATE_MODIFICATION_NAME: '共有账户变更',
        AGGREGATE_MODIFICATION_MULTISIG_NAME: '多重签名账户变更事务',
        AGGREGATE_ACCOUNT_SELECT_TITLE: '可转换账户',
        AGGREGATE_ACCOUNT_SELECT: '选择一个待转换账户',
        AGGREGATE_CUSTOM_ACCOUNT: '使用自定义账户',
        AGGREGATE_ACCOUNT_TO_CONVERT_PRIVATE_TITLE: '私人账户密钥',
        AGGREGATE_ACCOUNT_TO_CONVERT: '待转换账户的地址',
        AGGREGATE_ACCOUNT_TO_CONVERT_PRIVATE: '待转换账户的私钥',
        AGGREGATE_ADD_PLACEHOLDER: '待添加的共签人账户或别名',
        AGGREGATE_ADD_BTN_TITLE: '添加共签人',
        AGGREGATE_MIN_SIGNATURES: '所需最小签名数量',
        AGGREGATE_MIN_SIGNATURES_PLACEHOLDER: '通过事务必须的最小签名数量',
        AGGREGATE_MODIFICATION_LIST: '变更清单',
        AGGREGATE_COSIG_LIST: '签署方的地址清单',
        AGGREGATE_MODIFICATION_EDIT_TITLE: '编辑多重签名协议',
        AGGREGATE_MODIFICATION_EDIT_SELECT_TITLE: '帐号进行编辑',
        AGGREGATE_MODIFICATION_EDIT_SELECT: '选择待编辑的账户',
        AGGREGATE_ADD_REMOVE_TITLE: '添加/删除签名',
        AGGREGATE_ADD_REMOVE_PLACEHOLDER: '带变更的共签人账户地址，或别名',
        AGGREGATE_MODIFICATION_RELATIVE_CHANGE: '最小签名数量变更',
        AGGREGATE_MODIFICATION_RELATIVE_CHANGE_PLACEHOLDER: '最小签名数量变更(自动计算）',
        AGGREGATE_SELECTED_ACCOUNT_INFO: '已选账户信息',
        AGGREGATE_MIN_SIGNATURES: '最少签名数',
        AGGREGATE_SELECT_WALLET_ACCOUNT: '使用您当前的钱包帐户',
        AGGREGATE_ADD_COSIG: '添加交易对手',
        AGGREGATE_REMOVE_COSIG: '删除交易对手',

        // SIGN MULTISIGNATURE TRANSACTIONS
        SIGN_MULTISIG_TRANSACTIONS_TITLE: '签署多重签名交易',

        // LOGIN MODULE
        LOGIN_MEMBER_TITLE: '进入钱包',
        LOGIN_UPGRADE_TITLE: '钱包需要升级',
        LOGIN_UPGRADE_MESSAGE: '您选择的钱包需要升级。这将创建一个子公钥添加至您的主账户。升级成功后将自动下载升级后的钱包，请<b><u>务必</u></b>下载和妥善保存！',
        LOGIN_UPGRADE_BUTTON: '升级钱包',
        LOGIN_IMPORT_BUTTON: '导入钱包',
        LOGIN_SELECT_WALLET_YOURS: '选择钱包',
        LOGIN_SELECT_WALLET: '从本地存储选择钱包',
        LOGIN_LOGIN_BUTTON: '登录',
        LOGIN_NOTE: '没有钱包？ 导入一个或 <a href="#!/signup">注册</a>.',

        // SIGNUP MODULE
        SIGNUP_TITLE: '创建一个新的钱包',
        SIGNUP_SELECT_WALLET_TYPE: '选择一种类型的钱包来创建',
        SIGNUP_SELECT_WALLET_TYPE_STAND_BY: '将光标放在钱包类型上以显示信息.',
        SIGNUP_CREATE_WALLET_TITLE: '简单钱包',
        SIGNUP_CREATE_WALLET_INFO: '简单的钱包包含一个随机生成的主私钥.',
        SIGNUP_PRIVATE_KEY_WALLET_TITLE: '私钥钱包',
        SIGNUP_PRIVATE_KEY_WALLET_INFO: '私钥钱包包含要导入的主私钥.',
        SIGNUP_BRAIN_WALLET_TITLE: '脑钱包',
        SIGNUP_BRAIN_WALLET_INFO: '脑钱包包含一个由密码生成的主密钥. 这允许仅通过知道确切的密码来检索钱包.',
        SIGNUP_CREATE_WALLET_BUTTON: '创建简单钱包',
        SIGNUP_PRIVATE_KEY_WALLET_BUTTON: '创建私钥钱包',
        SIGNUP_BRAIN_WALLET_BUTTON: '创建脑钱包',
        SIGNUP_CREATE_WALLET_WARNING: '请参阅获知客户端生成密钥的<a href="https://www.w3.org/TR/2014/WD-WebCryptoAPI-20140325/#RandomSource-interface" rel="nofollow" target="_blank">风险</a>。',
        SIGNUP_NETWORK_SELECT: '选择网络', //
        SIGNUP_NETWORK_MAINNET: 'Mainnet 是 <b> <u>真正的</ u> </ b> NEM网络. 地址以\'N \'开头.',
        SIGNUP_NETWORK_TESTNET: 'Testnet 是 <b><u>实验</u></b> 网络. 地址以 \'T\'开头.',
        SIGNUP_NETWORK_MIJIN: 'Mijin是NEM的私人版本. 地址以 \'M\'开头.',
        SIGNUP_BRAIN_WALLET_WARNING: '请阅读脑钱包的<a href="https://en.bitcoin.it/wiki/Brainwallet" rel="nofollow" target="_blank">风险</a>。脑钱包只使用hash处理的单一密码作为私钥，长期或不当使用会导致失窃。使用中选择一个安全的密码至关重要。 请遵从<a href="https://xkcd.com/936/" rel="nofollow" target="_blank">XKCD #936</a>国际密码安全标准。',
        SIGNUP_PRIVATE_KEY_WALLET_WARNING: '脑钱包只使用hash处理的单一密码作为私钥，长期或不当使用会导致失窃。使用中选择一个安全的密码至关重要。',
        SIGNUP_CREATE_START_WARNING: '请仔细按照每一步!',
        SIGNUP_CREATE_START_CONNECTION_WARNING: '建议您在创建钱包并备份数据时断开与互联网的连接.',
        SIGNUP_CREATE_READY_BTN: '准备',
        SIGNUP_CREATE_ENTER_NAME: '输入钱包名称',
        SIGNUP_CREATE_ENTER_PASSWORD: '输入密码',
        SIGNUP_CREATE_ENTER_PASSPHRASE: '输入代码短语',
        SIGNUP_CREATE_CONFIRM_PASSWORD: '确认以上密码',
        SIGNUP_CREATE_CONFIRM_PASSPHRASE: '确认以上代码短语',
        SIGNUP_CREATE_ENTER_PRIVATE_KEY: '输入一个私钥',
        SIGNUP_CREATE_ADDRESS_FROM_PK: '与上面的键相对应的地址',
        SIGNUP_CREATE_WALLET_ADD_ENTROPY_INFO: '我们现在要生成您的主私钥. <b>请点击开始并移动光标以添加更多熵.</b>',
        SIGNUP_COMMON_WALLET_WARNING_TITLE: '帐户安全协议',
        SIGNUP_COMMON_WALLET_WARNING_1: '钱包在 </ u> </ b>浏览器本地存储中<b> <u>暂时存储! 浏览器可以配置（例如通过附件）以便有时清除本地存储. 这将导致数据丢失，并且不能轻易撤销. 在我们的情况下，您的钱包将会消失，非常重要确保您有所有需要的信息来恢复你的帐户.',
        SIGNUP_COMMON_WALLET_WARNING_2: '请点击下面下载您的钱包.   如果您的浏览器的本地存储被删除，这就是 <b><i>.wlt</i></b> 用作备份并导入的文件.',
        SIGNUP_COMMON_WALLET_WARNING_3: '如果你没有得到备份 <b><i>.wlt</i></b> 文件, 点击下面的按钮显示原始钱包数据并手动创建文件:',
        SIGNUP_COMMON_WALLET_WARNING_4: '即使你有一个钱包文件，是<b> <u>强制性的</ u> </ b>来备份你的账户的私钥，点击下面的按钮来显示它:',
        SIGNUP_COMMON_WALLET_WARNING_5: '您有责任始终确保您已备份私钥, 在将任何资金发送到您的帐户之前.',
        SIGNUP_COMMON_WALLET_WARNING_6: '每个钱包都有一个<b> <u>主要私钥</ u> </ b>（您在上面显示），用于创建确定性辅助帐户（BIP32）. 此功能需要使用<b> <u>相同的密码</ u> </ b>，否则它将为同一主私钥生成不同的辅助帐户. 备份数据时，请勿忘记<b> <u>记下您的密码</ u> </ b>',
        SIGNUP_COMMON_WALLET_WARNING_BTN_1: '显示原始钱包文件',
        SIGNUP_COMMON_WALLET_WARNING_BTN_1_INFO: '要制作钱包文件，请创建空文本文件并将上面的base 64密钥放入其中. 另存为 <b><i>您的钱包名称.wlt</i></b>.',
        SIGNUP_COMMON_WALLET_WARNING_BTN_2: '显示私钥',
        SIGNUP_COMMON_WALLET_WARNING_BTN_2_INFO: '为了备份私钥，打印或保存在文本文件中. 强烈建议将私钥存储在安全和离线的位置.',
        SIGNUP_COMMON_WALLET_WARNING_FOOTER: '通过点击下方，您同意您已阅读并理解上述警告.',
        SIGNUP_COMMON_WALLET_WARNING_CONFIRM_1: '我有我的钱包文件',
        SIGNUP_COMMON_WALLET_WARNING_CONFIRM_2: '我有我的私钥',
        SIGNUP_COMMON_WALLET_WARNING_CONFIRM_3: '我同意',
        SIGNUP_COMMON_WALLET_WARNING_UNDERSTOOD: '了解',
        SIGNUP_COMMON_WALLET_WARNING_DOWNLOAD: '下载钱包',
        SIGNUP_ESTIMATED_PASSPHRASE_STRENGTH: '预计的密码强度',
        SIGNUP_ESTIMATED_GUESS_TIMES: '估计的猜测时间',

        // FAQ MODULE
        FAQ_TITLE: '疑难解答',
        FAQ_QUESTION_1: '纳米钱包如何工作？',
        FAQ_ANSWER_1: '纳米钱包使用最新的加密库及ES6和AngularJS开发而成。它是个完全的客户端程序，不会向网络发送任何敏感信息。包括创建私钥，签署事务等行为均发生在您的浏览器内。',
        FAQ_QUESTION_2: '它是免费提供的吗？',
        FAQ_ANSWER_2: '所有的操作都在客户端完成，只有您有权掌控您的账号，纳米钱包不会以任何形式收取费用。',
        FAQ_QUESTION_3: '我为何已经拥有了马赛克？',
        FAQ_ANSWER_3: '每个用户都拥有nem作为命名空间，以及xem作为马赛克。数字货币XEM也是马赛克的一种，即使您的余额为0，您仍拥有"nem:xem"命名空间。',
        FAQ_QUESTION_4: '未来计划?',
        FAQ_ANSWER_4: '当前的计划是集成所有的NEM客户端的功能，并将提供接口使得将来的社区开发项目能够在该钱包中使用。',
        FAQ_QUESTION_5: '我可以免费获得XEM吗？',
        FAQ_ANSWER_5: 'NEM水龙站目前关闭，但您可以在论坛中接受赏金项目以获取大量XEM',
        FAQ_QUESTION_6: '如何获取关于NEM的更多信息？',
        FAQ_ANSWER_6_FORUM: '官方论坛',
        FAQ_ANSWER_6_WEBSITE: '官方网站',
        FAQ_ANSWER_6_BTT: '官方BTT帖子',
        FAQ_QUESTION_7: '仪表板上没有显示任何内容',
        FAQ_ANSWER_7: '请您务必检查顶部导航栏中的节点圆. <br> 红色圆圈表示与节点的连接失败. <br> 点击“节点”并从下拉列表中选择另一个或使用自定义节点。. <br> <a href="https://supernodes.nem.io" target="_blank">Supernodes.nem.io</a> 有很多可以使用的节点.</a>',
        FAQ_QUESTION_8: '签署人不会看到签署交易。',
        FAQ_ANSWER_8: '在这种情况下，请转到“服务”, 寻找“多重签名和多用户帐户”并点击“签署多重交易”.',
        FAQ_QUESTION_9: '什么是最好的安全措施 ?',
        FAQ_ANSWER_9: '强烈建议始终将私钥存储在纸上.<br> 您可以打印它们并将它们归档到安全的地方. <br><br> 关于钱包文件，您应该始终在不同的寒冷地点保存多份副本，例如USB棒. <br> 密码必须始终独特而复杂，因此，请务必先写下密码. <br><br> 当您想要检查您的钱包或实现操作时：<br> - 插入USB棒 - 将钱包导入纳米<br> - 拔下USB棒.<br><br> 您的钱包副本会存储在浏览器本地存储器中，以备您需要.<br> 完成后，使用页脚右侧的清除按钮注销并清除本地存储中的钱包.',
        FAQ_QUESTION_10: '在哪里可以找到关于我的账户信息（地址等） ?',
        FAQ_ANSWER_10: '如果您查看顶部导航栏，您会看到<b> <i>“帐号”</ b> </ i>之间<b> </ i>Node</ b> </ i>和 <B> <I>“语言”</ b> </ I>. 在那里你可以找到你的地址，公钥，余额和其他重要数据.',
        FAQ_QUESTION_11: '我已将XEM存入交易所，但没有任何记入 ?',
        FAQ_ANSWER_11_1: '首先，您必须检查您的交易的哈希是否指向现有的交易，在 <a target="_blank" href="http://chain.nem.ninja">explorer</a> (请注意，浏览器落后几个块).',
        FAQ_ANSWER_11_2: '大多数交易所都要求提供身份证明信息以记入您的存款. 确保您已仔细遵守交换指示并添加了未加密的消息. ',
        FAQ_ANSWER_11_3: '即使您添加了一条消息，也可能发生交换可能无法处理您的存款，因为对面存在问题.',
        FAQ_ANSWER_11_4: '您必须联系交易所支持人员，说明情况并向他们提供交易的哈希.',
        FAQ_QUESTION_12: '如何检查我是否在分叉上 ?',
        FAQ_ANSWER_12_1: '点击 <b><i>"Node"</b></i>, 顶部导航栏中的，打开节点面板.',
        FAQ_ANSWER_12_2: '查看链条高度并将其与所示高度进行比较 <a target="_blank" href="http://bigalice3.nem.ninja:7890/chain/height">here</a>.',
        FAQ_ANSWER_12_3: '如果超过5个区块不同，那么你很可能在分叉.',
        FAQ_ANSWER_12_4: '要解决这个问题，只需从节点面板的下拉菜单中选择另一个节点，它就会将您的帐户恢复到真实网络上的最新状态.',

        // FORM RELATED
        FORM_PASSWORD_FIELD_PLACEHOLDER: '输入您的钱包密码',
        FORM_WALLET_NAME_FIELD_PLACEHOLDER: '钱包名',
        FORM_SIGNUP_PASSWORD_FIELD_PLACEHOLDER: '密码',
        FORM_PASSWORD: '密码',
        FORM_PASSWORD_CONFIRM: '确认密码',
        FORM_PASSPHRASE_CONFIRM: '确认密码',
        FORM_CONFIRM_PASSWORD_FIELD_PLACEHOLDER: '确认您的密码',
        FORM_PASSPHRASE_FIELD_PLACEHOLDER: '密钥串',
        FORM_CONFIRM_PASSPHRASE_FIELD_PLACEHOLDER: '确认您的密钥串',
        FORM_ADDRESS_FIELD_PLACEHOLDER: '账户地址',
        FORM_PRIVATE_KEY_FIELD_PLACEHOLDER: '私钥',
        FORM_SIDE_BTN_BALANCE: '余额',
        FORM_SIDE_BTN_PAY_TO: '被支付人',
        FORM_SIDE_BTN_TX_FEE: '事务费',
        FORM_SIDE_BTN_RENTAL_FEE: '租金',
        FORM_SIDE_BTN_LEVY_FEE: '征费',
        FORM_RECIPIENT_PLACEHOLDER: '接收地址或别名',
        FORM_INVOICE_RECIPIENT_PLACEHOLDER: '接收地址',
        FORM_SIDE_BTN_ALIAS_OF: '别名',
        FORM_MESSAGE_PLACEHOLDER: '信息',
        FORM_MOSAIC_NAME_PLACEHOLDER: '马赛克名',
        FORM_ADDRESS_ALIAS_PLACEHOLDER: '帐户地址或 @别名',
        FORM_BTN_GET_ALIAS: '获取别名地址',
        FORM_BTN_OPEN_ADB: '打开地址簿',
        FORM_SELECT_NAMESPACE: '选择一个命名空间',

        // VOTING MODULE
        PORTAL_VOTING_TITLE: '表决',
        PORTAL_VOTING_TEXT: '创建投票并进行投票',
        PORTAL_VOTING_BTN1: '见民意调查',
        PORTAL_VOTING_BTN2: '创建意调查',
        FORM_TITLE_FIELD_PLACEHOLDER: '标题',
        FORM_DESCRIPTION_FIELD_PLACEHOLDER: '在这里写下你的描述',
        FORM_OPTION_FIELD_PLACEHOLDER: '写选项',
        FORM_WHITELIST_FIELD_PLACEHOLDER: '帐户地址',
        FORM_SELECT_MULTISIG: '选择一个多重签名帐户',
        FORM_SELECT_CONTACT: '选择一个联系人',

        // CREATE OFFLINE TRANSACTION MODULE
        OFFLINE_TX_TITLE: '准备离线交易',
        OFFLINE_TX_NO_WALLET: '请从登录模块导入钱包以查看表单.',
        OFFLINE_TX_INFO_1: '确保在导入钱包并创建交易时断开互联网连接!',
        OFFLINE_TX_INFO_2: '由于需要连接才能从NEM节点获取马赛克和多重信息，因此只能创建简单的事务.',
        OFFLINE_TX_INFO_3: '点击左侧面板中的“创建”按钮后，下面您会找到签名的交易.',
        OFFLINE_TX_INFO_4: '已签名的交易是不可变的，并且只有在24小时的默认截止日期之前发布到网络才会生效.',
        OFFLINE_TX_SIGNED: '已签名的交易',
        OFFLINE_TX_RELEASE: '在发布模块中打开',

        // RELEASE OFFLINE TRANSACTION MODULE
        RELEASE_OFFLINE_TX_TITLE: '向网络发布交易',
        RELEASE_OFFLINE_TX_PARAMETERS: '交易参数',
        RELEASE_OFFLINE_TX_INFO_1: '要发布交易，您必须连接到互联网.',
        RELEASE_OFFLINE_TX_INFO_2: '确保您选择了正确的网络和工作节点，否则它将被拒绝.',
        RELEASE_OFFLINE_TX_INFO_3: '无法发送签名的交易两次. 一个签名的事务将总是生成相同的哈希，而两个事务不能具有相同的哈希.',
        RELEASE_OFFLINE_TX_INFO_4: '您可以安全地从任何计算机上发布签名的交易.',

        // INVOICE MODULE
        CREATE_INVOICE_TITLE: '创建账单',

        // IMPORT WALLET QRCODE
        IMPORT_WALLET_QRCODE_TITLE: 'Import wallet QR code',
        IMPORT_WALLET_QRCODE_INFORMATION: '支持导入钱包类型: NEM微信钱包, 苹果钱包, 安卓钱包．',
        IMPORT_WALLET_QRCODE_LOAD: 'Load wallet QR code',
        IMPORT_WALLET_QRCODE_SCAN: 'Scan',
        IMPORT_WALLET_QRCODE_STOP_SCAN: 'Stop scan'
    });

}

export default ChineseProvider;
