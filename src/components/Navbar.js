import React, { useEffect } from "react";
import styled from "styled-components";
 import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
  
const Nav = () => {
  const { openSideBar } = useProductsContext();
   
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {/* <img src={IImages.surajInd} alt="" /> */}
            <h1 style={{ margin: "0px" }}>Suraj</h1>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {/* {isLogin && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )} */}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    ${"" /* max-width: var(--max-width); */}
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    ${"" /* color: var(--clr-primary-5); */}
    color: var(--clr-primary-darkred);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    margin-bottom: 0px;
    display: none;
  }
  .cart-btn-wrapper {
    gap: 20px;
    display: none;
  }
  @media (min-width: 1000px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        ${"" /* color: var(--clr-grey-3); */}
        color: black;
        font-size: 1.1rem;
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          ${"" /* border-bottom: 2px solid var(--clr-primary-7); */}
          border-bottom: 2px solid var(--clr-grey-1);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
      flex-direction: row-reverse;
      ${"" /* display: grid; */}
    }
  }
`;

export default Nav;
