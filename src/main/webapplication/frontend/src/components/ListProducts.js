import React, {Component} from 'react';
import {Card, Table, ButtonGroup, Button} from 'react-bootstrap';
import axios from 'axios';
import Toasting from './Toasting';
import {Link} from 'react-router-dom';

export default class ListProducts extends Component{
        constructor(props){
            super(props);
            this.state = {
                products: []
            }
        }
        componentDidMount(){
             this.getProducts();
        }

        getProducts(){
        axios.get("http://localhost:8080/products")
                    .then(response => response.data)
                    .then((data) => {
                        this.setState({products:data})
                    });
        }
        deleteItem = (id) => {
           axios.delete("http://localhost:8080/products/" + id)
           .then(response => {
                if(response.data != null){
                    this.setState({"toast": true});
                    setTimeout(() => this.setState({"toast": false}), 3000)
                    this.setState({
                    products: this.state.products.filter(products => products.id !== id)
                    });
                }else{
                   this.setState({"toast": false});
                   }
           });
        }
       render(){
            return(
            <div>

                <div style={{"display":this.state.toast ? "block" : "none"}} >
                   <Toasting toast = {this.state.toast} message = {"Product has been successfully deleted!!!"} type= {"danger"}/>
                </div>

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
                                  <th>Actions</th>
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
                                        <td class="col-md-1">
                                            <ButtonGroup>
                                                <Link to ={"edit/" + products.id} className = "btn btn-sm btn-outline-primary">Edit</Link>{' '}
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteItem.bind(this, products.id)}>Delete</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    ))
                                }
                              </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
           );
       }
}
