import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import '../css/Body.css';

function Body() {
  return (
    <div className="Body">
        <h4>Body</h4>
        <BodyLeft></BodyLeft>
        <BodyRight></BodyRight>
    </div>
  );
}

export default Body;
