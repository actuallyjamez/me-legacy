import React, {Fragment} from 'react'

const Screen = ({children}) => (
  <div>
    {children}
    { /*language=SCSS*/}
    <style jsx>{`
      div {
        height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
        height: calc(var(--vh, 1vh) * 100);
      }
    `}</style>
  </div>
)

export default Screen
