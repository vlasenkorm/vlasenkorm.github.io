import styled from "styled-components";
import { useGStore } from "@src/store";
import { useReactToPrint } from "react-to-print";
import DownloadComponent from "../icons/download";
import PrintComponent from "../icons/print";

const DownloadPDF: React.FC = () => {
  const printContext = useGStore((state) => state.printContext);
  const handlePrint = useReactToPrint({
    content: () => (printContext ? printContext.current : null),
    pageStyle: ".divider { break-after: always; }",
  });

  return (
    <StyleButton onClick={handlePrint}>
      <DownloadComponent />/<PrintComponent/>
    </StyleButton>
  );
};

export default DownloadPDF;

const StyleButton = styled.button`
  width: 80px;
  border: 1px solid white;
  color: white;
  background-color: transparent;
  font-size: large;
  &:hover {
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4) inset;
  }
`;
