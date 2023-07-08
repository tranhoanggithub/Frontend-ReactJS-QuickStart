import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (event , id) => {
    // console.log('event 1',event.target.value,id);
    // this.state[id] = event.target.value;
    // this.setState({
    //   ...this.state
    // },()=>{
    //   console.log('check bad state:',this.state)
    // })

    //good code
    let copyState={...this.state};
    copyState[id] = event.target.value;

    this.setState({...copyState});



  };
  checkValideInput = () =>{
    let isValid = true;
    let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
    for(let i=0; i<arrInput.length; i++){
      console.log('check inside loop', this.state[arrInput[i]],arrInput[i]);
      if(!this.state[arrInput[i]]){
        isValid = false;
        alert('Missing parameter ' + arrInput[i]);
        break;
      }
    }
    
    return isValid;
  }
  handleAddNewUser = () => {
    let isValid = this.checkValideInput();
    if(isValid === true){
      //call api create modal
      console.log('check props child', this.props)
      this.props.createNewUser(this.state);
      console.log('data modal', this.state)
    }
    this.checkValideInput();
    console.log('data modal' , this.state)
  }
  render() {
    console.log("check child props", this.props);
    console.log("check child open modal", this.props.isOpen);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input type="text"  onChange={(event)=>{this.handleOnChangeInput(event , "email")}} value={this.state.email}/>
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" onChange={(event)=>{this.handleOnChangeInput(event, "password")}} value={this.state.password}/>
            </div>
            <div className="input-container">
              <label>First name</label>
              <input type="text " onChange={(event)=>{this.handleOnChangeInput(event, "firstName")}} value={this.state.firstName} />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input type="text" onChange={(event)=>{this.handleOnChangeInput(event, "lastName")}} value={this.state.lastName} />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input type="text" onChange={(event)=>{this.handleOnChangeInput(event, "address")}} value={this.state.address} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              // this.toggle();
              this.handleAddNewUser();
            }}
          >
            Save changes
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
            
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
