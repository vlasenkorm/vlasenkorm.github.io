
import styled from "styled-components";

const Menu: React.FC = () => {

  return (
    <Wrapper>
      <STitle >Contact</STitle >
      <Contacts>
        <Box>
          Gmail : <br />
          Phone : <br />
          Linkedin : <br />
          Telegram :
        </Box>
        <p>
          vlasenkorm@gmail.com
          <SVG onClick={() => navigator.clipboard.writeText('vlasenkorm@gmail.com')}
            width="800px" height="800px"
            viewBox="0 0 24 24" id="copy_file" data-name="copy file" xmlns="http://www.w3.org/2000/svg">
            <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill="none" />
            <path id="Rectangle" d="M0,0H7l5,5V15H0Z" transform="translate(9 6)" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="1.5" />
            <path id="Rectangle-2" data-name="Rectangle" d="M5.959,15H0V0H7l3.043,3.043" transform="translate(3 3)" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="1.5" />
            <path id="Rectangle_3" data-name="Rectangle 3" d="M6,6H0V0H0" transform="translate(15 6)" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="1.5" />
          </SVG>
          <br />
          +380509672999
          <SVG onClick={() => navigator.clipboard.writeText('+380509672999')}
            width="800px" height="800px"
            viewBox="0 0 24 24" id="copy_file" data-name="copy file" xmlns="http://www.w3.org/2000/svg">
            <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill="none" />
            <path id="Rectangle" d="M0,0H7l5,5V15H0Z" transform="translate(9 6)" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="1.5" />
            <path id="Rectangle-2" data-name="Rectangle" d="M5.959,15H0V0H7l3.043,3.043" transform="translate(3 3)" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="1.5" />
            <path id="Rectangle_3" data-name="Rectangle 3" d="M6,6H0V0H0" transform="translate(15 6)" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="1.5" />
          </SVG>
          <br />
          vlasenkorm
          <SVG onClick={() => open('https://www.linkedin.com/in/vlasenkorm/','_blank')} fill="#ffffff" height="800px" width="800px" version="1.1" id="XMLID_274_" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
            <g id="share">
              <g>
                <path d="M20,24H0V4h11v2H2v16h16v-9h2V24z M12.7,12.7l-1.4-1.4L20.6,2H14V0h10v10h-2V3.4L12.7,12.7z" />
              </g>
            </g>
          </SVG>
          <br />
          @vlasenkorm
          <SVG onClick={() => open('https://t.me/vlasenkorm','_blank')} fill="#ffffff" height="800px" width="800px" version="1.1" id="XMLID_274_" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
            <g id="share">
              <g>
                <path d="M20,24H0V4h11v2H2v16h16v-9h2V24z M12.7,12.7l-1.4-1.4L20.6,2H14V0h10v10h-2V3.4L12.7,12.7z" />
              </g>
            </g>
          </SVG>
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
const STitle = styled.div`
  border-bottom: solid;
  font-size: 26px;
  margin: 10px;
`

const SVG = styled.svg`
  position: absolute;
  margin-top: 3px;
  right: 40px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`

const Contacts = styled.div`
  display: flex;
  justify-content: center;
  line-height: 30px;
`