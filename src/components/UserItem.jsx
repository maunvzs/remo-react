import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Button, Modal } from 'semantic-ui-react';
import { deleteUser } from '../actions/actionCreators';
import { connect } from 'react-redux';
import '../css/profile-card.css'

class UserItem extends React.Component {
	static propTypes = {
        usrId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        role: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        deleteUser:PropTypes.func,
		//onChange: PropTypes.func
	}

	static defaultProps = {
        usrId:"",
        name: "",
        age:"",
        role:"",
        img:""
    }
    
    deleteUser = (e) => {
        this.props.deleteUser(this.props.usrId);
        this.close();
    }
    
	/*updateValue = (e) => {
		let value = e.target.value;
		this.props.onChange(value);
    }*/
    state = { open: false}

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    
  }

  close = () => this.setState({ open: false })

    
  render() {	
    return (
        <div>
            <Card>
                <Image src={this.props.img} />
                <Card.Content>
                <Card.Header>Name: {this.props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Age: {this.props.age}</span>
                </Card.Meta>
                <Card.Description>Role: {this.props.role}</Card.Description>
                <Icon link name='user delete' title="Delete user" color="red" onClick={this.closeConfigShow(false, true)}/>
                </Card.Content>
            </Card>

            <Modal
                open={this.state.open}
                closeOnEscape={this.closeOnEscape}
                onClose={this.close}
            >
                <Modal.Header>Delete User: {this.props.name}</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete this user?</p>
                </Modal.Content>
                <Modal.Actions>
                <Button onClick={this.close} negative>
                    No
                </Button>
                <Button
                    data-id= {this.props.usrId}
                    onClick={ this.deleteUser}
                    positive
                    labelPosition='right'
                    icon='checkmark'
                    content='Yes'
                />
                </Modal.Actions>
                </Modal>
            </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
	return {
			deleteUser: (usrId) => {
					dispatch(deleteUser(usrId))
			}
	}
}
export default connect(null, mapDispatchToProps)(UserItem);
