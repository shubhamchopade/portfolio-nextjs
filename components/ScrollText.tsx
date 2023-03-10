import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import styled from "styled-components";
import { Button } from "./HireButton";

export const ScrollText = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrolled = (winScroll / height) * 100;

      setIsScrolled(scrolled);
    });
  }, [scrollY]);

  return (
    <Wrapper>
      <Container>
        <SVG
          width="1020"
          height="100"
          viewBox="0 0 1020 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Text x="10%" y="50%" text-anchor="middle" isScrolled={isScrolled}>
            GET YOUR WORK DONE
          </Text>
        </SVG>
      </Container>
      <div style={{ height: "30vh" }}>
        <Button translateX={isScrolled} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 3rem 0;
`;
const Container = styled.section`
  height: 100vh;
`;
const SVG = styled.svg`
  position: sticky;
  top: 30%;
  left: 50%;
  width: 100%;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 20%;
  }
`;

interface TextProps {
  isScrolled: number;
}

const Text = styled.text.attrs((props: TextProps) => ({
  fillOpacity: props.isScrolled > 90 ? "100%" : "0%",
}))`
  font-size: 4rem;
  font-weight: bold;
  stroke: ${(props) => props.theme.text.main};
  fill: ${(props) => props.theme.text.main};
  transition: opacity 0.5s ease-in-out;
`;
