import React from 'react'

export function Spacing(props: any) {
  return (
    <div
    data-testid="spacing"
    style={{
      width: '100%',
      background: 'transparent',
      flexShrink: 0,
      ...props?.style,
    }}
  />
  )
}
