"use client"

import React from "react"

function Revealable({ children }) {
  const [isRevealed, setIsRevealed] = React.useState(true)

  return (
    <>
      <div className={["reveal", isRevealed ? "" : "hidden"].join(" ")}>
        <button onClick={() => setIsRevealed(false)}>Reveal Content</button>
      </div>

      <div className={isRevealed ? "hidden" : ""}>{children}</div>
    </>
  )
}

export default Revealable
