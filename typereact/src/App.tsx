import styled, { keyframes } from "styled-components";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const darkMode = {
  textColor: "white",
  backgroundColor: "black",
};

const lightMode = {
  textColor: "black",
  backgroundColor: "whitesmoke",
};

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

interface BoxProps {
  bgcolor : string
}


const Box = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
const Text = styled.span`
  color: white;
`;
const NormalDiv = styled.div``;

const Button = styled.button`
  background-color: aqua;
`;

const Input = styled.input.attrs({ required: true, maxLength: 10 })``;

const animation1 = keyframes`
from {
  transform:rotate(0deg);
  border-radius: 0px;
}
to {
  transform:rotate(360deg);
  border-radius: 100px;
}
`;

const animation2 = keyframes`
0% {
  transform:rotate(0deg);
  border-radius: 0px;
}
50% {
  transform:rotate(360deg);
  border-radius: 100px;
}
100% {
  transform:rotate(0deg);
  border-radius: 0px;
}
`;

const AnimationBox1 = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
  animation: ${animation1} 10s linear infinite;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const AnimationBox2 = styled(AnimationBox1)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animation2} 10s linear infinite;

  /* span {
    font-size: 20px;
    &:hover {
      font-size: 60px;
    }
    &:active {
      font-size: 100px;
    }
  } */

  ${Emoji} {
    font-size: 20px;
    &:hover {
      font-size: 60px;
    }
    &:active {
      font-size: 100px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

interface personobj {
  name : string,
  age : number
}

const SayHello = ({name, age} : personobj) =>{
  return(
    <div>sayHello {name} you are {age}</div>
  )
}


function App() {
  const [mode, setMode] = useState("darkMode");

  const changeMode = () => {
    if (mode === "darkMode") setMode("lightMode");
    if (mode === "lightMode") setMode("darkMode");
  };
  return (
    <>
      <SayHello name={"woony"} age={25}/>
      <ThemeProvider theme={mode === "darkMode" ? darkMode : lightMode}>
        <Wrapper>Hello</Wrapper>
        <button onClick={changeMode}>
          {mode === "darkMode" ? "lightMode" : "darkMode"}
        </button>
      </ThemeProvider>
      <AnimationBox1 />
      <AnimationBox2>
        {/* <span>😊</span> */}
        <Emoji>😊</Emoji>
      </AnimationBox2>

      {/* Styled-Components */}
      <Father>
        <Box bgcolor={"red"}>
          <Text>BoxOne</Text>
        </Box>
        <Circle bgcolor={"blue"}>
          <Text>BoxTwo</Text>
        </Circle>
        <NormalDiv>Styled-Components로 만든 것</NormalDiv>
      </Father>
      <Father>
        <Button>button</Button>
        <Button as={"a"} href={"https://www.naver.com/"}>
          button
        </Button>
        <Input />
        <Input />
      </Father>

      <hr></hr>
      {/* Html + CSS */}
      <div style={{ display: "flex" }}>
        <div
          style={{ backgroundColor: "red", width: "100px", height: "100px" }}
        >
          <span style={{ color: "white" }}>BoxOne</span>
        </div>
        <div
          style={{ backgroundColor: "blue", width: "100px", height: "100px" }}
        >
          <span style={{ color: "white" }}>BoxTwo</span>
        </div>
        <div>Html + CSS 로 만든 것</div>
      </div>
    </>
  );
}

export default App;
