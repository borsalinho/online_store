import React from "react";
import { Navbar, Container} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className={"mb-3"}>
            <Container>
                <Navbar.Brand href="/">КупиКросс</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;