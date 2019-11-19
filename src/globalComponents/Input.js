import React, { Component } from 'react';
import styled from 'styled-components';

export class Input extends Component {
    render() {
        return (
            <InputContainer>
                <span>{this.props.label || ""}</span>
                <StyledInput onChange={this.props.onChange} placeholder={this.props.placeholder} type={this.props.type} />
            </InputContainer>
        );
    }
}

export default Input;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 22px;
        margin: 2px;
        font-family: sans-serif;
    }
`;

const StyledInput = styled.input`
    border: none;
    box-shadow: -2px 3px 6px 2px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    height: 32px;
    font-size: 24px;
    padding: 5px 8px;

    &:focus {
        outline: none;
    }

`;
