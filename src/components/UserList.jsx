import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
//import { getUsers } from '../actions/actionCreators';
import UserItem from './UserItem';
import { deleteUser } from '../actions/actionCreators';

class UserList extends React.Component {
	static propTypes = {
		users: PropTypes.array,
		getUsers: PropTypes.func,
		deleteUser:PropTypes.func
	}

	static defaultProps = {
		users: []
	}

	// onDeleteUser = (userId)=>{
	// 	console.log('dlte',userId);
		
	// }

	/*componentDidMount() {
		getUsers();
	}	*/

  render() {
	const { users } = this.props;
    return (

      <Container>
	  	{
			  users && users.length > 0
			  	&& users.map((user) => {
					  return (
							<UserItem key={user.id} usrId = {user.id} name={user.name} age ={user.age} role={user.role} img ={user.img}/>
					  );
				  })
		}		   	
      </Container>
    );
  }
}

/*const mapStateToProps = state => ({
    users: state.mainReducer.users
})*/

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: () => {
            dispatch(deleteUser())
        }
    }
}
export default connect(mapDispatchToProps)(UserList);
//export default connect(mapStateToProps,mapDispatchToProps)(UserList);
//export default UserList;