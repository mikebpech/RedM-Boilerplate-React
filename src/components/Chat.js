import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../globalComponents/Input';
import StyledButton from '../globalComponents/StyledButton';
import { postClose, sendMessage } from '../utils/api';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }
    render() {
        return (
            <ChatWrapper>
                <Chat id="chat">
                    
                </Chat>
                <Menu>
                    <Input onChange={e => this.setState({ message : e.target.value })} placeholder="add a message..." value={this.state.message} />
                    <StyledButton onClick={() => sendMessage(this.state.message)} text="Submit" />
                    <StyledButton onClick={() => postClose()} text="Close" />
                </Menu>
            </ChatWrapper>
        );
    }
}

export default Login;

const Chat = styled.ul`
    color: #404040;
    font-family: "Roboto", sans-serif;
    padding: 10px;
    margin: 0;

    li {
        color: #fff;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 10px;
`

const ChatWrapper = styled.div`
    width: 500px;
    height: 260px;
    background-color: #efefefd4;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LoginWrapper = styled.div`
    position: absolute;
    width: 600px;
    height: 400px;
    top: calc(50% - 200px);
    left: calc(50% - 300px);
    background: #232323eb;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: -2px 3px 6px 2px rgba(0, 0, 0, 0.49);
`;