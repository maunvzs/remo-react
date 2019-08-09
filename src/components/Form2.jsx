import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import { postUsers } from '../actions/actionCreators';
import { connect } from 'react-redux';

class Form2 extends React.Component {
	static propTypes = {
		postUsers: PropTypes.func
	}

	static defaultProps = {
		users: []
	}

	state = {
		name:"",
		age:"",
		role:"",
	}
	

	handleInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]:value
		});
		
	}

	submit = (e)=> {
		e.preventDefault();
		this.props.postUsers(this.state);
		this.props.history.push("/users");
	}

  render() {	
    return (
			<Form style={{ width: "70%", padding: "10px", marginLeft:"15%" }}>
				<Form.Field>
					<label>Name:</label>
					<input placeholder='Name' name="name" value={this.state.name} onChange ={this.handleInputChange}/>
				</Form.Field>
				<Form.Field>
					<label>Age:</label>
					<input placeholder='Age' name="age" type='number' value={this.state.age} onChange ={this.handleInputChange} />
				</Form.Field>
				<Form.Field>
					<label>Role:</label>
					<input placeholder='Role' name="role" value={this.state.role} onChange ={this.handleInputChange}/>
				</Form.Field>
				
				<Button type='submit' onClick={this.submit}>Submit</Button>
			</Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return {
			postUsers: (usrInfo) => {
					dispatch(postUsers(usrInfo))
			}
	}
}
export default connect(null, mapDispatchToProps)(Form2);

