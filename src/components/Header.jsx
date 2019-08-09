import React from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
    return (
        <Menu.Item>
            <Icon name={props.icon} style={{ color: "white" }} />
            <Link to={props.to}>
                {props.name}
            </Link>
        </Menu.Item>
    );
}

class Header extends React.Component {
    render() {
        return (
            <Menu                
                borderless
                style={{
                    backgroundColor: 'rgba(51, 51, 51, 1)',
                    fontSize: '1.1em',
                    display: 'block',
                    zIndex: 1000,
                    marginTop: '0px',
                    marginBottom: '0px',
                    borderRadius: 0,
                    borderBottom: '1px solid black'
                }}
            >
                <Container fluid>
                  <MenuItem icon="user" to="/users" name="Users" />
                  <MenuItem icon="save" to="/create" name="Create" />
                </Container>
            </Menu>
        )
    }
}

export default withRouter(Header)