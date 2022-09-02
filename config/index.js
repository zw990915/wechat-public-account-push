export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxda2251269197c1c2",

    // 公众号APP_SECRET
    APP_SECRET: "e5ffb2020e26bd97acbd1a08fe96da42",

    // 模板消息id
    TEMPLATE_ID: "yRtOSLqGSdQg_Cpgml9uDhTkR1-a1CwmQ5kzFtbBqoY",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "Ov7BRcgqq5DXq9KgNkc8kM3QFFL9EuRSildWdMJT-N8",


    /**
     * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
     * [
     *   {name: '晨宝', id: "o-X1U6gXSdauDkp1IEZDYsp0dbD0"}, 
     *   {name: '女朋友1', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"},
     *   {name: '女朋友2', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"},
     *   {name: '女朋友3', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"},
     *   {name: '女朋友4', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"},
     *   {name: '女朋友5', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"},
     * ]
     */
    USERS: [
      {name: '晨宝', id: "o-X1U6gXSdauDkp1IEZDYsp0dbD0"}, 
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '自己',id: "o-X1U6gXSdauDkp1IEZDYsp0dbD0"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "安徽",
    // 所在城市
    CITY: "六安",

    /** 重要节日相关 */

    /**
     * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
     * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
     * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
     * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
     */
    FESTIVALS: [
      {"type": "生日", "name": "晨宝生日", "year": "1997", "date": "09-12"},
      {"type": "节日", "name": "相遇纪念日", "year": "2022", "date": "08-15"},
      {"type": "生日", "name": "朱威生日", "year": "1999", "date": "10-23"},
    ],

    /**
     * 限制重要节日的展示条目, 需要填写数字; 
     * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
     * 如果为0, 则默认展示全部
     */
    FESTIVALS_LIMIT: 3,

    /** 日期相关 */

    /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
      * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
      * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
      * */
    CUSTOMIZED_DATE_LIST: [
      // 在一起的日子
      {"keyword": "love_day", date: "2022-08-15"},
      // 结婚纪念日
      //{"keyword": "marry_day", date: "2020-01-04"},
      // 退伍日, 不用可以删掉
      //{"keyword": "ex_day", date: "2022-08-31"},
      // sakana日
      // {"keyword": "sakana_day", date: "2022-01-06"},
      // ... 
    ],

    /** 插槽 */

    /** 你可以在这里写超多的你想显示的内容了！
      * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
      * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
      * */
    SLOT_LIST: [
      // 这样配置的话，就会每次发送这句话
      {"keyword": "encourage_oneself", contents: "喜欢晨宝的每一天，"},
      // 这样配置的话，就会每次随机选一句话发送
      {"keyword": "lover_prattle", contents: [
        "只要你一直在我身边，其他东西不再重要",
        "爱，要么不开始，要么一辈子",
        "没什么特别的事，只想听听你的声音",
        "世界上最温暖的两个字是从你口中说出的晚安",
        "我的幸福，就是和你温暖的过一辈子",
        "在认识你之后，我才发现自己可以这样情愿的付出",
        "假如你是一棵仙人掌，我也愿意忍受所有的疼痛来抱着你",
        "遇见你，就好像捡到了100斤的运气",
        "爱上你，不是因为你给了我需要的东西，而是因为你给了我从未有过的感觉",
        "每天早上看到阳光就想见到你",
        "世上最浪漫和最自私的话就是：你是我一个人的",
        "我们彼此相爱着就是幸福，如此简单，如此难",
        "如果有人问我为什么爱你，我觉得我只能如此回答：因为是你，因为是我",
        "其实，我一直都在你身后，就差你一个回头",
        "如果有人问我为什么爱你，我觉得我只能如此回答：因为是你，因为是我",
        "也许是缘，但更多是怨，无所谓是缘是怨，今生相逢已让我珍惜拥有",
        "如果有人问我为什么爱你，我觉得我只能如此回答：因为是你，因为是我",
        "你是我晚上睡觉前最想聊天的人，我爱这种感觉",
        "其实我不敢想象，没有你，生活会怎样",
        "生命那么短，世界那么乱，我不想争吵，不想冷战，不愿和你有一秒遗憾",
        "所谓爱，就是当感觉、热情、浪漫统统拿掉之后，你仍然珍惜对方",
        "我爱你，不是说说而已",
        "像所有人认为的那样，你就是我整个世界",
        "我莫名奇妙的笑了，只因为想到了你",
        "如果你能解释为什么会喜欢一个人，那么这不是爱情，真正的爱情没有原因",
        "这是我的爱，收下吧，这是我的心，别打碎了，这是我的手，握住了",
        "一想到跟你说话，我会笑得跟白痴一样",
        "我不想做你生命的插曲，只想做你生命最完美的结局",
        "我想触动你的心，就像你触动了我的心那样",
        "你就像一碗汤，让我的心永远不会凉",
      ]},
    ],

    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
