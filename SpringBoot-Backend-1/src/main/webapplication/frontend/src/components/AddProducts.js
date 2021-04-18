import React, {Component} from 'react';
import {Card, Form, Button} from 'react-bootstrap';

export default class AddProducts extends Component{

        constructor(props){
            super(props);
            this.state={name: '', brand: '', made: '', price: ''};
            this.productChange = this.productChange.bind(this);
            this.submitProduct = this.submitProduct.bind(this);
        }
        submitProduct(event){
            //Prevent default submit action
            alert('Name: ' + this.state.name + ' Brand: ' + this.state.brand + ' Made: ' + this.state.made + ' Price: ' + this.state.price);
            event.preventDefault();
        }
        productChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
        }
       render(){

            return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header align="center"> Add a Product</Card.Header>
                    <Form onSubmit={this.submitProduct} id="productFormId">
                     <Card.Body>
                        <Form.Row>
                            <Form.Group controlId = "formGridName">
                              <Form.Label>Product Name</Form.Label>
                                <Form.Control required
                                  type="text" name="name"
                                  value = {this.state.name}
                                  onChange={this.productChange} required
                                  className={"bg-dark text-white"}
                                  placeholder="Enter Product Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId = "formGridBrand">
                              <Form.Label>Brand</Form.Label>
                                <Form.Control required
                                  type="text" name="brand"
                                  value = {this.state.brand}
                                  onChange={this.productChange}
                                  className={"bg-dark text-white"}
                                  placeholder="Enter Brand Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId = "formGridMade">
                               <Form.Label>Made</Form.Label>
                                    <Form.Control required
                                    type="text" name="made"
                                     value = {this.state.made}
                                     onChange={this.productChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Made in" />
                                </Form.Group>
                        </Form.Row>
                         <Form.Row>
                            <Form.Group controlId = "formGridPrice">
                              <Form.Label>Price</Form.Label>
                                <Form.Control required
                                  type="text" name = "price"
                                   value = {this.state.price}
                                   onChange={this.productChange}
                                  className={"bg-dark text-white"}
                                  placeholder="Product Price" />
                            </Form.Group>
                         </Form.Row>

                   </Card.Body>
                   <Card.Footer>
                     <Button size ="sm" variant="success" type="submit">
                       Submit
                     </Button>
                   </Card.Footer>
                   </Form>
            </Card>

            );
       }
}