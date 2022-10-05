import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
    margin: 25px ;
    margin-left: 25px;
    padding: 20px 0px;
    margin-right: 25px;
    background: #111111;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12px );
    -webkit-backdrop-filter: blur( 12px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow: hidden;
`

const StyledNavbarBrand = styled(Navbar.Brand)`
    color : rgba(255,102,203);
    font-weight: 600;
    margin: 0px 0px 0px 8px;
    font-family: 'JetBrains Mono', monospace;
    transition: 1s;
    &:hover{
        color: white;
        text-decoration: underline;
    }
`

const StyledToggle = styled(Navbar.Toggle)`
`

const StyledOffcanvas = styled(Navbar.Offcanvas)`
    background: #000;
`

const StyledOffcanvasBody = styled(Offcanvas.Body)`
    background: rgba( 0, 0, 0, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12px );
    -webkit-backdrop-filter: blur( 12px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const StyledNavLink = styled(Nav.Link)`
    color: white;
    font-size: 30px;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    color : rgba(255,102,203);
    font-weight: 600;
    &:hover{
        color: white;
        text-decoration: underline;
    }
`




function NavigationBar() {
    return (
        <>
            <StyledNavbar key={false} bg={"transparent"} expand={false} className="mb-3">
                <Container fluid>
                    <StyledNavbarBrand href="#">CONCETTO</StyledNavbarBrand>
                    <StyledToggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="end"
                    >
                        {/* <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                            </Offcanvas.Title>
                        </Offcanvas.Header> */}
                        <StyledOffcanvasBody>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <StyledNavLink href="#">HOME</StyledNavLink>
                            </Nav>
                        </StyledOffcanvasBody>
                    </Navbar.Offcanvas>
                </Container>
            </StyledNavbar>
        </>
    );
}

export default NavigationBar;