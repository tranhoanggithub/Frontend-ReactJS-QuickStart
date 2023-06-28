import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService';
import ModalUser from './ModalUser';
class UserManage extends Component {
    constructor(props){
        super(props);
        this.state = {
          arrUsers: [],
          isOpenModalUser: false,
        };
    }

    // state = {

    // }

    async componentDidMount() {
      let response = await getAllUsers('All');
      if(response && response.errCode === 0 ){
        this.setState({
          arrUsers: response.users
        },()=>{
          console.log('check state user 2', this.state.arrUsers);
        });
        console.log('check state user', this.state.arrUsers);
      }
    } 
    handleAddNewUser = ()=> {
      this.setState({
        isOpenModalUser:true,
      })
    }

    toggleUserModal = ()=> {
      this.setState({
        isOpenModalUser: !this.state.isOpenModalUser,
      })
    }
    // Life cycle 
    // Run component:
    // 1.Run constructor => init state
    // 2.Did mount ( set state)
    // 3.Render (re-render)


    render() {

      let arrUsers = this.state.arrUsers;
      console.log(arrUsers)
        return (
            <div className="users-container">
              <ModalUser
              isOpen={this.state.isOpenModalUser}
              toggleFromParent={this.toggleUserModal}
              test = {'abc'}
              
              />
                <div className="title text-center">Manage users with Eric</div>
                <div className="mx-1">
                  <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewUser()}><i className="fas fa-plus"></i>Add new users</button>
                </div>
                <div className="users-table mt-4 mx-3">
                <table id="customers">
  <tr>
    <th>Email</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Address</th>
    <th>Actions</th>
  </tr>
    {arrUsers && arrUsers.map((item , index)=>{
      console.log('eric check map', item , index)
      return(
        
        <tr key= {index}>
          <td>{item.email}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.address}</td>
          <td>
          <i class="fa-solid fa-delete-right"></i>
          <i class="fa-solid fa-house"></i>
          {/* <i class="fas fa-pencil-alt"></i>
          <i class="fa-sharp fa-regular fa-trash"></i> */}
           <button className="btn-edit "><i class="fas fa-edit"></i></button>
           <button className="btn-delete"><i class="fa-sharp fa-regular fa-trash"></i></button>
          </td>
        </tr>
      )
    })
    }
    {/* <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td> */}

</table>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
