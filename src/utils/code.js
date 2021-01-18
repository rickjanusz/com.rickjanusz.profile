import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default ({ node }) => {
  if (!node || !node.code) {
    return null
  }
  const { language, code } = node
  return (
    <SyntaxHighlighter language={language || 'text'} style={rainbow}>
      {code}
    </SyntaxHighlighter>
  )
}

// export default ({ node }) => {
//   if (!node || !node.code) {
//     return null
//   }
//   const { language, code } = node
//   return (
//     <div>
//       language = {language}
//       <pre>{code}</pre>
//     </div>
//   )
// }
