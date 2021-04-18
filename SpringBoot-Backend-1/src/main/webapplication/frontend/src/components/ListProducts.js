import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
import axios from 'axios';

export default class ListProducts extends Component{
        constructor(props){
            super(props);
            this.state = {
                products: []
            }
        }
        componentDidMount(){
            axios.get("http://localhost:8080/products")
            .then(response => response.data)
            .then((data) => {
                this.setState({products:data})
            });
        }
       render(){
            return(
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header align="center"> Product Manager</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                             <thead>
                                <tr>
                                  <th>Product ID</th>
                                  <th>Name</th>
                                  <th>Brand</th>
                                  <th>Built</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                    this.state.products.length ===0 ?
                                    <tr align="center">
                                      <td colSpan="6">No Products Available</td>
                                    </tr>:
                                    this.state.products.map((products) => (
                                    <tr key={products.id}>
                                        <td>{products.id}</td>
                                        <td>{products.name}</td>
                                        <td>{products.brand}</td>
                                        <td>{products.madein}</td>
                                        <td>{products.price}</td>
                                    </tr>
                                    ))
                                }
                              </tbody>
                        </Table>
                    </Card.Body>
                </Card>
           );
       }
}
