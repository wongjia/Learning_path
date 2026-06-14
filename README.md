# AI 求职实验室

这是一个独立的静态个人技术博客，用来记录：

- 中级 AI 应用工程师的 8 周学习路线
- 每天的学习任务
- 项目方向与阶段进度
- 后续每天新增的学习日志

## 本地预览

```bash
cd /Users/wong/Documents/New\ project/ai-career-blog
python3 -m http.server 4173
```

浏览器访问：

```text
http://localhost:4173
```

## GitHub Pages

这个站点已经是纯静态结构，适合直接部署到 GitHub Pages。

推荐方式：

1. 创建一个新的 GitHub 仓库
2. 把 `ai-career-blog/` 目录内容作为仓库根目录
3. 在 GitHub 仓库的 `Settings -> Pages` 中选择从 `main` 分支根目录发布

额外说明：

- `.nojekyll` 已经添加，避免 Pages 对静态资源做不必要处理
- 当前站点没有前端路由依赖，不需要额外构建

## 后续更新方式

每日学习路线统一维护在：

- `src/content.js`

其中：

- `roadmap` 维护周级别路线
- `entries` 维护每日学习日志

后面你每天找我，我会继续往 `entries` 里补当天内容。
