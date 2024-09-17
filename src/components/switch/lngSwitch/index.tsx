import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useStore } from "@src/store";
import { Colors } from "@src/design/colors";

const LngSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const theme = useStore((state) => state.theme);

  return (
    <Wrapper $theme={theme}>
      <StyleButton
        $active={i18n.language === "en" ? 1 : 0}
        $theme={theme}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </StyleButton>
      <Divider $theme={theme} />
      <StyleButton
        $active={i18n.language === "ua" ? 1 : 0}
        $theme={theme}
        onClick={() => i18n.changeLanguage("ua")}
      >
        UA
      </StyleButton>
    </Wrapper>
  );
};

export default LngSwitch;

const Wrapper = styled.div<{ $theme: boolean }>`
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: solid 1px ${(props) => (props.$theme ? Colors.BBlack : Colors.BWhite)};
  border-radius: 2px;
`;

const Divider = styled.div<{ $theme: boolean }>`
  height: 1px;
  background-color: ${(props) => (props.$theme ? Colors.BBlack : Colors.BWhite)};
`;

const StyleButton = styled.button<{ $active: number; $theme: boolean }>`
  height: 40px;
  width: 80px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${(props) =>
    props.$active ? Colors.CornflowerBlue : props.$theme ? Colors.BBlack : Colors.BWhite};
  font-size: large;
  &:hover {
    box-shadow: 0px 0px 25px ${(props) => (props.$theme ? Colors.Black : Colors.White)}44 inset;
  }
`;
