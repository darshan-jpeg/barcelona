import './Navbar.css'

function Navbar() 
{
    return(
        <nav className ="navbar">
            <ul className = "nav-links">
                <li><a href = "#home" className="nav-item">Home</a></li>
                <li><a href = "#merch" className="nav-item">Merch</a></li>
                <li><a href = "#login" className="nav-item">Login</a></li>
                


            </ul>
        </nav>
    );
}
export default Navbar;
