import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Navigation extends React.Component{
    render(){
        return(
        <Navbar bg="dark" variant="dark">
        <Link to ={""} className = "navbar-brand">
        </Link>
        <Nav className="mr-auto">
            <Link to ={""} className = "nav-link"> Home</Link>
            <Link to ={"add"} className = "nav-link">Add Product</Link>
        </Nav>
        </Navbar>
        )
    }
}
export default Navigation;