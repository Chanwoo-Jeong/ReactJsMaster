import React, { useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

function Html2Canvas() {
  const captureRef = useRef<HTMLDivElement>(null);

  const down = () => {
    if (captureRef.current) {
      html2canvas(captureRef.current).then(function (canvas) {
        // 캡처한 이미지를 캔버스에서 데이터 URL로 변환합니다.
        const dataURL = canvas.toDataURL();

        // 이미지를 다운로드할 링크를 생성합니다.
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "capture.png";

        // 링크를 클릭하여 이미지를 다운로드합니다.
        link.click();
      });
    }
  };

  return (
    <>
      <Wrapper>
        <CaptureDiv id="captureArea" ref={captureRef}>
          <Header>Hello world!</Header>
        </CaptureDiv>
        <DownBtn onClick={down}>다운로드</DownBtn>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CaptureDiv = styled.div`
  width: 200px;
  height: 200px;
  margin: 5rem auto;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h4`
  color: black;
`;

const DownBtn = styled.button`
 width: 200px;
`;

export default Html2Canvas;
