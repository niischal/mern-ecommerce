import React from "react";

function Error({ errorMessage }) {
  return (
    <div>
      <div className="alert alert-danger text-center" role="alert">
        {errorMessage}
      </div>
    </div>
  );
}

export default Error;
