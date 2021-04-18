import React, {Component} from 'react';
import {Col, Nav, Navbar, Container} from 'react-bootstrap'
export default class Footer extends Component{

    render(){

        let year = new Date().getFullYear();
        return(
            <Navbar fixed = "bottom" bg="dark" variant="dark">
                 <Container>

                       <Col lg ={12} className = "text-center text-muted">
                          <div>{year} - {year + 1}, All rights reserved by The Tech Hub</div>
                       </Col>

                 </Container>
            </Navbar>
        );
    }
}
