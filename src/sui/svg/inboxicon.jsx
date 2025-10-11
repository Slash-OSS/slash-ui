const SuiInboxIcon = ({style, className}) => (
<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="var(--color-text)"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  width="1.2em"
  height="1.2em"
  aria-hidden="true"
  style={{ verticalAlign: 'middle', ...style }}
  className={className}
  preserveAspectRatio="xMidYMid meet"
>
  {/* Tray outline */}
  <rect x="3" y="6" width="18" height="14" rx="2" ry="2" />
  
  {/* Tray opening */}
  <path d="M3 7 L12 12 L12 12 L21 7" />
</svg>
);

export default SuiInboxIcon;