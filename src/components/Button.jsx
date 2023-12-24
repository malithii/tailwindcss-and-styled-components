import {styled} from 'styled-components'

const Button = styled.button`
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;

    & :hover{
      background-color: #f0920e;
    }

`
    //using : before hover => because it is not a child property we are adding hover styles to button itself
export default Button;