import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { getUsers } from '../actions/actionCreators';
import UserList from './UserList';
import Form2 from './Form2';
import { connect } from 'react-redux';

class Container extends React.Component {
	static propTypes = {
		users: PropTypes.array,
		getUsers: PropTypes.func
	}

	static defaultProps = {
		users: []
	}

	componentDidMount() {
		this.props.getUsers();
	}	

  render() {	
    return (
      <div style={{ width: "100%", padding: "10px" }}>
		   	<Switch>
					 <Route exact path="/users" render={ () => <UserList users={this.props.users} /> } />
					 <Route exact path="/create" component={ Form2 } />
					 <Route
					 		 exact
							 path="/not-found"
							 render={ () => {  
								return (<h1>Not Found</h1>);
							 } }
						/>
						<Redirect from="/" to="/users" />
						<Redirect from="*" to="/not-found" />
				</Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	users: state.mainReducer.users
})

const mapDispatchToProps = dispatch => {
	return {
			getUsers: () => {
					dispatch(getUsers())
			}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
