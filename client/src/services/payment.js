import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { toast } from "react-toastify";

import axios from "axios";
axios.defaults.baseURL = "https://localhost:5000/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");



toast.configure();

export default function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });

  const [token , setToken] = React.useState([]);

  function handleToken(token, addresses) {

    new Promise((resolve, reject) => {

      console.log(token)

    axios.post(
      "https://localhost:5000/mycheckout",
      { token, product }
    ).then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
    });
  });
    // this.post("http://localhost:5000/register", { username, email, password , role})
    //     .then((res) => {
    //       resolve(res);
    //     })  
    //     .catch((err) => {
    //       reject(err);
    //     });

    // console.log(handleToken)



    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout 
        stripeKey="pk_test_51IorIIJmpNZTNdrVSyS2DzXf6i1NSsowyVHM90rIurlyXK9SXfLKq8rMb4ppoc0zPhcnLff6kUKuOXB90Uy9FyG100kml35YcH"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        // billingAddress
        // shippingAddress
      />
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
