export const siteContent = {
  profile: {
    title: "AI 求职实验室",
    subtitle: "从 Python 后端到 AI 应用工程师的 8 周公开转型",
    intro:
      "这里记录我用两个月冲刺中级 AI 应用工程师的全过程。主线项目是 AI 叉车售后客服系统，用维修工单、设备手册知识库和 Agent 辅助诊断串起 LLM、RAG 与后端工程化。",
    badge: "Open Build · 2026"
  },
  identity: {
    role: "Python 后端开发者",
    target: "中级 AI 应用工程师",
    project: "AI 叉车售后客服系统",
    method: "每日 4 小时 · 稳中偏冲"
  },
  metrics: [
    { label: "准备周期", value: "8 周" },
    { label: "每日投入", value: "4 小时" },
    { label: "主项目", value: "叉车售后客服" },
    { label: "当前阶段", value: "Python / LLM 基础" }
  ],
  focusAreas: [
    {
      title: "应用工程",
      body: "以 Python、FastAPI、数据库和服务设计为骨架，把 AI 能力接进真实业务系统。"
    },
    {
      title: "知识库问答",
      body: "围绕客服场景学习 Embedding、向量检索、RAG 评测和回答质量优化。"
    },
    {
      title: "业务落地",
      body: "不是只做 Demo，而是做一个能展示多轮对话、意图识别和工具调用的 AI 客服助手。"
    }
  ],
  pillars: [
    {
      title: "60% 稳扎稳打",
      items: ["补 Python / Django 基础", "推进叉车客服主线", "形成可复用工程能力"]
    },
    {
      title: "30% 实战推进",
      items: ["每天写代码", "每天留下可验证产出", "持续积累求职作品"]
    },
    {
      title: "10% 轻度拔高",
      items: ["提前接触下一阶段", "加入面试表达", "根据前一天提交动态调整"]
    }
  ],
  roadmap: [
    {
      phase: "第 1-2 周",
      title: "补 Python 弱项，切到 AI 应用开发方式",
      focus: ["OOP", "异常", "asyncio", "FastAPI", "LLM API"]
    },
    {
      phase: "第 3-4 周",
      title: "做出客服知识库问答 MVP",
      focus: ["Embedding", "向量检索", "RAG", "LangChain", "评测基础"]
    },
    {
      phase: "第 5-6 周",
      title: "补 Agent 和业务流程编排",
      focus: ["LangGraph", "工具调用", "会话管理", "客服流程设计"]
    },
    {
      phase: "第 7 周",
      title: "补工程化和部署",
      focus: ["日志", "缓存", "错误处理", "Docker", "服务优化"]
    },
    {
      phase: "第 8 周",
      title: "进入求职冲刺",
      focus: ["简历", "项目表达", "面试题", "投递"]
    }
  ],
  library: [
    {
      tier: "优先学",
      items: [
        "Python",
        "大语言模型基础认知",
        "Prompt Engineering核心介绍",
        "RAG基础",
        "LangChain框架",
        "RAG进阶",
        "4Agent智能体",
        "3LangGraph框架"
      ]
    },
    {
      tier: "后面补",
      items: ["Advanced RAG", "RAG评估和RAG平台应用框架", "LlamaIndex框架 / 落地", "Dify / Coze"]
    },
    {
      tier: "先弱化",
      items: ["大语言模型底层原理解析", "MCP-模型上下文协议", "Java / 前端 / 分布式、中间件"]
    }
  ],
  entries: [
    {
      slug: "day-1",
      date: "2026-06-24",
      dayLabel: "Day 1",
      title: "Day 1｜Python 基础与纯 Python 客服服务",
      status: "进行中",
      goal: "在 4 小时内补生成器、迭代器与异常基础，完成两个代码练习，并建立叉车售后问题清单。",
      summary: "稳中偏冲的第一天：基础讲清、代码跑通、业务问题落纸。",
      tasks: [
        "第 1 小时：复习类和对象、异常处理、生成器、迭代器，重点讲清 yield 与 return。",
        "第 2 小时：实现 square_numbers(n)，逐个 yield 1~n 的平方并验证惰性执行。",
        "第 3 小时：拆分并跑通 ChatRequest、InvalidMessageError、ChatService。",
        "第 4 小时：整理 10 个叉车售后高频问题，并判断 AI chat service 应放在哪一层。"
      ],
      deliverables: [
        "生成器练习代码与运行结果",
        "可运行的纯 Python ChatService",
        "生成器、迭代器、自定义异常的个人理解",
        "10 个叉车售后高频问题",
        "AI chat service 分层判断与理由",
        "今天最卡的点"
      ],
      reviewQuestions: [
        "yield 和 return 的核心区别是什么？",
        "为什么生成器比一次性构造列表更节省内存？",
        "API、chat service 与模型 provider 应分别承担什么职责？"
      ],
      notes: [
        "任务控制在 4 小时内，代码产出优先，先完成再优化。",
        "明天是否进入 Django + 通义千问，将根据今天的代码和表达动态决定。"
      ],
      relatedLinks: [
        {
          label: "查看 Day 1 练习示例",
          href: "./exercise-day1.html",
          description: "包含目录结构、练习要求和代码骨架。"
        }
      ]
    }
  ],
  calendarNote:
    "后续每天先更新当天任务，完成后再把这一天的状态、实际产出、卡点和总结补进来。点击日期卡片即可切换查看，不需要一直下拉翻历史记录。"
};
