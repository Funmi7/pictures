import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .signup-form {
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    width: 35rem;
    height: 50%;
    padding: 4rem;
    background: #070066;
    border-radius: 0.5rem;
    color: white;
    .input {
      padding: 0.5rem 1rem 0.5rem 1rem;
      font-size: 1.6rem;
      border-radius: 0.5rem;
      border: 0.1rem solid gray;
      margin-bottom: 2rem;
    }
    button {
      margin-bottom: 2rem;
      padding: 0.5rem 9rem 0.5rem 9rem;
      font-size: 1.4rem;
      border-radius: 0.5rem;
      border-style: none;
      background: gray;
      color: white;
      &:hover {
        background: rgb(85, 84, 84);
      }
    }
  }
`;
