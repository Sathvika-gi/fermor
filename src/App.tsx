import { useState } from "react";

type IconName =
  | "arrow"
  | "chart"
  | "check"
  | "chevron"
  | "close"
  | "eye"
  | "lock"
  | "menu"
  | "pie"
  | "spark"
  | "target";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19V3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    menu: (
      <>
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    pie: (
      <>
        <path d="M11 3a9 9 0 1 0 9 9h-9V3Z" />
        <path d="M15 3.8A8.9 8.9 0 0 1 20.2 9H15V3.8Z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.5 5.3L19 9l-5.5 1.7L12 16l-1.5-5.3L5 9l5.5-1.7L12 2Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M22 12h-3" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className={`logo ${light ? "logo-light" : ""}`} aria-label="Fermor home">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      fermor
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [goal, setGoal] = useState(25000);
  const [showBalance, setShowBalance] = useState(true);
  const [period, setPeriod] = useState<"1M" | "1Y">("1Y");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const saved = 5000;
  const projected = Math.round(goal * 1.084);
  const monthly = Math.round((goal - saved) / 36);
  const chartPath =
    period === "1Y"
      ? "M0 150 C35 146 42 121 78 127 S130 105 158 112 S208 72 240 85 S290 105 320 76 S370 42 400 56 S450 70 475 38 S510 30 540 16"
      : "M0 136 C35 128 61 145 95 123 S145 105 180 116 S230 91 270 96 S325 73 360 84 S410 61 450 70 S500 43 540 47";

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#why">Why Fermor</a>
          <a href="#approach">How it works</a>
          <a href="#security">Security</a>
        </nav>
        <a className="button button-small desktop-cta" href="#start">
          Start building
          <Icon name="arrow" size={17} />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#why" onClick={closeMenu}>Why Fermor</a>
            <a href="#approach" onClick={closeMenu}>How it works</a>
            <a href="#security" onClick={closeMenu}>Security</a>
            <a className="button" href="#start" onClick={closeMenu}>Start building</a>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            FINANCE, MADE CLEAR
          </div>
          <h1>
            Your money has
            <br /> more <em>potential.</em>
          </h1>
          <p className="hero-description">
            Fermor brings your spending, saving, and goals into one clear view,
            then turns what it sees into practical next steps.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#start">
              Build your plan
              <Icon name="arrow" size={18} />
            </a>
            <a className="text-link" href="#approach">
              See how it works
            </a>
          </div>
          <div className="trust-note">
            <div className="avatar-stack" aria-hidden="true">
              <span>JM</span>
              <span>AK</span>
              <span>SR</span>
            </div>
            <p>
              <strong>For people who want clarity, not complexity</strong>
              <br />
              No spreadsheets. No financial expertise required.
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Fermor financial dashboard preview">
          <div className="dashboard">
            <div className="dash-top">
              <div>
                <span className="dash-label">TOTAL BALANCE</span>
                <div className="balance-row">
                  <strong>{showBalance ? "$42,850.00" : "••••••••"}</strong>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    aria-label={showBalance ? "Hide balance" : "Show balance"}
                  >
                    <Icon name="eye" size={18} />
                  </button>
                </div>
              </div>
              <span className="growth">{period === "1Y" ? "+8.4%" : "+2.9%"}</span>
            </div>
            <div className="chart-wrap">
              <svg viewBox="0 0 540 180" preserveAspectRatio="none" role="img" aria-label="Balance increasing over time">
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="chart-grid" d="M0 30H540M0 85H540M0 140H540" />
                <path
                  className="chart-area"
                  d={`${chartPath} V180 H0Z`}
                />
                <path
                  className="chart-line"
                  d={chartPath}
                />
                <circle cx="540" cy={period === "1Y" ? "16" : "47"} r="5" />
              </svg>
              <div className="chart-periods">
                {(["1M", "1Y"] as const).map((item) => (
                  <button
                    key={item}
                    className={period === item ? "active" : ""}
                    onClick={() => setPeriod(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="dash-goals">
              <div className="goal-row">
                <span className="goal-icon"><Icon name="target" size={18} /></span>
                <div>
                  <span>Home deposit</span>
                  <strong>$18,250 of $25,000</strong>
                </div>
                <b>73%</b>
              </div>
              <div className="progress"><span /></div>
              <div className="goal-caption">
                <span>On track</span>
                <span>Estimated May 2026</span>
              </div>
            </div>
          </div>
          <div className="floating-card">
            <span className="mini-icon"><Icon name="spark" size={17} /></span>
            <div>
              <span>{period === "1Y" ? "Progress insight" : "Spending insight"}</span>
              <strong>
                {period === "1Y"
                  ? "You’re two months ahead on your home goal"
                  : "Dining spend is down 18% this month"}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Fermor benefits">
        <div><strong>Connected picture</strong><span>Accounts, spending, and goals</span></div>
        <div><strong>Useful insights</strong><span>What changed, and why</span></div>
        <div><strong>Clear next steps</strong><span>Decisions, not more data</span></div>
        <div><strong>Private by design</strong><span>Your data stays yours</span></div>
      </section>

      <section className="intro section" id="why">
        <div className="section-kicker">BUILT FOR EVERYDAY DECISIONS</div>
        <div className="intro-grid">
          <h2>From information<br />to a decision.</h2>
          <div className="intro-copy">
            <p>
              Most people do not need another dashboard full of numbers. They
              need to know what changed, what matters now, and what they can do
              about it. Fermor connects those dots in plain English.
            </p>
            <a href="#approach" className="inline-link">
              Our approach <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="features section" id="approach">
        <article className="feature-card feature-large">
          <div className="feature-content">
            <span className="feature-number">01</span>
            <div>
              <h3>See the whole picture.</h3>
              <p>Connect the parts of your financial life that usually sit apart. See what you own, what you owe, where money goes, and how it affects your goals.</p>
            </div>
          </div>
          <div className="financial-map">
            <div className="cash-flow">
              <div className="cash-flow-head">
                <div>
                  <span>THIS MONTH</span>
                  <strong>Where your money went</strong>
                </div>
                <b>+$1,140</b>
              </div>
              <div className="flow-bar" aria-label="Monthly income allocation">
                <span className="flow-essential" />
                <span className="flow-flexible" />
                <span className="flow-goals" />
              </div>
              <div className="flow-legend">
                <div><i className="dot purple" /><span>Essentials</span><b>$4,860</b></div>
                <div><i className="dot lilac" /><span>Flexible</span><b>$1,240</b></div>
                <div><i className="dot pale" /><span>Left to direct</span><b>$1,140</b></div>
              </div>
              <p className="flow-insight">
                You kept 16% more income available than your three-month average.
              </p>
            </div>
            <div className="map-connector">
              <span>MONTHLY CHOICES</span>
              <i />
              <span>LONG-TERM PICTURE</span>
            </div>
            <div className="account-panel">
              <div className="account-head">
                <span>Net worth</span>
                <strong>$86,420</strong>
              </div>
              <div className="account-line">
                <span><i className="dot purple" />Cash</span><b>$24,800</b>
              </div>
              <div className="account-line">
                <span><i className="dot lilac" />Investments</span><b>$52,350</b>
              </div>
              <div className="account-line">
                <span><i className="dot pale" />Other</span><b>$9,270</b>
              </div>
            </div>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-content">
            <span className="feature-number">02</span>
            <div>
              <h3>Understand what matters.</h3>
              <p>Fermor explains the pattern behind the number, then surfaces one useful decision—not a list of generic tips.</p>
            </div>
          </div>
          <div className="next-step">
            <span className="mini-icon"><Icon name="chart" size={18} /></span>
            <p>Recommended this month</p>
            <strong>Move $280 to your high-yield savings</strong>
            <small>Based on your cash buffer and upcoming bills</small>
            {showRecommendation && (
              <div className="recommendation-detail">
                This keeps your checking balance above its usual low point while moving your safety-net goal 12 days closer.
              </div>
            )}
            <button
              className={showRecommendation ? "open" : ""}
              onClick={() => setShowRecommendation(!showRecommendation)}
              aria-label={showRecommendation ? "Hide recommendation details" : "View recommendation details"}
              aria-expanded={showRecommendation}
            >
              <Icon name={showRecommendation ? "close" : "arrow"} size={17} />
            </button>
          </div>
        </article>

        <article className="feature-card feature-purple">
          <div className="feature-content">
            <span className="feature-number">03</span>
            <div>
              <h3>Act with context.</h3>
              <p>See how a choice affects today’s cash, tomorrow’s goals, and the habits you are trying to build before you commit.</p>
            </div>
          </div>
          <div className="confidence-list">
            {["Bills covered before moving money", "Safety net stays on track", "Long-term goal moves closer"].map((item) => (
              <div key={item}><span><Icon name="check" size={15} /></span>{item}</div>
            ))}
          </div>
        </article>
      </section>

      <section className="planner section">
        <div className="planner-copy">
          <div className="section-kicker">PLAN WITH REAL TRADE-OFFS</div>
          <h2>A plan that moves<br />when life does.</h2>
          <p>
            Goals become useful when they fit the rest of your life. Fermor
            balances what you have now, what you can set aside, and how quickly
            you want to get there.
          </p>
          <ul>
            <li><Icon name="check" size={16} />Start from your actual cash flow</li>
            <li><Icon name="check" size={16} />Compare pace, amount, and timing</li>
            <li><Icon name="check" size={16} />Adjust without losing your progress</li>
          </ul>
        </div>
        <div className="calculator">
          <div className="calculator-head">
            <div>
              <span>YOUR GOAL</span>
              <h3>Build my safety net</h3>
            </div>
            <span className="calc-icon"><Icon name="target" /></span>
          </div>
          <label htmlFor="goal">Target amount <strong>{formatMoney(goal)}</strong></label>
          <input
            id="goal"
            type="range"
            min="5000"
            max="50000"
            step="1000"
            value={goal}
            onChange={(event) => setGoal(Number(event.target.value))}
            style={{ "--range": `${((goal - 5000) / 45000) * 100}%` } as React.CSSProperties}
          />
          <div className="range-labels"><span>$5k</span><span>$50k</span></div>
          <div className="calc-results">
            <div><span>Monthly transfer</span><strong>{formatMoney(monthly)}</strong></div>
            <div><span>Time to goal</span><strong>3 years</strong></div>
          </div>
          <div className="projection">
            <span><Icon name="spark" size={16} />Projected with 3.8% APY</span>
            <strong>{formatMoney(projected)}</strong>
            <small>starting with {formatMoney(saved)} already saved</small>
          </div>
        </div>
      </section>

      <section className="security section" id="security">
        <div className="security-icon"><Icon name="lock" size={26} /></div>
        <div>
          <div className="section-kicker">PRIVATE BY DEFAULT</div>
          <h2>Your financial life<br />stays yours.</h2>
        </div>
        <div className="security-copy">
          <p>
            Fermor uses industry-standard encryption, read-only account
            connections, and clear data controls. We never sell personal data
            or hide how an insight was produced.
          </p>
          <a className="inline-link" href="#start">How we protect you <Icon name="arrow" size={17} /></a>
        </div>
      </section>

      <section className="closing" id="start">
        <div className="closing-inner">
          <span className="section-kicker">START WITH WHERE YOU ARE</span>
          <h2>Money feels better<br />when it makes sense.</h2>
          <p>Bring the full picture into focus and take your next step with confidence.</p>
          <a className="button button-light" href="mailto:hello@fermor.com">
            Get early access <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </section>

      <footer>
        <div className="footer-top">
          <Logo light />
          <p>Financial clarity for real life.</p>
          <div className="footer-links">
            <a href="#why">Why Fermor</a>
            <a href="#approach">How it works</a>
            <a href="#security">Security</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Fermor, Inc.</span>
          <div><a href="#">Privacy</a><a href="#">Terms</a></div>
          <span>Made with care for your future.</span>
        </div>
      </footer>
    </main>
  );
}
