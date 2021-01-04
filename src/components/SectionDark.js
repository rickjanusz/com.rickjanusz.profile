import React from 'react'
import styled from 'styled-components'

const SectionDark = styled.div`
  background-color: ${(props) => props.theme.darkSection};
  border-top: 1px solid ${(props) => props.theme.separatorBtm};
  border-bottom: 1px solid ${(props) => props.theme.separatorTop};
`

const DarkSection = (props) => {
  return <SectionDark>{props.children}</SectionDark>
}

export default DarkSection
