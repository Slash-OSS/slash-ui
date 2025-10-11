import '../components/tokens.css'

const SuiDownArrowUpDownIcon = ({ style, className }) => (
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
    {/* Down arrow */}
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default SuiDownArrowUpDownIcon;
