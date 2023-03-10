import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import styled from "styled-components";
import { Button } from "./HireButton";
import Lottie from "lottie-react";
import dynamic from "next/dynamic";
import thankyouAnimation from "./assets/82521-thank-you.json";
import { useLottie, useLottieInteractivity } from "lottie-react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Image from "next/image";

const style = {
  height: 300,
  border: 3,
  borderStyle: "solid",
  borderRadius: 7,
};

const options = {
  animationData: thankyouAnimation,
};

const Example = () => {
  const lottieObj = useLottie(options, style);

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [-1, 2] },
        type: "seek",
        frames: [0, 179],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [0],
      },
    ],
  });
  return Animation;
};

export const ScrollText = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const { scrollY } = useScroll();
  const { width, height } = useWindowSize();

  useEffect(() => {
    const scrollEvent = () =>
      window.addEventListener("scroll", (e) => {
        let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;

        let height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        let scrolled = (winScroll / height) * 100;

        setIsScrolled(scrolled);
      });

    () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollY]);

  return (
    <Wrapper>
      <Confetti numberOfPieces={100} width={width} height={height} />
      <Container>
        <SVG
          width="1020"
          height="100"
          viewBox="0 0 1020 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Text x="10%" y="50%" text-anchor="middle">
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
  str: number;
}

const Text = styled.text.attrs((props: TextProps) => ({
  strokeOpacity: props.str + "%",
  fillOpacity: props.str > 90 ? props.str + "%" : 0,
}))`
  font-size: 4rem;
  font-weight: bold;
  stroke: ${(props) => props.theme.text.main};
  fill: ${(props) => props.theme.text.main};
  transition: opacity 0.5s ease-in-out;
`;
