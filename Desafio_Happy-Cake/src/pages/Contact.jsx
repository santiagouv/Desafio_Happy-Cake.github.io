import { Container } from "react-bootstrap";
import Contacto from "../components/Contacto";

const Contact = () => {
    return (
        <Container className="pt-5 text-center">
            <h1 className="mb-4">Cuéntanos, ¿En qué te podemos ayudar?</h1>
            <Contacto />
        </Container>
    );
};
export default Contact;