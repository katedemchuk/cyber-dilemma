function StyledText({color, children}) {
  return <span style={{color: `var(--color-${color})`}}>{children}</span>
}

export default StyledText;
