import React from "react";

function Loader() {
  return (
    <div className="mt-5">
      <div className="spinner-border mt-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
