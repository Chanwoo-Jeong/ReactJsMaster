import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;
const NormalDiv = styled.div``

function App() {
  return (
    <>
      {/* Html + CSS */}
      <div style={{display:"flex"}}>
        <div style={{backgroundColor: "red", width: "100px", height: "100px"}}>
          <span style={{color : "white"}}>BoxOne</span>
        </div>
        <div style={{backgroundColor: "blue", width: "100px", height: "100px"}}>
          <span style={{color : "white"}}>BoxTwo</span>
        </div>
        <div>Html + CSS 로 만든 것</div>
      </div>

      <hr></hr>

      {/* Styled-Components */}
      <Father>
        <BoxOne><Text>BoxOne</Text></BoxOne>
        <BoxTwo><Text>BoxTwo</Text></BoxTwo>
        <NormalDiv>Styled-Components로 만든 것</NormalDiv>
      </Father>
    </>
  );
}

export default App;
