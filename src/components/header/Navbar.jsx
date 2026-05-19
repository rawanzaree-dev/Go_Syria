export default function Navbar({toggle, setToggle}) {
    return (
        <nav style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
            <ul>
                <li onClick={() => setToggle(false)}>
                    <i className="bi bi-house-fill"></i>
                    Home
                </li>
                <li onClick={() => setToggle(false)}>
                    <i className="bi bi-bank"></i>
                    About
                </li>
                <li onClick={() => setToggle(false)}>
                    <i className="bi bi-arrow-right-square-fill"></i>
                    Login
                </li>
                <li onClick={() => setToggle(false)}>
                    <i className="bi bi-person-plus-fill"></i>
                    Register
                </li>
            </ul>
        </nav>
    );
}