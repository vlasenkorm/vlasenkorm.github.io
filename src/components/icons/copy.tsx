import styled from "styled-components";

const SVG = styled.svg`
  margin-top: 3px;
  right: 40px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const CopyComponent: React.FC<{ text: string }> = ({ text }) => {
  return (
    <SVG
      onClick={() => navigator.clipboard.writeText(text)}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      id="copy_file"
      data-name="copy file"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="24"
        height="24"
        fill="none"
      />
      <path
        id="Rectangle"
        d="M0,0H7l5,5V15H0Z"
        transform="translate(9 6)"
        fill="none"
        stroke="#ffffff"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        id="Rectangle-2"
        data-name="Rectangle"
        d="M5.959,15H0V0H7l3.043,3.043"
        transform="translate(3 3)"
        fill="none"
        stroke="#ffffff"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        id="Rectangle_3"
        data-name="Rectangle 3"
        d="M6,6H0V0H0"
        transform="translate(15 6)"
        fill="none"
        stroke="#ffffff"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </SVG>
  );
};

export default CopyComponent;
