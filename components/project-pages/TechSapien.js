import React from 'react'
import { Heading, Logo, TextBlock } from '../Common'
import techSapienImg from '../assets/projects/tech-sapien/cover.png'
import styled from 'styled-components'

export const TechSapien = () => {
    return (
        <Parent>
        </Parent >
    )
}

const Parent = styled.main`
max-width: 70rem;
    width: 90%;
    margin: 2rem auto;

.project-header {
    margin-left: 2rem;
      @media ${props => props.theme.breakpoints.mobile}{
    margin-left: 0rem;
  }
}
.width-sm{
    max-width: 40rem;
}
`