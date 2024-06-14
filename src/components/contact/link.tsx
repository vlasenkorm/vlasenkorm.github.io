
import styled from "styled-components";

const SVG = styled.svg`
  margin-top: 3px;
  right: 40px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`

const LinkComponent: React.FC<{ link: string }> = ({ link }) => {
  return <SVG onClick={() => open(link,'_blank')} fill="#ffffff" height="800px" width="800px" version="1.1" id="XMLID_274_" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24" enableBackground="new 0 0 24 24" >
  <g id="share">
    <g>
      <path d="M20,24H0V4h11v2H2v16h16v-9h2V24z M12.7,12.7l-1.4-1.4L20.6,2H14V0h10v10h-2V3.4L12.7,12.7z" />
    </g>
  </g>
</SVG>
};

export default LinkComponent;


