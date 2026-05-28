const tasks = [
  { title: "整理项目结构", time: "09:30", tone: "green" },
  { title: "完成首页视觉稿", time: "11:00", tone: "amber" },
  { title: "检查响应式布局", time: "16:20", tone: "rose" },
];

const stats = [
  { value: "3", label: "进行中的任务" },
  { value: "72%", label: "今日完成度" },
  { value: "45m", label: "下一段专注" },
];

export default function Home() {
  return (
    <main className="app">
      <header className="header">
        <div className="brand">
          <div className="logo" aria-hidden="true">
            FD
          </div>
          <div>
            <h1>Focus Desk</h1>
            <p className="date">今天的节奏，清晰一点就好。</p>
          </div>
        </div>
        <button className="primary-action" type="button">
          开始专注
        </button>
      </header>

      <section className="grid">
        <article className="panel hero">
          <div>
            <h2>把今天拆成几件能完成的小事。</h2>
            <p>
              一个安静的工作台界面，适合放任务、记进度、看状态。没有复杂功能，只给你一个干净的开始。
            </p>
          </div>

          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="side">
          <article className="panel card">
            <div className="card-head">
              <h2>今日清单</h2>
              <span className="chip">实时</span>
            </div>

            <div className="tasks">
              {tasks.map((task) => (
                <div className="task" key={task.title}>
                  <i className={`dot ${task.tone}`} aria-hidden="true" />
                  <span>{task.title}</span>
                  <time>{task.time}</time>
                </div>
              ))}
            </div>
          </article>

          <article className="panel card">
            <div className="card-head">
              <h2>快速记录</h2>
              <span className="chip">草稿</span>
            </div>
            <form className="composer">
              <input type="text" placeholder="写下一件小事" />
              <button className="icon-button" type="submit" aria-label="添加">
                +
              </button>
            </form>
          </article>
        </div>
      </section>

      <footer>Made with Next.js.</footer>
    </main>
  );
}
