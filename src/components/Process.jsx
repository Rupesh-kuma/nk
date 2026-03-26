import './Process.css'

const STEPS = [
  {
    num: '01',
    phase: 'Discovery',
    title: 'Deep-Dive Discovery',
    desc: 'We begin by immersing ourselves in your brand, market, competitors, and goals. Through structured workshops and research, we uncover exactly what it takes to win in your space.',
    icon: '🔭',
    color: '#00c8ff',
    deliverables: ['Brand Audit', 'Competitor Analysis', 'Goal Alignment', 'Project Roadmap'],
  },
  {
    num: '02',
    phase: 'Strategy',
    title: 'Blueprint & Architecture',
    desc: 'Data meets creativity. We architect the entire solution — content strategy, UX wireframes, technical specifications, and campaign structure — before a single pixel or line of code is produced.',
    icon: '📐',
    color: '#8b5cf6',
    deliverables: ['UX Wireframes', 'Content Strategy', 'Tech Architecture', 'Campaign Blueprint'],
  },
  {
    num: '03',
    phase: 'Creation',
    title: 'Design & Development',
    desc: 'Our designers and engineers work in lockstep to bring the vision to life. Pixel-perfect interfaces, clean performant code, and iterative client feedback loops ensure the output exceeds expectations.',
    icon: '⚡',
    color: '#06ffd4',
    deliverables: ['UI Design', 'Development', 'QA Testing', 'Performance Optimization'],
  },
  {
    num: '04',
    phase: 'Launch',
    title: 'Launch & Scale',
    desc: 'Deployment is just the beginning. We monitor, optimize, and scale your digital assets continuously — running A/B tests, refining campaigns, and pushing updates to keep you ahead of the curve.',
    icon: '🚀',
    color: '#f472b6',
    deliverables: ['Deployment', 'Campaign Launch', 'Analytics Setup', 'Ongoing Optimization'],
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-beam process-beam-1" />
      <div className="process-beam process-beam-2" />
      <div className="container">
        <header className="process-header reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-eyebrow">How We Deliver</span>
          <h2 className="section-title">
            Our Proven <span className="gradient-text">4-Phase Process</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            A transparent, battle-tested framework that takes your project from concept
            to market-leading reality — on time and above expectations.
          </p>
        </header>

        <div className="process-timeline">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`process-step reveal ${i % 2 === 0 ? '' : 'process-step-right'}`}
              data-stagger
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="step-connector" style={{ '--step-col': step.color }} />
              )}

              {/* Node */}
              <div className="step-node" style={{ '--step-col': step.color }}>
                <span className="step-node-icon">{step.icon}</span>
                <div className="step-node-ring" />
              </div>

              {/* Card */}
              <div className="step-card glass-card" style={{ '--step-col': step.color }}>
                <div className="step-meta">
                  <span className="step-num" style={{ color: step.color }}>{step.num}</span>
                  <span className="step-phase" style={{ color: step.color }}>{step.phase}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                <div className="step-deliverables">
                  {step.deliverables.map((d) => (
                    <span key={d} className="step-deliverable">
                      <span style={{ color: step.color }}>✓</span> {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
