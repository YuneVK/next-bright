import React from "react"
import { Code } from "bright"

function CodeSnippet({ lang = "py", children }) {
  return (
    <Code className="code-snippet" theme="dracula" lang={lang}>
      {children}
    </Code>
  )
}

export default CodeSnippet
