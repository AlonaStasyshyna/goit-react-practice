import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    font-family: sans-serif;
    font-weight: 600;
`;

export const Input = styled.input`
    width: 150px;
    margin-left: 8px;
    padding: 8px, 12px;
    border-radius: 6px;

    &:last-child {
    margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    width: 150px;
    padding: 8px, 12px;
    border-radius: 6px;
    margin-left: 45px;

    font-family: sans-serif;
    font-weight: 600;

    background-color: lawngreen;
    border: transparent;

    &:hover,
    &:focus {
        background-color: skyblue;
    }
`;