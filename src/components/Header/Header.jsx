import logo from '../../content/images/misc/logo.png';
import "./Header.css"
import "../../content/Site.css"
export default function Header() {

    return <header>
        <div className="flex-inline">
            <img src={logo} alt="cjt devs" />
            <h1 style={{marginTop: "15px"}}>Devs</h1>
        </div>
        <div className="flex-row">
            <span>Let us build your next website or mobile app</span>
        </div>
    </header>
}