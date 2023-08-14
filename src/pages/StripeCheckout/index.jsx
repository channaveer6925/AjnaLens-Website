import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./stripeCheckout.css";

import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51LKaVTSDhhtPz1VwyZniXQUUtyQK6Pu42F9yax7Jf2JlO3vgoJXKAwnMXrwZrqDy0pTUTisWWS45e8WkJmWC0iug00mJhy4Wxi"
);

const StripeCheckout = () => {
  const location = useLocation();

  const appearance = {
    theme: "stripe",
  };

  return (
    <>
      {location.state.clientSecret && (
        <Elements
          options={{ clientSecret: location.state.clientSecret, appearance }}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default StripeCheckout;
