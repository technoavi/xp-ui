import React from "react"

const style = {
  padding: "10px 0px 12px 0px",
  borderBottom: "1px solid #9ba4b5",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "white",
  width: "140px",
  textAlign: "center",
  fontFamily: 'monospace',
  fontSize: '14px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.44px',
  color: '#888888',
}

const activeStyle = {
  ...style,
  padding: "10px 0px",
  borderBottom: "3px solid orange",
  fontFamily: 'monospace',
  fontSize: '14px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.44px',
  color: '#000000',
}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab
