import SyriaLogo from "../../images/logo.svg";

export default function Logo() {
    return (
        <div className="logo">
            <img src={SyriaLogo} alt="Syria Logo" className="syria-logo" />
            <ul>
                <li>Go</li>
                <li><h3>Syria</h3></li>
            </ul>
        </div>
    );
}