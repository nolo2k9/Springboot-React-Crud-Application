import React, {Component} from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import Toasting from './Toasting';
export default class AddProducts extends Component{

        constructor(props){
            super(props);
            this.state = this.startState;
            this.state.toast = false;
            this.productChange = this.productChange.bind(this);
            this.submitProduct = this.submitProduct.bind(this);
        }

        startState = {name: '', brand: '', made: '', price: ''}

        reset =()=> {
            this.setState(() => this.startState);
        }

        submitProduct = event => {
            //Prevent default submit action
            event.preventDefault();

            const product = {
               name :this.state.name,
               brand:this.state.brand,
               madein: this.state.made,
               price: this.state.price
            };

            axios.post("http://localhost:8080/products", product)
            .then(response => {
                if(response.data !=null){
                    this.setState({"toast": true});
                    setTimeout(() => this.setState({"toast": false}), 3000)
                }else{
                     this.setState({"toast": false});
                }
            });
            this.setState(this.startState);
        }

        productChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
        }

       render(){
            const {name, brand,made, price} = this.state
            return(
            <div>
                <div style={{"display":this.state.toast ? "block" : "none"}} >
                     <Toasting children = {{toast: this.state.toast, message : "Product has been successfully saved!!!"}}/>
                </div>

            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header align="center"> Add a Product</Card.Header>
                    <Form onSubmit={this.submitProduct} id="productFormId" onReset={this.reset}>
                     <Card.Body>
                        <Form.Row>
                            <Form.Group controlId = "formGridName">
                              <Form.Label>Product Name</Form.Label>
                                <Form.Control required autoComplete="off"
                                  type="text" name="name"
                                  value = {name}
                                  onChange={this.productChange} required autoComplete="off"
                                  className={"bg-dark text-white"}
                                  placeholder="Enter Product Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId = "formGridBrand">
                              <Form.Label>Brand</Form.Label>
                                <Form.Control required autoComplete="off"
                                  type="text" name="brand"
                                  value = {brand}
                                  onChange={this.productChange}
                                  className={"bg-dark text-white"}
                                  placeholder="Enter Brand Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId = "formGridMade">
                               <Form.Label>Made</Form.Label>
                                    <Form.Control required autoComplete="off"
                                    type="text" name="made"
                                     value = {made}
                                     onChange={this.productChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Made in" />
                                </Form.Group>
                        </Form.Row>
                         <Form.Row>
                            <Form.Group controlId = "formGridPrice">
                              <Form.Label>Price</Form.Label>
                                <Form.Control required autoComplete="off"
                                  type="text" name = "price"
                                   value = {price}
                                   onChange={this.productChange}
                                  className={"bg-dark text-white"}
                                  placeholder="Product Price" />
                            </Form.Group>
                         </Form.Row>

                   </Card.Body>
                   <Card.Footer>
                     <Button size ="sm" variant="success" type="submit">
                       Submit
                     </Button>{''}
                      <Button size ="sm" variant="info" type="reset">
                      Undo
                      </Button>
                   </Card.Footer>
                   </Form>
            </Card>
       </div>
            );
       }
}