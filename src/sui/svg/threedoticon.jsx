const SuithreeDotIcon = ({style, className}) => (
  <svg
    viewBox="0 0 24 24"
    fill="var(--color-text)"
    stroke="none"
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
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);
export default SuithreeDotIcon;