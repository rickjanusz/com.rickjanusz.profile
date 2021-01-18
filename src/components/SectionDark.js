import React from 'react'
import styled from 'styled-components'

const SectionDark = styled.div`
  transition: var(--transition);
  background-color: ${(props) => props.theme.darkSection};
  border-top: 1px solid ${(props) => props.theme.separatorBtm};
  border-bottom: 1px solid ${(props) => props.theme.separatorTop};
  color: ${(props) => props.theme.light};
  padding: 30px 0 70px;
`

const DarkSection = (props) => {
  return <SectionDark className="darkSection">{props.children}</SectionDark>
}

export default DarkSection
