const SuiSearchIcon = ({style, className}) => (
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
  {/* Circle for the lens */}
  <circle cx="11" cy="11" r="7" />
  
  {/* Handle */}
  <line x1="16.5" y1="16.5" x2="21" y2="21" />
</svg>

);

export default SuiSearchIcon;