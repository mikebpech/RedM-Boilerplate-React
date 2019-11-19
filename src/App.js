import React, { Component } from 'react';
import styled from 'styled-components';
import Chat from './components/Chat';

export default class App extends Component {
    render() {
        return (
        <AppContainer>
            <Chat />
        </AppContainer>
        );
    }
}

const AppContainer = styled.div`
  position: relative;
  height: 90vh;
  width: 100vw;
  overflow-y: hidden;
  background-color: transparent;
  color: #fff;
`;
