import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../stylesheets/style.css';

const Navegar = () => {
    return (
        <Navbar className="barra" variant="dark">
            <Container className="justify-content-start">
                <Navbar.Brand>
                🍰 Happy Cakes 🍰
                </Navbar.Brand>
            </Container>

            <Container className="justify-content-end">
                <Link to='/' className="text-white ms-3 text-decoration-none">
                    🏠 Home
                </Link>
                <Link to='/contacto' className="text-white ms-3 text-decoration-none">
                    📞 Contacto
                </Link>
            </Container>
        </Navbar>
    );
};

export default Navegar;