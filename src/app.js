import { siteContent } from "./content.js";

const app = document.querySelector("#app");

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
      <section>
        <h4>提醒</h4>
        <ul>
          ${entry.notes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </article>
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

function render() {
  const [today, ...history] = [...siteContent.entries].reverse();

  app.innerHTML = `
    <main class="page-shell">
      <header class="site-header">
        <div class="brand">
          <span class="brand-mark">AI</span>
          <span>${siteContent.profile.title}</span>
        </div>
        <nav class="site-nav">
          <a href="#roadmap">路线</a>
          <a href="#today">今天</a>
          <a href="#library">资料</a>
          <a href="#log">日志</a>
        </nav>
      </header>

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
          <strong>AI 客服助手</strong>
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

      <section class="section-block" id="roadmap">
        <div class="section-title">
          <p class="eyebrow">Roadmap</p>
          <h2>8 周学习路线</h2>
        </div>
        <div class="roadmap-grid">
          ${siteContent.roadmap.map(renderRoadmapItem).join("")}
        </div>
      </section>

      <section class="section-block" id="today">
        <div class="section-title">
          <p class="eyebrow">Today</p>
          <h2>当前学习任务</h2>
        </div>
        ${renderEntry(today, true)}
      </section>

      <section class="section-block split-layout">
        <div id="library">
          <div class="section-title">
            <p class="eyebrow">Library</p>
            <h2>飞书资料优先级</h2>
          </div>
          <div class="library-grid">
            ${siteContent.library.map(renderLibrarySection).join("")}
          </div>
        </div>

        <div id="log">
          <div class="section-title">
            <p class="eyebrow">Log</p>
            <h2>学习日志</h2>
          </div>
          <div class="entry-list">
            ${[today, ...history].map((entry, index) => renderEntry(entry, index === 0)).join("")}
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <p>这是一个持续更新的 AI 求职实验站。后续每天的学习任务、项目进展和阶段总结都会继续追加在这里。</p>
      </footer>
    </main>
  `;
}

render();
