import React from 'react'
import { Flex, Heading, Logo, Cover, TextBlock, TextBlockHeading, Image, SVG } from '../Common'
import bookPunditsLogo from '../assets/projects/the-book-pundits/logo.png'
import bookPunditsCover from '../assets/projects/the-book-pundits/cover.png'
import UX1 from '../assets/projects/the-book-pundits/ux-1.png'
import UX2 from '../assets/projects/the-book-pundits/ux-2.png'
import UX3 from '../assets/projects/the-book-pundits/ux-3.png'
import styled from 'styled-components'

export const TheBookPundits = () => {
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