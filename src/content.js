export const siteContent = {
  profile: {
    title: "AI 求职实验室",
    subtitle: "从 Python 后端到 AI 应用工程师的 8 周公开转型",
    intro:
      "这里记录我用两个月冲刺中级 AI 应用工程师的全过程。主线项目聚焦 AI 客服助手，学习方式是边学边做，用一个能上线的项目把 LLM、RAG、Agent 和工程化真正串起来。",
    badge: "Open Build · 2026"
  },
  identity: {
    role: "Python 后端开发者",
    target: "中级 AI 应用工程师",
    project: "AI 客服助手",
    method: "每日 4 小时，边学边做"
  },
  metrics: [
    { label: "准备周期", value: "8 周" },
    { label: "每日投入", value: "4 小时" },
    { label: "主项目", value: "AI 客服助手" },
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
      title: "我要补齐什么",
      items: ["OOP / asyncio / FastAPI", "Prompt / Structured Output", "RAG / Agent / LangGraph"]
    },
    {
      title: "我要产出什么",
      items: ["1 个主项目", "持续更新的学习博客", "可直接投递的简历素材"]
    },
    {
      title: "我怎么判断学会了",
      items: ["能讲清原理", "能独立写服务", "能解释选型和优化思路"]
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
      date: "2026-06-14",
      dayLabel: "Day 1",
      title: "Day 1｜把后端思维切到 AI 应用开发",
      status: "进行中",
      goal: "补 Python 的 OOP、异常、asyncio 基础，并完成一个纯 Python 版客服服务练习。",
      summary: "补 Python 基础，完成第一个纯 Python 客服服务练习。",
      tasks: [
        "阅读飞书资料里的 Python：类与对象、继承、异常、asyncio。",
        "阅读《大语言模型基础认知》，先理解 token、context、temperature、system prompt、embedding、RAG、Agent。",
        "完成 day1 小练习：实现 ChatRequest、InvalidMessageError、ChatService。",
        "写一段不超过 150 字的总结：AI 应用工程师和普通 Python 后端的区别。"
      ],
      deliverables: [
        "一个可运行的纯 Python 小练习目录",
        "对 LLM / RAG / Agent 的初步理解",
        "第一篇学习总结"
      ],
      reviewQuestions: [
        "为什么业务逻辑不应该全部写在 app.py 入口里？",
        "RAG 和 Prompt Engineering 的区别是什么？",
        "为什么客服场景里很多时候单靠 prompt 不够？"
      ],
      notes: [
        "先别急着钻底层原理，当前阶段重点是能把服务搭起来。",
        "今天只追求结构清晰，不追求回复像真实模型。"
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
