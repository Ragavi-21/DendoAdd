import { useEffect, useRef, useState } from 'react'
import './App.css'
import phonesImg from './assets/Phone MockUps.png'
import { AndroidLogo, AppleLogo, AppStoreBadge, GooglePlayBadge } from './Logos'

const IOS_URL =
  'https://apps.apple.com/in/app/dendo-food-everything-app/id6754545236'
const ANDROID_URL =
  'https://play.google.com/store/apps/details?id=com.dendo.update.user'

function App() {
  return (
    <>
      <header className="nav">
        <div className="shell nav-inner">
          <a href="#" className="brand" aria-label="Dendo home">
            <span className="brand-mark" />
          </a>

          <DownloadMenu />
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <Decor />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>
                Download the
                <br />
                <span className="accent">Dendo</span> App
              </h1>
              <h2 className="hero-sub">Your favorite food, delivered faster.</h2>
              <p className="hero-text">
                Order from the best restaurants near you. Fast delivery, live
                tracking, secure payments, and exclusive app-only offers.
              </p>

              <div className="download-card" id="download">
                <a href="#platforms" className="btn btn-download">
                  DOWNLOAD NOW
                </a>
                <div className="download-panel">
                  <a
                    href={ANDROID_URL}
                    className="os os-android"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AndroidLogo size={28} fill="currentColor" />
                    <span>Android</span>
                  </a>
                  <span className="os-divider" aria-hidden="true" />
                  <a
                    href={IOS_URL}
                    className="os os-ios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AppleLogo size={28} />
                    <span>iOS</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-art">
              <img
                className="phones"
                src={phonesImg}
                width="4041"
                height="4783"
                alt="The Dendo app on two phones, showing the home screen and the Refer &amp; Earn screen"
              />
            </div>
          </div>
        </section>

        <section className="platforms" id="platforms">
          <h2 className="section-title">
            Available on <span className="accent">Both Platforms</span>
          </h2>

          <div className="shell platform-grid">
            <article className="platform-card" id="android">
              <div className="platform-logo">
                <AndroidLogo size={72} />
              </div>
              <div className="platform-body">
                <h3 className="platform-name android">Android</h3>
                <ul className="platform-reqs">
                  
                </ul>
                <a
                  href={ANDROID_URL}
                  className="store-badge"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GooglePlayBadge />
                </a>
              </div>
            </article>

            <div className="platform-or" aria-hidden="true">
              <span>OR</span>
            </div>

            <article className="platform-card" id="ios">
              <div className="platform-logo">
                <AppleLogo size={64} />
              </div>
              <div className="platform-body">
                <h3 className="platform-name">iOS</h3>
                <ul className="platform-reqs">
                  
                </ul>
                <a
                  href={IOS_URL}
                  className="store-badge"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AppStoreBadge />
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

function DownloadMenu() {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="download-menu" ref={root}>
      <button
        type="button"
        className="btn btn-primary nav-cta"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
      >
        <DownloadIcon />
        Download App
        <ChevronIcon className={open ? 'chevron up' : 'chevron'} />
      </button>

      <div className={open ? 'menu-pop open' : 'menu-pop'} role="menu">
        <a
          href={ANDROID_URL}
          className="menu-item"
          role="menuitem"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <AndroidLogo size={24} />
          <span className="menu-text">
            <small>Get it on</small>
            <strong>Google Play</strong>
          </span>
        </a>

        <a
          href={IOS_URL}
          className="menu-item"
          role="menuitem"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <AppleLogo size={24} />
          <span className="menu-text">
            <small>Download on the</small>
            <strong>App Store</strong>
          </span>
        </a>
      </div>
    </div>
  )
}

function ChevronIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Decor() {
  return (
    <div className="decor" aria-hidden="true">
      <span className="blob" />
      <span className="dots" />
    </div>
  )
}

export default App
