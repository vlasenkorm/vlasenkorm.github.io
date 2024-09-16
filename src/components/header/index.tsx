import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ToggleSlider from "../switch/themeSwitch";
import { useStore } from "@src/store";
import Logo from "../icons/logo";
import { Colors } from "@src/design/colors";

export const HeaderHeight = 100;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useStore((state) => state.theme);

  return (
    <Wrapper $theme={theme}>
      <div>
        <Logo
          fill={theme ? Colors.BBlack : Colors.BWhite}
          hide={theme ? Colors.BWhite : Colors.BBlack}
        />
      </div>
      X: {useStore((state) => state.width)}
      <br />
      Y: {useStore((state) => state.height)}
      <h3>
        {t("name")}
        <br />
        {t("title")}
      </h3>
      <ToggleSlider />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header<{ $theme: boolean }>`
  height: ${HeaderHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  border-bottom: solid ${(props) => (props.$theme ? Colors.BBlack : Colors.BWhite)} 2px;
  background: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  color: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  svg {
    height: 100px;
    width: 100px;
    cursor: pointer;
  }
`;
