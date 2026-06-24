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
    { label: "当前阶段", value: "Python 恢复 / Django AI 接口设计" }
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
      status: "已复盘",
      goal: "在 4 小时内补生成器、迭代器与异常基础，完成两个代码练习，并建立叉车售后问题清单。",
      summary: "代码已经能写出来，但概念边界还比较模糊，适合继续稳中偏冲往 Django + AI 过渡。",
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
      assessment: {
        headline: "Day 1 教练测评",
        scores: [
          "Python基础：6/10",
          "概念准确度：4.5/10",
          "工程组织：6/10",
          "业务抽象：5.5/10",
          "学习状态：很好"
        ],
        corrections: [
          "生成器是特殊迭代器，通常由包含 yield 的函数创建；它按需产出值，而不是一次性返回全部结果。",
          "迭代器是实现逐个取值协议的对象，可以被 next() 连续取值；可迭代对象不一定就是迭代器。",
          "自定义异常更适合表达特定业务错误，便于调用方区分错误类型并给出清晰提示。",
          "square_numbers(n) 题目要求是 1~n，你的第一版写成了 0~n-1，说明做题时还要更仔细对齐题意。",
          "AI chat service 不只是放到 services：核心编排放 services，接口入口放 api/view，参数校验放 serializer，urls 暴露路由。"
        ]
      },
      notes: [
        "今天最真实的短板是 Python 语法手感丢了，尤其是 f-string、strip() 和基础 API 用法。",
        "这类恢复性短板不需要焦虑，通常 1 到 2 周能明显回来。",
        "Day 2 进入 Python 手感恢复 + Django 接 AI 前的准备。"
      ],
      relatedLinks: [
        {
          label: "查看 Day 1 练习示例",
          href: "./exercise-day1.html",
          description: "包含目录结构、练习要求和代码骨架。"
        }
      ]
    },
    {
      slug: "day-2",
      date: "2026-06-25",
      dayLabel: "Day 2",
      title: "Day 2｜Python 手感恢复与 Django AI Chat 接口设计",
      status: "当前任务",
      goal: "在 4 小时内补最够用的 Python 语法手感，理解 asyncio 的最小必需知识，并完成 Django AI chat 接口分层设计。",
      summary: "从纯 Python 练习过渡到 Django + 通义千问前夜，重点不是猛写功能，而是把接口结构和场景边界设计清楚。",
      tasks: [
        "第 1 小时：只补 f-string、strip()、split()、join()、dict.get()、enumerate()，并各写出最少一个小例子。",
        "第 2 小时：理解 asyncio 的最小必需知识，搞懂 async def、await 和协程为什么适合 I/O 场景。",
        "第 3 小时：设计 Django AI chat 接口，写出请求体、响应体，以及 service 草稿。",
        "第 4 小时：把叉车业务问题收束成更像 AI 客服会回答的 10 个问题，并整理出 3 个可落地的 AI 场景。"
      ],
      deliverables: [
        "5 个 Python 小例子",
        "对 async/await 的个人理解",
        "Django AI chat 请求体与响应体设计",
        "接口分层职责说明：api/view、serializer、service、provider、urls",
        "10 个更像 AI 客服会回答的问题",
        "3 个 AI 场景：FAQ 问答、工单填写引导、工单状态/流程解释助手",
        "加分题：scene 字段设计思路"
      ],
      reviewQuestions: [
        "为什么调用大模型接口通常更适合协程，而不是多进程？",
        "如果 chat service 未来既要支持 FAQ，又要支持 RAG 和工单流程引导，scene 字段应该怎么设计？",
        "接口的请求校验、业务编排和模型调用边界应该如何拆开？"
      ],
      notes: [
        "今天不急着写完整 Django 代码，先把结构和边界设计清楚。",
        "如果 Day 2 的表达和设计都顺畅，下一步就进入 Django + 通义千问真实接入。",
        "稳中偏冲：完成基础任务后再做 scene 设计这个小拔高题。"
      ]
    }
  ],
  calendarNote:
    "后续每天先更新当天任务，完成后再把这一天的状态、实际产出、卡点和总结补进来。点击日期卡片即可切换查看，不需要一直下拉翻历史记录。"
};
