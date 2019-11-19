import React, { Component } from 'react';
import styled from 'styled-components';

export class StyledButton extends Component {
    render() {
        return (
            <Button onClick={this.props.onClick}>{this.props.text || "Button"}</Button>
        );
    }
}

export default StyledButton;

const Button = styled.button`
    border: none;
    box-shadow: -2px 3px 6px 2px rgba(0, 0, 0, 0.09);
    padding: 10px;
    border-radius: 6px;
    background-color: #bd3c4b;
    color: #fff;
    transition: all .15s;
    font-size: 18px;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #75333a;
        transform: translateY(-1.5px);
    }

    &:active {
        transform: translateY(.5px);
    }
`;