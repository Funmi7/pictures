import React from "react";
import styled from "styled-components";

const LogoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  p {
    font-size: 1.6rem;
  }
  button {
    padding: 0.5rem 2rem 0.5rem 2rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    margin-top: 2rem;
    border-style: none;
    background: #007bff;
    color: white;
    margin: 2rem;
  }
`;

const Logout = (props) => {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace("/login");
  };

  const onCancel = () => {
    props.history.push("/");
  };

  return (
    <LogoutStyled>
      <p>Are you sure you want to log out?</p>
      <div>
        <button onClick={onLogout}>Logout</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </LogoutStyled>
  );
};

export default Logout;
