import fakedata from "../data";
import { useHistory } from "react-router-dom";
import {
  StyledCounter,
  StyledSimpleText,
  ImageCard,
  ContinerStyle,
} from "./style";

function Home(params) {
  const history = useHistory();
  const { Pain } = fakedata;
  const choix = Pain.map((kabab) => {
    return (
      <ImageCard
        key={kabab.name}
        onClick={() => {
          const myKabab = [{ Pain: kabab }];
          history.push("/etape2", myKabab);
        }}
      >
        <img src={kabab.image.default} alt="pain" />
        <StyledSimpleText>{kabab.name}</StyledSimpleText>
      </ImageCard>
    );
  });
  return (
    <div>
      <StyledCounter>Pain au galette?</StyledCounter>
      <ContinerStyle>{choix}</ContinerStyle>
    </div>
  );
}

export default Home;
