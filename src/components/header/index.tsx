import { useTranslation } from "react-i18next";
import styled from "styled-components";


export const HeaderHeight = 100;

const Header: React.FC = () => {

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
      </Box>
    </Wrapper>
  );
};

export default Header;


const Wrapper = styled.div`
  height: ${HeaderHeight}px;
  display: flex;
  border-bottom: solid white 2px;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4) inset;
  background: #2a2a2a;
`
const Rectangle = styled.div`
  height: 40px;
  border: solid white 2px;
`

const Box = styled.div`
  width: 200px;
  text-align: center;
`
const FirstBox = styled.div`
  width: 200px;
  text-align: left;
  margin-left: 20px;
`
