import React from "react";
import notFound from "../img/404-not-found.jpg";
import 'bootstrap/dist/js/bootstrap.min.js'

const notfound = () => {
  return (
    <div className="container">
      <img src={notFound} width="100%" height="auto"  style = {{marginTop: '10%' , marginBottom: '10%'}}/>
     </div>
  );
};

export default notfound;
