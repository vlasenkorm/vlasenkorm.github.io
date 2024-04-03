import styled from "styled-components";

const Proverb: React.FC = () => {

  return (
    <>
      <Box>"What is evil? Everything that comes from weakness."<br />
        "Was it schlecht? Alles, was aus der Schwäche stammt."
      </Box>
      <BottomBox>
      <SVGLoader  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="spin"
          cx="50" cy="50" 
          fill="none"
          r="44" strokeWidth="10" 
          stroke="white" 
          strokeDasharray="200 1400"
          strokeLinecap="round"
        />
      </SVGLoader>
      <FontBox>
        F.W. Nietzsche “Antichrist”<br />
        Friedrich Wilhelm Nietzsche: Der Antichris
      </FontBox>
      </BottomBox>
    </>
  );
};

export default Proverb;

const SVGLoader = styled.svg`
  height: 30px;
  width: 30px;

  @keyframes progress {
    0% {
      stroke-dasharray: 1, 800;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 300, 800;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 300, 800;
      stroke-dashoffset: -315px;
    }
  }

  .spin {
    animation: progress 4s linear infinite;
  }
`

const BottomBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`
  
const Box = styled.div`
  font-family: Kalam;
  font-size: 18px;
  width: 100%;
  text-align: center;
`

const FontBox = styled.div`
  font-family: Roboto;
  width: 100%;
  margin-top: 20px;
  text-align: right;
`
