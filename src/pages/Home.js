import React from "react";
import sampleImage from "../assets/sample1.jpg";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // 화면 전체 높이를 최소한으로 설정
    textAlign: "center",
    padding: "20px"
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "20px"
  };

  const textStyle = {
    fontSize: "1.5rem",
    color: "#333"
  };

  return (
    <div style={containerStyle}>
      <h1>Via's cosmetics test</h1>
      <img src={sampleImage} alt="Sample Image" style={imageStyle} />
      <h4 style={textStyle}>buy</h4>
      <h3 style={textStyle}>010-1234-1234</h3>
      <h4 style={textStyle}>account</h4>
      <h3 style={textStyle}>우리은행 : 1002-444-678945</h3>
    </div>
  );
};

export default Home;
