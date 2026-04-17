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
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: transparent;
`;

const Divider = styled.div<{ $theme: boolean }>`
  display: none;
`;

const StyleButton = styled.button<{ $active: number; $theme: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 160px;
  height: 52px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  border-radius: 10px;
  background-color: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  color: ${(props) =>
    props.$active ? Colors.CornflowerBlue : props.$theme ? Colors.BBlack : Colors.BWhite};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0 16px;
  transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease;

  &:hover {
    box-shadow:
      0px 0px 22px ${(props) => (props.$theme ? Colors.Black : Colors.White)}55 inset,
      0px 0px 18px ${(props) => (props.$theme ? Colors.Black : Colors.White)}22;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${(props) => (props.$theme ? Colors.Black : Colors.White)};
    outline-offset: 2px;
  }
`;
