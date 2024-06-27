import styled from "styled-components";
import Copy from "../icons/copy";
import Link from "../icons/link";
import { useGStore } from "@src/store";


const Contact: React.FC = () => {

  return (
    <Wrapper $theme={useGStore((state) => state.theme)}>
      <Title >Contact</Title >
      <Contacts>
        <div>Gmail : vlasenkorm@gmail.com <Copy text={'vlasenkorm@gmail.com'} /></div>
        <div>Phone : +380509672999 <Copy text={'+380509672999'} /></div>
        <div>Linkedin : vlasenkorm <Link link={'https://www.linkedin.com/in/vlasenkorm/'} /></div>
        <div>Telegram : @vlasenkorm <Link link={'https://t.me/vlasenkorm'} /></div>
      </Contacts>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div<{$theme: boolean}>`
  font-family: Roboto;
  font-size: 18px;
  padding: 10px;
  border: solid 1px ${props => props.$theme ? '#2a2a2a' :'#f8f8f8'};
  background: ${props => props.$theme ? '#f8f8f8' : '#2a2a2a' };
  color: ${props => props.$theme ? 'black' : '#f8f8f8' };
  box-shadow: 0px 0px 25px ${props => props.$theme ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)' }  inset;
`

const Title = styled.div`
  border-bottom: solid;
  font-size: 26px;
  margin: 10px;
`

const Contacts = styled.div`
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding: 10px;
`