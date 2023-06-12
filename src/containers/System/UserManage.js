import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {
    constructor(props){
        super(props);
        this.state = {
          arrUsers: []
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
    // Life cycle 
    // Run component:
    // 1.Run constructor => init state
    // 2.Did mount ( set state)
    // 3.Render


    render() {

      let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="title text-center">Manage users with Eric</div>
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
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>

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
