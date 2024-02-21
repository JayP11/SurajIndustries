import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper
      style={{
        // backgroundColor: "var(--clr-primary-indianred)",
        backgroundColor: "var(--clr-grey-1)",
        minHeight: "20vh",
        margin: "10px 0",
        marginTop: "0px",
      }}
    >
      <div>
        <Helmet>
          <title>{`${title} | The Suraj Ind.`}</title>
          <meta name="description" content="The Suraj Ind." />
        </Helmet>
        <div className="section-center">
          <h2
            className="path-heading"
            style={{ color: "white", margin: "0px" }}
          >
            <Link to="/">Home</Link>
            {product && <Link to="/products">/ Products</Link>}/ {title}
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  color: var(--clr-heading-main);
  a {
    color: #c1daf0;
    ${"" /* color: var(--clr-primary-darkred); */}
    padding: 0.5rem;
    font-weight: 600;
    transition: var(--transition);
  }
  a:hover {
    ${"" /* color: #9b98ee; */}
    color:  var(--clr-white);
  }
  @media screen and (max-width: 420px) {
    .path-heading {
      ${"" /* font-size: 16px !important; */}
    }
  }
`;

export default PageHero;
