const SuiCalendarIcon = ({style, className}) => (
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
  {/* Calendar frame */}
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />

  {/* Calendar header (top bar) */}
  <line x1="3" y1="10" x2="21" y2="10" />

  {/* Binding rings */}
  <line x1="8" y1="2" x2="8" y2="6" />
  <line x1="16" y1="2" x2="16" y2="6" />
</svg>
);

export default SuiCalendarIcon;