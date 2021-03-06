import React from "react";

const images = `/img`;

const Face = ({ id }) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${images}/base.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "420px",
        width: "300px",
        margin: "0 auto"
      }}
    >
      <img
        src={`${images}/eyes/${id[0]}.jpg`}
        alt="Left Eye"
        style={{
          position: "absolute",
          left: "70px",
          top: "160px",
          height: "45px",
          border: "2px solid rgba(127,127,127,0.5)",
          backgroundColor: "rgba(127,127,127,0.5)",
          color: "#ffffff"
        }}
      />
      <img
        src={`${images}/eyes/${id[1]}.jpg`}
        alt="Right Eye"
        style={{
          position: "absolute",
          left: "160px",
          top: "160px",
          height: "45px",
          border: "2px solid rgba(127,127,127,0.5)",
          backgroundColor: "rgba(127,127,127,0.5)",
          color: "#ffffff"
        }}
      />
      <img
        src={`${images}/mouth/${id[2] % 5}.jpg`}
        alt="Mouth"
        style={{
          position: "absolute",
          left: "80px",
          top: "230px",
          height: "100px",
          border: "2px solid rgba(127,127,127,0.5)",
          backgroundColor: "rgba(127,127,127,0.5)",
          color: "#ffffff"
        }}
      />
    </div>
  );
};

export default Face;
