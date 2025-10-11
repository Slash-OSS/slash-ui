const SuiHomeIcon = ({style, className}) => (
<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="var(--color-text)"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
  style={{ verticalAlign: 'middle', ...style }}
  className={className}
  width="1.2em"
  height="1.2em"
  preserveAspectRatio="xMidYMid meet"
>
  <path d="M3 12 L12 3 L21 12" />       {/* Roof Outline */}
  <path d="M4 12 L4 21 L20 21 L20 12" /> {/* Walls Outline */}
  <path d="M9 21 L9 14 L15 14 L15 21" /> {/* Door Outline */}
</svg>
);

export default SuiHomeIcon;