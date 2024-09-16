import styled from "styled-components";

const SVG = styled.svg`
  right: 40px;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const DownloadComponent: React.FC<{ color?: string }> = ({
  color = "white",
}) => {
  return (
    <SVG
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Interface / Download">
        <path
          id="Vector"
          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SVG>
  );
};

export default DownloadComponent;
