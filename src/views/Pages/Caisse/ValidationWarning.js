


// import ReactDOM from 'react-dom';
// import { useState }  from 'react';
import React from 'react';
import { Modal } from 'react-responsive-modal'
import './ValidationWarning.css'
//import 'react-responsive-modal/styles.css';
import $ from 'jquery';


class ValidationWarning extends React.Component {
   
    constructor(props){
      super(props);
      this.state = {
        open: this.props.open,
      };
   
    }
    handlesupprimer=()=>{
      this.setState({ open: false });
    }
    onOpenModal = () => {
      this.setState({ open: true });
    };
    onCloseModal = () => {
      this.setState({ open: false });
    };
    render() {
      const { open } = this.state;
        return (
            <>
        <div>
          {/* <button type="button" class="btn  btn-outline-light mr-lg-5" onClick={this.onOpenModal}>Modal test suppression </button> */}
         
          <Modal open={open} onClose={this.onCloseModal} center className="modaleW">
     
                            <div className="iconW">
                            <i className="fa fa-exclamation-circle okW"></i>
                            </div>							
                      
                           <div className="msgeW" >
                        <h5 >{this.props.message}</h5>

                        </div>
                        <div className="quit" >
                        <span onClick={this.onCloseModal} className="quitOk">OK</span>
                        </div>
                       
                    
          </Modal>
        </div>

        </>
      );
    }
  }
 
  export default ValidationWarning;