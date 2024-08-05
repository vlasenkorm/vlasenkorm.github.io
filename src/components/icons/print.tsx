import styled from "styled-components";

const SVG = styled.svg`
  margin-top: 3px;
  right: 40px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const PrintComponent: React.FC = () => {
  return (
    <SVG
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        stroke="#ffffff"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 17H5a1 1 0 01-1-1v-5a2 2 0 012-2h12a2 2 0 012 2v5a1 1 0 01-1 1h-3M8 4h8v5H8V4zm0 11h8v4H8v-4z"
      />
      <circle cx="7" cy="12" r="1" fill="#ffffff" />
    </SVG>
  );
};

export default PrintComponent;
