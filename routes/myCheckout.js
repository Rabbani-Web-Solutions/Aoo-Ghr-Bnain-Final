const stripe = require("stripe")("sk_test_51IorIIJmpNZTNdrVu6tyr310afztNjqlWPVWWxCQcV8GDDC70i8mQU1oZb0SLEKh1D4gcu2z8eV6SjV72yqzJKql00nnMDPZUa");
const uuid = require("uuid/v4"); 



  function mycheckout(req, res){

    res.send("hiii")
  // console.log("Request:", req.body);

  // let error;
  // let status;
  // try {
  //   const { product, token } = req.body;

  //   const customer = stripe.customers.create({
  //     email: token.email,
  //     source: token.id
  //   });

  //   const idempotency_key = uuid();
  //   const charge = stripe.charges.create(
  //     {
  //       amount: product.price * 100,
  //       currency: "usd",
  //       customer: customer.id,
  //       receipt_email: token.email
  //       // description: `Purchased the ${product.name}`,
  //       // shipping: {
  //       //   name: token.card.name,
  //       //   address: {
  //       //     line1: token.card.address_line1,
  //       //     line2: token.card.address_line2,
  //       //     city: token.card.address_city,
  //       //     country: token.card.address_country,
  //       //     postal_code: token.card.address_zip
  //         // }
  //       // }
  //     },
  //     {
  //       idempotency_key
  //     }
  //   );
  //   console.log("Charge:", { charge });
  //   status = "success";
  // } catch (error) {
  //   console.log("Error:", error);
  //   status = "failure";
  // }

  // res.json({ error, status });
}

module.exports = mycheckout;