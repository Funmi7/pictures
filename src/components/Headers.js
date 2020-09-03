import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.div`
font-size: 1.6rem;
  .nav-link {
    display: flex;
    justify-content: space-between;
    text-align: center;
    background: black;
    height: 10vh;
    padding-top: 2rem;
    
    .nav {
      text-decoration: none;
      color: white;
      font-size: 1.3rem;
      &:hover {
            color: #007bff;

        }
    }
    .navs {
      display: flex;
      justify-content: space-around;
    }
    .logout {
      margin-left: 2rem;
    }
  }
  h1 {
    margin-top: 3rem;
    font-size: 3.2rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const Headers = () => {
  return (
    <HeaderStyled>
      <div className="nav-link">
        <div>
          <NavLink className="nav" to="/">
            Pictures
          </NavLink>
        </div>
        <div className="navs">
          <NavLink className="nav" to="/upload">
            Upload
          </NavLink>
          <NavLink className="nav logout" to="/logout">
            Logout
          </NavLink>
        </div>
      </div>
      <h1>Pictures Gallery Website</h1>
      <p>A place where you can upload random pictures for others to see</p>
    </HeaderStyled>
  );
};

export default Headers;
