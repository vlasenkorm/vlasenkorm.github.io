import styled from "styled-components";
import { useStore } from "@src/store";
import { useReactToPrint } from "react-to-print";
import DownloadComponent from "../icons/download";
import { Colors } from "@src/design/colors";

const DownloadPDF: React.FC = () => {
  const printContext = useStore((state) => state.printContext);
  const theme = useStore((state) => state.theme)
  const handlePrint = useReactToPrint({
    content: () => (printContext ? printContext.current : null),
    pageStyle: ".divider { break-after: always; }",
  });

  return (
    <StyleButton onClick={handlePrint} $theme={theme}>
      PDF<DownloadComponent color={theme ? Colors.Black : Colors.White}/>
    </StyleButton>
  );
};

export default DownloadPDF;

const StyleButton = styled.button<{ $theme: boolean }>`
  display: flex;
  justify-content: space-around;
  height: 40px;
  align-items: center;
  border: 1px solid ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  color: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  background-color: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  font-size: large;
  &:hover {
    box-shadow: 0px 0px 25px ${(props) => (props.$theme ? Colors.Black : Colors.White)}44 inset;
  }
`;
