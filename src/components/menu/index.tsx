
import styled from "styled-components";

const Menu: React.FC = () => {

  return (
    <Wrapper>

        <div>Contact</div>
      
        <Contacts>
        <Box> 
          Gmail : <br />
          Tel : <br />
          Linkedin : <br />
          Telegram :
        </Box>
          <p>
          vlasenkorm@gmail.com<br />
          +380509672999<br />
          vlasenkorm<br />
          @vlasenkorm
      </p>
        </Contacts>
   
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  font-family: Roboto;
  font-size: 18px;
  padding: 10px;
  color: white;
  background-color: #2a2a2a;
  border: solid 1px white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
`
const Box = styled.p`
  text-align: right;
  margin-right: 20px;
`
const Contacts = styled.div`
  display: flex;
  justify-content: center;;
`