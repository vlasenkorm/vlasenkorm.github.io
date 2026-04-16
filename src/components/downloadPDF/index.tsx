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
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 160px;
  height: 52px;
  align-items: center;
  border: 1px solid ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  border-radius: 10px;
  color: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  background-color: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0 16px;
  transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease;
  &:hover {
    box-shadow:
      0px 0px 22px ${(props) => (props.$theme ? Colors.Black : Colors.White)}55 inset,
      0px 0px 18px ${(props) => (props.$theme ? Colors.Black : Colors.White)}22;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${(props) => (props.$theme ? Colors.Black : Colors.White)};
    outline-offset: 2px;
  }
`;
