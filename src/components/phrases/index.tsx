import styled from "styled-components";
//TODO Move to API
import data from "../../localDB/data.json";
import { useEffect, useState } from "react";
import { useStore } from "@src/store";
import { Colors } from "@src/design/colors";

const Proverb: React.FC = () => {
  const [index, setIndex] = useState(0);
  const list = Object.values(data);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < list.length - 1) {
        setIndex((i) => i + 1);
      } else {
        setIndex(0);
      }
    }, 12000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Wrapper $theme={theme}>
      <Box>
        "{list[index].text}"<br />"{list[index].origin_text}"
      </Box>
      <BottomBox>
        <SVGLoader viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="spin"
            cx="50"
            cy="50"
            fill="none"
            r="44"
            strokeWidth="10"
            stroke={theme ? Colors.BBlack : Colors.BWhite}
            strokeDasharray="200 1400"
            strokeLinecap="round"
          />
        </SVGLoader>
        <FontBox>
          {list[index].author}
          <br />
          {list[index].origin_author}
        </FontBox>
      </BottomBox>
    </Wrapper>
  );
};

export default Proverb;

const Wrapper = styled.div<{ $theme: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: solid 1px ${(props) => (props.$theme ? Colors.BBlack : Colors.BWhite)};
  background: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  color: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
`;

const SVGLoader = styled.svg`
  height: 30px;
  width: 30px;

  @keyframes progress {
    0% {
      stroke-dasharray: 1, 800;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 300, 800;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 300, 800;
      stroke-dashoffset: -315px;
    }
  }

  .spin {
    animation: progress 12s linear infinite;
  }
`;

const BottomBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const Box = styled.div`
  font-family: Kalam;
  font-size: 18px;
  text-align: center;
`;

const FontBox = styled.div`
  width: 100%;
  font-family: Roboto;
  margin-top: 20px;
  text-align: right;
`;
