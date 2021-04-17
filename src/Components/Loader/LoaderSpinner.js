import React from "react";
import Loader from "react-loader-spinner";
import './Loader.css';

const LoaderSpinner = () => {
  return (
    <div className="LoaderWrapper">
      <Loader className="test" type="Bars" color="red" height={50} width={50} />
      <p>Loading content...</p>
    </div>
  );
};

export default LoaderSpinner;
