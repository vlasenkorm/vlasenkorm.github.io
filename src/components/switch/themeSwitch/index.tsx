
import styled from "styled-components";
import { useStore } from "@src/store";

const ToggleSlider: React.FC = () => {

  const theme = useStore((state) => state.theme)
  const changeTheme = useStore((state) => state.changeTheme)


  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        id="toggle"
        checked={theme}
        onChange={() => changeTheme()}
      />
      <Slider htmlFor="toggle" checked={theme}/>
    </Wrapper>
  );
};

export default ToggleSlider;

const Wrapper = styled.div`
  position: relative;
  width: 60px;
  height: 34px;
`
const Checkbox = styled.input`
  display: none;
`

const Slider = styled.label<{checked: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  ${props => props.checked ? 'background-color: #2196f3;' : 'background-color: #ccc;'}
  border-radius: 34px;
  cursor: pointer;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
    ${props => props.checked ? 'transform: translateX(26px);' : 'transform: translateX(0px);'}
  }
`




