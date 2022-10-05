import Image from "next/image";
import styled from "styled-components";
import { UilNavigator } from '@iconscout/react-unicons'

export const Button = ({ href, text, margin, str, fil, height }) => {
  return (
    <ButtonWrapper
      className="effect"
      margin={margin}
      str={str}
      fil={fil}
      height={height}
    >
      <StyledLink href={href} target="_blank">
        {text ? text : "Button"}{" "}
        <UilNavigator />
      </StyledLink>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div.attrs({})`
  max-width: 20rem;
  transition: transform 1s ease-in-out;
  transform: translateX(-200px);
  transform: ${(props) => props.str > 99 && "translateX(0px)"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.text.neutral};
  padding: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;

  @media ${(props) => props.theme.breakpoints.mobile} {
    transform: scale(0.8);
  }

  &:hover {
    font-style: italic;
  }
`;
