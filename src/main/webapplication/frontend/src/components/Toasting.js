import React, {Component} from 'react';
import {Toast} from 'react-bootstrap';

export default class Toasting extends Component{

    render(){
        const toastyStyle = {
             position: 'fixed',
             top: '10px',
             right: '20px',
             zIndex: '1',
             boxShadow: '0 4px, 8px, 0 rgba(0,0,0,0.2(, 0 6px 20px 0 rgba(0,0,0,0.19)'
        };
        return(
           <div style={this.props.children.show ? toastyStyle : null}>
                <Toast className={"border border-success bg-success text-white"} toast={this.props.children.toast}>
                    <Toast.Header className={"bg-success text-white"} closeButton = {false}>
                        <strong className="mr-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.children.message}
                    </Toast.Body>
                </Toast>
           </div>
        );
    };
}
