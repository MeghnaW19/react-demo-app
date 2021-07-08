import Logo from "./Logo";
import ViewTitle from "./ViewTitle";
import '../css/Header.css';

function Header() {
    return (
    <div className="Header" >
        <h4>Header</h4>
        <Logo></Logo>
        <ViewTitle></ViewTitle>
    </div>
    );
}

export default Header;