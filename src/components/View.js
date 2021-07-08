import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import '../css/View.css';

function View() {
  return (
    <div className="View">
      <h4>View</h4>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default View;
