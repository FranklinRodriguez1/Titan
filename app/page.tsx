import Sword from "@/components/Sword";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import ThemeToggle from "@/components/ThemeToggle";
import {
  site,
  story,
  services,
  stack,
  process,
  projects,
  brandFiles,
  palette,
} from "@/lib/site";

function Wordmark({ tagline = true }: { tagline?: boolean }) {
  return (
    <div className="wm-wrap">
      <div className="wm">
        <Sword size="0.92em" animated />
        <span className="wm-text">
          ITAN<span className="wm-light">TECH</span>
        </span>
      </div>
      {tagline && <div className="tag">{site.tagline}</div>}
    </div>
  );
}

export default function Home() {
  const loopStack = [...stack, ...stack];
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="nav-logo" aria-label="TitanTech">
          <Sword size={22} detail="mid" color="currentColor" />
        </a>
        <div className="nav-links">
          <a href="#marca">Marca</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#kit">Kit</a>
          <ThemeToggle />
          <a href="#contacto" className="btn-sm">Contacto</a>
        </div>
      </nav>

      <Spotlight>
        <div id="top" className="hero-grid" />
        <div className="hero-inner">
          <Wordmark />
          <p className="hero-pitch">{site.pitch}</p>
          <div className="hero-cta">
            <a href="#contacto" className="btn">Hablemos</a>
            <a href="#proyectos" className="btn ghost">Ver proyectos</a>
          </div>
        </div>
        <div className="scroll-hint">SCROLL</div>
      </Spotlight>

      <section className="strip" aria-hidden>
        <div className="marquee">
          {loopStack.map((s, i) => (
            <span key={i}>
              {s}
              <i />
            </span>
          ))}
        </div>
      </section>

      <section id="marca" className="sec">
        <div className="wrap split">
          <Reveal>
            <div className="label">01 — La marca</div>
            <h2>{story.title}</h2>
            {story.body.map((p) => (
              <p key={p} className="lead">{p}</p>
            ))}
          </Reveal>
          <Reveal delay={150}>
            <div className="big-sword">
              <Sword size="100%" />
            </div>
          </Reveal>
        </div>
        <div className="wrap values">
          {story.values.map((v, i) => (
            <Reveal key={v.k} delay={i * 120}>
              <div className="card">
                <h3>{v.k}</h3>
                <p>{v.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="servicios" className="sec alt">
        <div className="wrap">
          <Reveal>
            <div className="label">02 — Servicios</div>
            <h2>Lo que construimos</h2>
          </Reveal>
          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="svc">
                  <span className="svc-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal>
            <div className="label">03 — Cómo trabajamos</div>
            <h2>Un proceso sin sorpresas</h2>
          </Reveal>
          <div className="steps">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="step">
                  <div className="step-n">{p.n}</div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="sec alt">
        <div className="wrap">
          <Reveal>
            <div className="label">04 — Proyectos</div>
            <h2>Trabajo reciente</h2>
          </Reveal>
          <div className="projects">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="proj">
                  <div className="proj-top">
                    <span className="chip">{p.tag}</span>
                    <Sword size={20} detail="min" color="var(--ink-muted)" />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="kit" className="sec">
        <div className="wrap">
          <Reveal>
            <div className="label">05 — Kit de marca</div>
            <h2>Logos y colores</h2>
          </Reveal>
          <div className="kit">
            {brandFiles.map((f, i) => (
              <Reveal key={f.file} delay={i * 80}>
                <a
                  className={`kit-card ${f.dark ? "" : "light"}`}
                  href={`/brand/${f.file}`}
                  download
                >
                  <img src={`/brand/${f.file}`} alt={f.name} />
                  <span>{f.name} ↓</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="palette">
              {palette.map((c) => (
                <div key={c.hex} className="sw" style={{ background: c.hex }}>
                  <b style={{ color: c.hex === "#F1EEE8" || c.hex === "#B9B6AE" ? "#0B0B0D" : "#F1EEE8" }}>
                    {c.name}
                  </b>
                  <code style={{ color: c.hex === "#F1EEE8" || c.hex === "#B9B6AE" ? "#0B0B0D" : "#F1EEE8" }}>
                    {c.hex}
                  </code>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="sec cta">
        <Reveal>
          <div className="wrap center">
            <Sword size={64} />
            <h2>¿Tienes un proyecto?</h2>
            <p className="lead">Cuéntanos qué necesitas y te respondemos con una propuesta clara.</p>
            <div className="hero-cta">
              <a className="btn" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              {site.contact.upwork && <a className="btn ghost" href={site.contact.upwork}>Upwork</a>}
              {site.contact.linkedin && <a className="btn ghost" href={site.contact.linkedin}>LinkedIn</a>}
              {site.contact.github && <a className="btn ghost" href={site.contact.github}>GitHub</a>}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="foot">
        <span>© {new Date().getFullYear()} TitanTech</span>
        <span className="mono">{site.tagline.toUpperCase()}</span>
      </footer>
    </main>
  );
}
