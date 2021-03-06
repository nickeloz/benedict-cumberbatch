import React from "react";

import { Link } from "react-router-dom";

import Face from "./face";
import Name from "./name";

const Persona = ({ match }) => {
  const {
    params: { id }
  } = match;
  return (
    <div
      style={{
        textAlign: "center",
        padding: "48px 0",
        boxSizing: "border-box"
      }}
    >
      {id.length !== 7 ? (
        <h2 style={{ color: "#f00" }}>ERROR</h2>
      ) : (
        <div>
          <h2>{`Persona #${match.params.id}`}</h2>
          <Name id={id.slice(0, 4)} />
          <Face id={id.slice(4)} />
          <h2>Share your Benedict with the world!</h2>
          {/* <a
              className='twitter-share-button'
              href='https://twitter.com/intent/tweet?text=I just created my very own Benedict Cmuberbatch! Create yours at https://nchlswhttkr.github.io/benedict-cumberbatch'
            >
              Tweet
            </a> */}
          <Link to="/random">
            <div>GIVE ME A NEW BENEDICT</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Persona;
