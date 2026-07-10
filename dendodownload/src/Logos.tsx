type IconProps = { size?: number }

export function AndroidLogo({
  size = 20,
  fill = '#3ddc84',
}: IconProps & { fill?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      role="img"
      aria-label="Android"
    >
      <path
        fill={fill}
        d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-329.2 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m337.8-179.7 47.9-83a10 10 0 1 0-17.3-10l-48.5 84.1a301.3 301.3 0 0 0-246.6 0L116.2 29.2a10 10 0 1 0-17.3 10l47.9 83C64.5 167.1 8.2 250.2 0 349.5h512c-8.2-99.3-64.5-182.4-146.8-227.3"
      />
    </svg>
  )
}

export function AppleLogo({ size = 20 }: IconProps) {
  return (
    <svg
      viewBox="0 0 384 512"
      width={size * (384 / 512)}
      height={size}
      role="img"
      aria-label="Apple"
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 512 512" width="24" height="24" aria-hidden="true">
      <path
        fill="#00d0ff"
        d="M47.6 3.3C42.4 8.7 39.4 17 39.4 27.9v456.2c0 10.9 3 19.2 8.2 24.6l1.5 1.5L305 257.6v-3L49.1 1.8z"
      />
      <path
        fill="#00e676"
        d="M392.2 171.6 91.7 0C73.9-10.1 58.1-8.8 48.6 1.3L305 256z"
      />
      <path
        fill="#ffd400"
        d="M390.3 342.3 305 257.6v-3l85.3-84.7 103 58.4c28.9 16.4 28.9 43.2 0 59.6z"
      />
      <path
        fill="#f44336"
        d="M392.2 340.4 305 256 47.6 510.7c9.5 10.1 25.3 11.3 43.1 1.2z"
      />
    </svg>
  )
}

export function GooglePlayBadge() {
  return (
    <span className="badge">
      <PlayIcon />
      <span className="badge-text">
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </span>
  )
}

export function AppStoreBadge() {
  return (
    <span className="badge">
      <span className="badge-apple">
        <AppleLogo size={24} />
      </span>
      <span className="badge-text">
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </span>
  )
}
