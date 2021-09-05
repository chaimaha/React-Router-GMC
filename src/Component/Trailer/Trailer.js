import React from "react";
import "./Trailer.css";

const Trailer = ({ location: { state }, history }) => {
  return (
    <div style={{ margin: "5%" }}>
      <h2 className="title">{state.name}</h2>
      <div>
        {state.trailer ? (
          <div className="trailer">
            <iframe
              width="560"
              height="315"
              src={state.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : (
          <h3>No trailer</h3>
        )}
      </div>
      <div className="btns">
        <button className="btn" onClick={() => history.goBack()}>
          Go Back
        </button>
        <button className="btn" onClick={() => history.push("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Trailer;
