//import { Wrapper } from "./menuComponents";

import { useTranslation } from "react-i18next";
import styled from "styled-components";
import LngSwitch from "../lngSwitch";

const Menu: React.FC = () => {

  const {t, i18n } = useTranslation();

  return (
    <Wrapper>
      <FirstBox>
        <h3>
          {t('name')}<br />
          {t('title')}
        </h3>
      </FirstBox>
      <Box>
      <LngSwitch/>
      </Box>
      <Box><h3>Mail: vlasenkorm@gmail.com</h3></Box>
    </Wrapper>
  );
};

export default Menu;


export const Wrapper = styled.div`
  display: flex;
  border-bottom: solid white 2px;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4) inset;
  background: #2a2a2a;
`
export const Rectangle = styled.div`
  height: 40px;
  border: solid white 2px;
`

export const Box = styled.div`
  width: 200px;
  text-align: center;
`
export const FirstBox = styled.div`
  width: 200px;
  text-align: left;
  margin-left: 20px;
`
