import styled from "styled-components";

const StyledCounter = styled.div`
  font-family: "Fredoka One";
  font-size: 36px;
  color: #4d0302;
  text-align: center;
`;
const StyledSimpleText = styled.div`
  font-family: "Inconsolata";
  font-size: 22px;
  color: #4d0302;
  text-align: center;
`;
const ImageCard = styled.div`
  display: inline-block;
  border: 0.5px solid black;
  padding: 20px 0 20px 0;
  border-radius: 8px;
  margin: 8px;
  overflow: hidden;
  width: 218px;
  text-align: center;
  &:hover {
    border: 2.5px solid black;
  }
`;
const IconeEWithSelect = styled.div`
  padding: 10px 0 20px 0;  
  margin: 8px;
  position: absolute;
  
  display:none;
`;
const ContinerStyle = styled.div`
  text-align: center;
  padding: 30px;s
`;
const ImgStyle = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
`;
const ButtonST = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: green;
  border: 2px solid green;
`;
export {StyledCounter,StyledSimpleText,ImageCard,ContinerStyle,ImgStyle,IconeEWithSelect,ButtonST}