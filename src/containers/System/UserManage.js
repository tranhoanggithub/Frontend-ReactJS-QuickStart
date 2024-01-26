import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers ,createNewUserService , deleteUserService , editUserService} from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
class UserManage extends Component {
    constructor(props){
        super(props);
        this.state = {
          arrUsers: [],
          isOpenModalUser: false,
          isOpenModalEditUser : false,
          userEdit: {}
        };
    }

    // state = {

    // }

    async componentDidMount() {
      await this.getAllUsersFromReact();
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

    toggleUserEditModal = () => {
      this.setState({
        isOpenModalEditUser:!this.state.isOpenModalEditUser,
      })
    }

    getAllUsersFromReact = async()=> {
      let response = await getAllUsers('ALL');
      if(response && response.errCode === 0 ){
        this.setState({
          arrUsers: response.users
        })

      }
    }
    createNewUser = async (data)=> {
      try{
        let response = await createNewUserService(data);
        console.log('response create user:', response)
        if(response && response.errCode!==0){
          alert(response.errMessage)
        }else{
          await this.getAllUsersFromReact();
          this.setState({
            isOpenModalUser : false
          })
          emitter.emit('EVENT_CLEAR_MODAL_DATA',{'id':'your id'})
        }
      }catch(e){
        console.log(e)  
      }
    }

    handleEditUser   = (user) =>{
      console.log('check edit user' , user);
      this.setState({
        isOpenModalEditUser : true,
        userEdit: user

      })
    }

    doEditUser = async(user) => {
      try{
        let res = await  editUserService(user);
        if(res && res.errCode === 0){
          this.setState({
            isOpenModalEditUser : false
          })
         await this.getAllUsersFromReact()
        }else {
          alert(res.errCode)
        }
      }catch(e){
        console.log (e);
      }


    }
    // Life cycle 
    // Run component:
    // 1.Run constructor => init state
    // 2.Did mount ( set state)
    // 3.Render (re-render)

    handleDeleteUser = async (user) =>{
      console.log('Click delete' , user)
      try{
        let res = await deleteUserService(user.id);
        if( res && res.errCode === 0){
          await this.getAllUsersFromReact();
        }else{
          alert (res.errMessage);
        }
        console.log(res)
      }catch(e){
        console.log(e);
      }
    }
    render() {

      let arrUsers = this.state.arrUsers;
      console.log(arrUsers)
        return (
            <div className="users-container">
              <ModalUser
              isOpen={this.state.isOpenModalUser}
              toggleFromParent={this.toggleUserModal}
              createNewUser = {this.createNewUser}
              // test = {'abc'}
              
              />
              {
                this.state.isOpenModalEditUser&&
              <ModalEditUser
              isOpen={this.state.isOpenModalEditUser}
              toggleFromParent={this.toggleUserEditModal}
              currentUser = {this.state.userEdit}
              editUser = {this.doEditUser}
              // toggleFromParent={this.toggleUserModal}
              // createNewUser = {this.createNewUser}
              />
              } 
                <div className="title text-center">Manage users with Eric</div>
                <div className="mx-1">
                  <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewUser()}><i className="fas fa-plus"></i>Add new users</button>
                </div>
                <div className="users-table mt-4 mx-3">
                <table id="customers">
                <tbody>
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
           <button className="btn-edit " onClick={()=>this.handleEditUser(item)}>EDIT<i className="fas fa-edit"></i></button>
           <button className="btn-delete" onClick={()=> this.handleDeleteUser(item)}>DELETE<i className="fa-sharp fa-regular fa-trash"></i></button>
          </td>
        </tr>
      )
    })
    }
  </tbody>

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
