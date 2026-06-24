import { siteContent } from "./content.js?v=20260625-day2";

const app = document.querySelector("#app");
const currentPage = document.body.dataset.page || "home";
let selectedEntrySlug = siteContent.entries.at(-1)?.slug ?? "";

function navLink(href, label, page) {
  const active = currentPage === page ? "active" : "";
  return `<a class="${active}" href="${href}">${label}</a>`;
}

function renderHeader() {
  return `
    <header class="site-header">
      <a class="brand" href="./index.html">
        <span class="brand-mark">AI</span>
        <span>${siteContent.profile.title}</span>
      </a>
      <nav class="site-nav">
        ${navLink("./roadmap.html", "路线", "roadmap")}
        ${navLink("./today.html", "今天", "today")}
        ${navLink("./library.html", "资料", "library")}
        ${navLink("./calendar.html", "日历", "calendar")}
      </nav>
    </header>
  `;
}

function renderMetric(metric) {
  return `
    <article class="metric-card">
      <span>${metric.label}</span>
      <strong>${metric.value}</strong>
    </article>
  `;
}

function renderRoadmapItem(item) {
  return `
    <article class="roadmap-card">
      <p class="eyebrow">${item.phase}</p>
      <h3>${item.title}</h3>
      <div class="tag-row">
        ${item.focus.map((focus) => `<span class="tag">${focus}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderLibrarySection(section) {
  return `
    <article class="library-card">
      <h3>${section.tier}</h3>
      <ul>
        ${section.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderEntry(entry, featured = false) {
  return `
    <article class="entry-card ${featured ? "featured" : ""}">
      <div class="entry-head">
        <div>
          <p class="eyebrow">${entry.date}</p>
          <h3>${entry.title}</h3>
        </div>
        <span class="status">${entry.status}</span>
      </div>
      <p class="entry-goal">${entry.goal}</p>
      <section>
        <h4>今日任务</h4>
        <ul>
          ${entry.tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
      </section>
      <section>
        <h4>今日产出</h4>
        <ul>
          ${entry.deliverables.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section>
        <h4>复盘问题</h4>
        <ul>
          ${entry.reviewQuestions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      ${
        entry.assessment
          ? `
      <section>
        <h4>${entry.assessment.headline}</h4>
        <ul>
          ${entry.assessment.scores.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="coach-note">
          <strong>关键纠正</strong>
          <ul>
            ${entry.assessment.corrections.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </section>`
          : ""
      }
      <section>
        <h4>提醒</h4>
        <ul>
          ${entry.notes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      ${
        entry.relatedLinks?.length
          ? `
      <section>
        <h4>相关材料</h4>
        <div class="related-links">
          ${entry.relatedLinks
            .map(
              (link) => `
            <a class="related-link-card" href="${link.href}">
              <strong>${link.label}</strong>
              <span>${link.description}</span>
            </a>
          `
            )
            .join("")}
        </div>
      </section>`
          : ""
      }
    </article>
  `;
}

function renderCalendarCard(entry, active = false) {
  return `
    <button class="calendar-card ${active ? "active" : ""}" data-entry-slug="${entry.slug}" type="button">
      <span class="calendar-day">${entry.dayLabel || entry.slug}</span>
      <strong>${entry.date}</strong>
      <small>${entry.status}</small>
    </button>
  `;
}

function renderFocusArea(item) {
  return `
    <article class="focus-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `;
}

function renderPillar(pillar) {
  return `
    <article class="pillar-card">
      <h3>${pillar.title}</h3>
      <ul>
        ${pillar.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderIdentity() {
  const identity = siteContent.identity;
  return `
    <section class="identity-grid">
      <article class="identity-card">
        <span>当前身份</span>
        <strong>${identity.role}</strong>
      </article>
      <article class="identity-card">
        <span>目标岗位</span>
        <strong>${identity.target}</strong>
      </article>
      <article class="identity-card">
        <span>主线项目</span>
        <strong>${identity.project}</strong>
      </article>
      <article class="identity-card">
        <span>推进方式</span>
        <strong>${identity.method}</strong>
      </article>
    </section>
  `;
}

function renderSectionHero(title, intro) {
  return `
    <section class="section-hero">
      <p class="eyebrow">Section</p>
      <h1>${title}</h1>
      <p>${intro}</p>
    </section>
  `;
}

function renderHome() {
  return `
    ${renderHeader()}
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Personal Learning Log</p>
        <p class="hero-badge">${siteContent.profile.badge}</p>
        <h1>${siteContent.profile.title}</h1>
        <h2>${siteContent.profile.subtitle}</h2>
        <p class="hero-intro">${siteContent.profile.intro}</p>
      </div>
      <div class="hero-panel">
        <p>主线项目</p>
        <strong>AI 叉车售后客服</strong>
        <span>从 Python 后端走到 LLM 应用落地</span>
        <div class="hero-panel-line"></div>
        <small>目标是做出一个可展示多轮对话、知识库问答、工具调用和工程化能力的完整项目。</small>
      </div>
    </section>

    ${renderIdentity()}

    <section class="metric-grid">
      ${siteContent.metrics.map(renderMetric).join("")}
    </section>

    <section class="section-block">
      <div class="section-title">
        <p class="eyebrow">Direction</p>
        <h2>这次转型的主攻方向</h2>
      </div>
      <div class="focus-grid">
        ${siteContent.focusAreas.map(renderFocusArea).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="section-title">
        <p class="eyebrow">Method</p>
        <h2>我会怎么学，怎么证明自己学会了</h2>
      </div>
      <div class="pillar-grid">
        ${siteContent.pillars.map(renderPillar).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="section-title">
        <p class="eyebrow">Portal</p>
        <h2>进入各个板块</h2>
      </div>
      <div class="portal-grid">
        <a class="portal-card" href="./roadmap.html">
          <span class="portal-kicker">Roadmap</span>
          <strong>学习路线</strong>
          <p>查看 8 周主线安排和阶段重点。</p>
        </a>
        <a class="portal-card" href="./today.html">
          <span class="portal-kicker">Today</span>
          <strong>当天任务</strong>
          <p>只看当前这一天要做什么，不被历史内容干扰。</p>
        </a>
        <a class="portal-card" href="./library.html">
          <span class="portal-kicker">Library</span>
          <strong>资料优先级</strong>
          <p>按求职收益看资料，不把时间浪费在低优先级内容上。</p>
        </a>
        <a class="portal-card" href="./calendar.html">
          <span class="portal-kicker">Calendar</span>
          <strong>学习日历</strong>
          <p>按天切换查看学习路线和完成情况。</p>
        </a>
      </div>
    </section>
  `;
}

function renderRoadmapPage() {
  return `
    ${renderHeader()}
    ${renderSectionHero("学习路线", "这里按周查看整个两个月的学习推进顺序，方便你知道当前应该把精力放在哪。")}
    <section class="roadmap-grid">
      ${siteContent.roadmap.map(renderRoadmapItem).join("")}
    </section>
  `;
}

function renderTodayPage() {
  const currentEntry = siteContent.entries.at(-1);
  return `
    ${renderHeader()}
    ${renderSectionHero("当天任务", "这个页面只展示当前这一天的学习任务和复盘内容，适合每天直接打开执行。")}
    ${renderEntry(currentEntry, true)}
  `;
}

function renderLibraryPage() {
  return `
    ${renderHeader()}
    ${renderSectionHero("资料优先级", "先学最直接影响求职结果的内容，后面再补更深的原理和平台。")}
    <section class="library-grid full-width">
      ${siteContent.library.map(renderLibrarySection).join("")}
    </section>
  `;
}

function renderCalendarPage() {
  const entries = [...siteContent.entries];
  const currentEntry =
    entries.find((entry) => entry.slug === selectedEntrySlug) ?? entries.at(-1);
  const reverseEntries = [...entries].reverse();

  return `
    ${renderHeader()}
    ${renderSectionHero("学习日历", siteContent.calendarNote)}
    <section class="calendar-layout">
      <div class="calendar-grid">
        ${reverseEntries
          .map((entry) => renderCalendarCard(entry, entry.slug === currentEntry.slug))
          .join("")}
      </div>
      <div class="entry-list">
        ${renderEntry(currentEntry, false)}
      </div>
    </section>
  `;
}

function renderExerciseDay1Page() {
  return `
    ${renderHeader()}
    ${renderSectionHero(
      "Day 1 提交案例",
      "先独立完成，再用这里核对最低标准。今天的重点是把 Python 基础写成可运行代码，并开始理解 AI 客服的业务边界。"
    )}
    <section class="exercise-layout">
      <article class="exercise-card">
        <p class="eyebrow">Goal</p>
        <h2>练习目标</h2>
        <ul>
          <li>说清生成器、迭代器和自定义异常。</li>
          <li>完成平方生成器与纯 Python 客服服务。</li>
          <li>把业务问题转成后续可用的 RAG 测试问题。</li>
        </ul>
      </article>

      <article class="exercise-card">
        <p class="eyebrow">Structure</p>
        <h2>建议目录</h2>
        <pre><code>day1_customer_service/
  models.py
  exceptions.py
  services.py
  app.py
  test_services.py</code></pre>
      </article>

      <article class="exercise-card">
        <p class="eyebrow">Requirement</p>
        <h2>你要实现什么</h2>
        <ul>
          <li>实现 <code>square_numbers(n)</code>，逐个 yield 1~n 的平方。</li>
          <li>定义 <code>ChatRequest</code> 与 <code>InvalidMessageError</code>。</li>
          <li>校验空消息和超长消息，并按关键词返回不同回复。</li>
          <li>至少覆盖维修工单、状态查询、评价签字和兜底回复。</li>
        </ul>
      </article>

      <article class="exercise-card full-span">
        <p class="eyebrow">Starter</p>
        <h2>代码骨架</h2>
        <pre><code>def square_numbers(n):
    for number in range(1, n + 1):
        yield number ** 2

generator = square_numbers(3)
print(next(generator))  # 1
print(next(generator))  # 4</code></pre>
        <pre><code>from dataclasses import dataclass

class InvalidMessageError(ValueError):
    pass

@dataclass
class ChatRequest:
    user_id: str
    message: str

class ChatService:
    MAX_MESSAGE_LENGTH = 200

    def validate_message(self, message: str) -> None:
        # TODO: 校验空消息和超长消息
        pass

    def reply(self, request: ChatRequest) -> str:
        # TODO: 根据关键词返回回复，并提供兜底回答
        pass</code></pre>
      </article>

      <article class="exercise-card full-span">
        <p class="eyebrow">Submission</p>
        <h2>提交模板</h2>
        <pre><code>## Day 1 学习提交
1. 生成器练习代码：
2. ChatService 是否跑通：
3. 我对生成器、迭代器、自定义异常的理解：
4. 10 个叉车售后高频问题：
5. AI chat service 应放在哪一层及理由：
6. 今天最卡的点：</code></pre>
        <a class="back-link" href="./today.html">返回当天任务</a>
      </article>
    </section>
  `;
}

function renderPage() {
  if (currentPage === "roadmap") return renderRoadmapPage();
  if (currentPage === "today") return renderTodayPage();
  if (currentPage === "library") return renderLibraryPage();
  if (currentPage === "calendar") return renderCalendarPage();
  if (currentPage === "exercise-day1") return renderExerciseDay1Page();
  return renderHome();
}

function render() {
  app.innerHTML = `<main class="page-shell">${renderPage()}</main>`;
  bind();
}

function bind() {
  document.querySelectorAll("[data-entry-slug]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedEntrySlug = button.getAttribute("data-entry-slug") || selectedEntrySlug;
      render();
    });
  });
}

render();
