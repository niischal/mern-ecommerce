import React from "react";

function Success({ successMessage }) {
  return (
    <div>
      <div className="alert alert-success text-center" role="alert">
        {successMessage}
      </div>
    </div>
  );
}

export default Success;
