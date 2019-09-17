import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

function NavWrapper(props) {
  return (
    <>
      {props.navState.map((link, index) => {
        return (
          <div key={index}>
            <Link to={link.href}>
              {link.hasOwnProperty("image") ? (
                <img src={link.image} />
              ) : (
                link.title
              )}
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default NavWrapper;
