import React from 'react'
import urlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const urlFor = (source) =>
  urlBuilder({ projectId: 'kk9pk2m1', dataset: 'production' }).image(source)

export const Serializer = {
  types: {
    mainImage: (props) => (
      <figure>
        <img
          src={urlFor(props.node.asset).width(600).url()}
          alt={props.node.alt}
        />
        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),
    code: Code,
  },
}

export default function Code({ node }) {
  if (!node || !node.code) {
    return null
  }
  const { language, code } = node
  return (
    <SyntaxHighlighter language={language || 'text'} style={shadesOfPurple}>
      {code}
    </SyntaxHighlighter>
  )
}
