import React from 'react'
import { Flex, Heading, Logo, TextBlock } from '../Common'
import portfolioImg from '../assets/projects/portfolio/cover.webp'
import styled from 'styled-components'
import Image from 'next/image'

export const Portfolio = () => {
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