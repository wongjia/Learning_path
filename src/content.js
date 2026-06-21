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
    method: "公司 1 小时理论 + 回家 4 小时实践"
  },
  metrics: [
    { label: "准备周期", value: "8 周" },
    { label: "每日投入", value: "5 小时" },
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
      date: "2026-06-22",
      dayLabel: "Day 1",
      title: "Day 1｜Python 回炉与维修工单领域建模",
      status: "进行中",
      goal: "复习 Python 高级语法，完成维修工单状态模型，并读懂 DRF 与结构化日志的请求链路。",
      summary: "从 Python 领域模型出发，建立叉车售后系统第一条可验证的工程链路。",
      tasks: [
        "公司理论（60 分钟）：闭卷复述类与对象、装饰器、生成器、上下文管理器，制作 4 张概念卡。",
        "实践一（90 分钟）：实现 RepairOrder、WorkOrderStatus、InvalidStatusTransition，并补 3 个 pytest 测试。",
        "实践二（90 分钟）：追踪 Router → ViewSet → Serializer → Model → SQL，画出任务查询链路。",
        "实践三（60 分钟）：运行 Django 测试，通过 X-Request-ID 定位结构化日志并记录排错过程。"
      ],
      deliverables: [
        "4 张 Python 概念卡：定义、最小示例、叉车业务用途",
        "RepairOrder 代码、3 个测试及测试结果",
        "一张 DRF 请求链路图",
        "2 条结构化日志与一份排错记录"
      ],
      reviewQuestions: [
        "为什么状态流转规则应该放在领域模型或服务层，而不是 View 中？",
        "Router、ViewSet、Serializer、Model 各自承担什么职责？",
        "X-Request-ID 将来如何帮助排查 Agent 与 RAG 的跨服务问题？"
      ],
      notes: [
        "先独立完成，再对照提交案例；不要直接复制示例代码。",
        "Agent 后续只负责辅助诊断和生成草稿，工单最终提交仍由维修人员确认。"
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
