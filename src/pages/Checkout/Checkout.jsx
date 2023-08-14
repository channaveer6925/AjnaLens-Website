import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import style from './Checkou.module.css';
import { data } from './data';
import BackIcon from '../../asets/checkout/BackIcon.svg';
import forwordArrow from '../../asets/checkout/forwordArrow.svg';
import productImg from '../../asets/checkout/productimage.svg';
import countries from './countryList';

const Checkout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [choiceModal, setChoiceModal] = useState(false);
  const [isStripe, setIsStripe] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [count, setCount] = useState(1);
  const [generalStatus, setGeneralStatus] = useState(false);
  const [general, setGeneral] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    organization: '',
  });

  const [billingStatus, setBillingStatus] = useState(false);
  const [billing, setBilling] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    pincode: '',
    houseAddress: '',
    areaAddress: '',
    landmark: '',
    city: '',
    state: '',
    radionInput: '',
    country: '',
  });
  const [shippingStatus, setShippingStatus] = useState(false);
  const shippingInital = {
    firstname: '',
    lastname: '',
    phone: '',
    pincode: '',
    houseAddress: '',
    areaAddress: '',
    landmark: '',
    city: '',
    state: '',
    country: '',
  };
  const [shipping, setShipping] = useState(shippingInital);

  // varient change
  const [disableButton, setDisableButton] = useState(false);
  const [disableContinueBtn, setDisableContinueBtn] = useState(false);

  useEffect(() => {
    if (general) {
      setDisableButton(
        !!(general.firstname && general.lastname && general.email && general.phone && general.organization)
      );
    }
  }, [general]);

  const handleGeneralChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGeneral({ ...general, [name]: value });
  };

  // enable disable
  const [disableBillingButton, setDisableBillingButton] = useState(false);

  useEffect(() => {
    if (billing) {
      setDisableBillingButton(
        !!(
          billing.firstname &&
          billing.lastname &&
          billing.phone &&
          billing.pincode &&
          billing.houseAddress &&
          billing.areaAddress &&
          billing.landmark &&
          billing.city &&
          billing.state &&
          billing.country !== 'Select your country'
        )
      );
    }
  }, [billing]);

  const handleBillingChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBilling({ ...billing, [name]: value });
    /* setDisableBillingButton(
      (
        billing.firstname &&
        billing.lastname &&
        billing.phone &&
        billing.pincode &&
        billing.houseAddress &&
        billing.areaAddress &&
        billing.landmark &&
        billing.city &&
        billing.state &&
        billing.country
      )
    ); */
  };

  const [disableShippingButton, setDisableShipingButton] = useState(false);

  useEffect(() => {
    if (shipping) {
      setDisableShipingButton(
        !!(
          shipping.firstname &&
          shipping.lastname &&
          shipping.phone &&
          shipping.pincode &&
          shipping.houseAddress &&
          shipping.areaAddress &&
          shipping.landmark &&
          shipping.city &&
          shipping.state &&
          shipping.country !== 'Select your country'
        )
      );
    }
  }, [shipping]);

  const handleShippingChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShipping({ ...shipping, [name]: value });
    /* setDisableBillingButton(
      (
        shipping.firstname &&
        shipping.lastname &&
        shipping.phone &&
        shipping.pincode &&
        shipping.houseAddress &&
        shipping.areaAddress &&
        shipping.landmark &&
        shipping.city &&
        shipping.state
      )
    ); */
  };

  useEffect(() => {
    if (disableButton && disableBillingButton && disableShippingButton) {
      setDisableContinueBtn(true);
    } else {
      setDisableContinueBtn(false);
    }
  }, [disableButton, disableBillingButton, disableShippingButton]);

  const sameAddress = (e) => {
    setShippingStatus(true);
  };
  const resetShipping = (e) => {
    setShipping(shippingInital);
  };

  //   form data submiting
  const handleformSubmit = (e) => {
    e.preventDefault();
  };

  const handleGeneralFormData = () => {
    setGeneralStatus(true);
    // setBillingStatus(true);
    // console.log('general',general)
  };

  const handleBillingFormData = () => {
    if (shippingStatus) {
      setShipping(billing);
    }
    setBillingStatus(true);
  };

  const handleShippingFormData = () => {
    setShippingStatus(true);
  };

  const handleDecrease = () => {
    if (count <= 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const displayChoice = () => {
    // setChoiceModal((state) => !state);
    // setIsStripe(false);
    if (billing.country === 'United States') {
      displayStripe();
    } else {
      displayRazorpay();
    }
  };

  const displayStripe = () => {
    setIsStripe(true);
  };

  useEffect(() => {
    if (isStripe) {
      fetch('https://pay.ajnavidya.com/create-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: `${general.email}`,
          phone: `${general.phone}`,
          userName: `${general.firstname} ${general.lastname}`,
          addressBilling: {
            line1: billing.houseAddress,
            postal_code: billing.pincode,
            city: billing.city,
            state: billing.state,
            country: countries.filter((country) => country.name === billing.country)[0]?.code,
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((data) => {
          fetch('https://pay.ajnavidya.com/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: '63b6e16ad0d85373b2927f7e',
              qty: count,
              userName: `${general.firstname} ${general.lastname}`,
              customer: data.customer.id,
              email: `${general.email}`,
              phone: `${general.phone}`,
              organization: general.organization,
              addressShipping: {
                line1: shipping.houseAddress,
                postal_code: shipping.pincode,
                city: shipping.city,
                state: shipping.state,
                country: shipping.country,
              },
              addressBilling: {
                line1: billing.houseAddress,
                postal_code: billing.pincode,
                city: billing.city,
                state: billing.state,
                country: billing.country,
              },
              billingAddress: `${billing.firstname} ${billing.lastname}, ${billing.houseAddress}, ${billing.areaAddress}, Landmark - ${billing.landmark}, ${billing.city}, ${billing.state}, PIN - ${billing.pincode}, Contact: ${billing.phone}`,
              shippingAddress: `${shipping.firstname} ${shipping.lastname}, ${shipping.houseAddress}, ${shipping.areaAddress}, Landmark - ${shipping.landmark}, ${shipping.city}, ${shipping.state}, PIN - ${shipping.pincode}, Contact: ${shipping.phone}`,
            }),
          })
            .then((res) => {
              if (res.ok === false) {
                return Promise.reject(res);
              }
              return res.json();
            })
            .then((data) => setClientSecret(data.clientSecret))
            .catch((e) => {
              e.json().then((data) => console.log(data));
              setIsStripe(false);
            });
        })
        .catch((e) => {
          console.log(e);
          setIsStripe(false);
          // e.json().then((data) => console.log(data));
        });
    }
  }, [isStripe]);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    //TODO: Replace: https://pay.ajnavidya.com/order
    const result = await axios.post('https://pay.ajnavidya.com/order', {
      id: '63b6e16ad0d85373b2927f7e',
      qty: count,
      userName: `${general.firstname} ${general.lastname}`,
      email: `${general.email}`,
      phone: `${general.phone}`,
      organization: general.organization,
      billingAddress: `${billing.firstname} ${billing.lastname}, ${billing.houseAddress}, ${billing.areaAddress}, Landmark - ${billing.landmark}, ${billing.city}, ${billing.state}, PIN - ${billing.pincode}, Contact: ${billing.phone}`,
      shippingAddress: `${shipping.firstname} ${shipping.lastname}, ${shipping.houseAddress}, ${shipping.areaAddress}, Landmark - ${shipping.landmark}, ${shipping.city}, ${shipping.state}, PIN - ${shipping.pincode}, Contact: ${shipping.phone}`,
    });

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data.data;

    const options = {
      key: process.env.REACT_APP_RZP_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'Ajnalens',
      description: 'Buy Ajnalens headset',
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        // const result = await axios.post("https://pay.ajnavidya.com/success", data);
        const result = await axios.post('https://pay.ajnavidya.com/success', data);

        navigate(`/success/${data.orderCreationId}`);
      },
      prefill: {
        name: general.firstname + general.lastname,
        email: general.email,
        contact: general.phone,
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const navigate = useNavigate();

  return (
    <>
      {choiceModal && <div className={style.overlay} onClick={displayChoice} />}
      {choiceModal && (
        <div className={style.choiceModal}>
          <div className={style.choiceModalInner}>
            <button onClick={displayRazorpay}>Pay with Razorpay</button>
            <button onClick={displayStripe}>Pay with Stripe</button>

            <button style={{ marginTop: '60px', marginBottom: '-20px' }} onClick={displayChoice}>
              Close
            </button>
          </div>
        </div>
      )}
      {clientSecret && (
        <Navigate
          to="/checkout/stripe"
          state={{
            clientSecret,
            addressBilling: {
              line1: billing.houseAddress,
              postal_code: billing.pincode,
              city: billing.city,
              state: billing.state,
              country: billing.country,
            },
          }}
        />
      )}
      <div className={style.container}>
        <div className={style.backCont}>
          <img src={BackIcon} alt="" />
          <button onClick={() => navigate(-1, { replace: true })}>Back</button>
        </div>
        <div className={style.checkoutText}>Checkout</div>
        {/* 2nd container headset with steps */}
        {data.map((item) => {
          return (
            <div className={style.headsetstepsCont} key={item.id}>
              <div className={style.headsetCont}>
                <img src={productImg} alt="productimage" className={style.headsetimg} />
                <div className={style.namedescCont}>
                  <p className={style.productnameTxt}>{item.name}</p>
                  <p className={style.description}>{item.description}</p>
                  <p className={style.prelaunch}>Pre-booking | Delivery Starts June'2023</p>
                  <div className={style.productdetailsCounter}>
                    <div className={style.counter}>
                      <button className={style.counterButton} onClick={handleDecrease}>
                        -
                      </button>
                      <div className={style.counterline}></div>
                      <p className={style.countervalue}>{count}</p>
                      {/* <p >{count}</p>  */}
                      <div className={style.counterline}></div>
                      <button className={style.counterButton} onClick={() => setCount(count + 1)}>
                        +
                      </button>
                    </div>
                    <div className={style.detailArrowIcon}>
                      <Link to="/ajnaxr#specifications">
                        <div className={style.productLink}>Product details</div>
                      </Link>
                      <div>
                        <img src={forwordArrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.verticalline}></div>
              <div className={style.getstartedCont}>
                <div className={style.getyourheadset}> Your journey to own AjnaXR:</div>

                <div className={style.steps}>
                  <div className={style.sample}>
                    <div className={style.lineNumber}>
                      <p className={style.stepsNumber}>1</p>
                      <div className={style.line}></div>
                    </div>
                    <div className={style.stepsTxt}>
                      Prebook the headset at {billing.country === 'United States' ? `USD 120` : `INR 10000`}.
                    </div>
                  </div>
                  <div className={style.sample}>
                    <div className={style.lineNumber}>
                      <p className={style.stepsNumber}>2</p>
                      <div className={style.line}></div>
                    </div>
                    <div className={style.stepsTxt}>
                      Pay the remaining amount&nbsp;({billing.country === 'United States' ? 'USD 606' : 'INR 50000'})
                      &nbsp;before shipment.
                    </div>
                  </div>
                  <div className={style.sample}>
                    <div className={style.lineNumber}>
                      <p className={style.stepsNumber}>3</p>
                      {/* <div className={style.line}></div> */}
                    </div>
                    <div className={style.stepsTxt}>Get the product delivered to your doorstep.</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={style.generalCont}>
          <div className={style.formCont}>
            {/* general info  */}
            {/* <div className={style.backCont}>
            <img src={BackIcon} alt="" />
            <button>Back</button>
          </div> */}
            <div className={style.tab}>
              <input type="checkbox" id="choose1" className={style.lebelCkeck} />

              <label className={style.formlabel} htmlFor="choose1">
                General Information
              </label>

              {generalStatus ? (
                <div className={style.userData}>
                  <p>
                    {general.firstname} {general.lastname}
                  </p>
                  <p>{general.organization}</p>
                  <p>{general.email}</p>
                  <p>{general.phone}</p>
                </div>
              ) : (
                <></>
              )}
              <div className={style.formcontent}>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">First Name*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="firstname"
                      value={general.firstname}
                      onChange={handleGeneralChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Last Name*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="lastname"
                      value={general.lastname}
                      onChange={handleGeneralChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Email*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="email"
                      value={general.email}
                      onChange={handleGeneralChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Phone number</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="phone"
                      value={general.phone}
                      onChange={handleGeneralChange}
                    />
                  </div>
                </div>
                <div className={style.labelwithinputCont}>
                  <label htmlFor="">Organization name*</label>
                  <input
                    type="text"
                    className={style.inputfield}
                    name="organization"
                    value={general.organization}
                    onChange={handleGeneralChange}
                  />
                </div>
                <div>
                  {!disableButton ? (
                    <button className={style.savebtn} disabled>
                      Save
                    </button>
                  ) : (
                    <button onClick={handleGeneralFormData} className={style.savebtnEnable}>
                      Save
                    </button>
                  )}
                  {/* <button onClick={handleformData}>Save</button> */}

                  {/* {enable ? <p className={style.cool}>true</p> : <button onClick={handleformData}>Save</button>} */}
                </div>
              </div>
            </div>
            {/* ****Billing Address***** */}
            <div className={style.tab}>
              <input type="checkbox" id="choose2" className={style.lebelCkeck} />
              <label className={style.formlabel} htmlFor="choose2">
                Billing Address
              </label>
              {billingStatus ? (
                <div className={style.userData}>
                  <p>
                    {billing.firstname} {billing.lastname}
                  </p>
                  <p>{billing.phone}</p>
                  <p>{billing.pincode}</p>
                  <p>{billing.houseAddress}</p>
                  <p>{billing.areaAddress}</p>
                  <p>{billing.landmark}</p>
                  <p>{billing.city}</p>
                  <p>{billing.state}</p>
                  <p>{billing.country === 'Select your country' ? '' : billing.country}</p>
                </div>
              ) : (
                <></>
              )}
              <div className={style.formcontent}>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">First Name*</label>
                    <input
                      type="text"
                      name="firstname"
                      value={billing.firstname}
                      className={style.inputfield}
                      onChange={handleBillingChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Last Name*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="lastname"
                      value={billing.lastname}
                      onChange={handleBillingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Phone number*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="phone"
                      value={billing.phone}
                      onChange={handleBillingChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Pin code*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="pincode"
                      value={billing.pincode}
                      onChange={handleBillingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Flat, house no., Building, company, apartment*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="houseAddress"
                      value={billing.houseAddress}
                      onChange={handleBillingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Area, street, sector, village*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="areaAddress"
                      value={billing.areaAddress}
                      onChange={handleBillingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Landmark*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="landmark"
                      value={billing.landmark}
                      onChange={handleBillingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Town/City*</label>
                    <input
                      type="text"
                      name="city"
                      value={billing.city}
                      className={style.inputfield}
                      onChange={handleBillingChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">State*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="state"
                      value={billing.state}
                      onChange={handleBillingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Country*</label>
                    <select
                      type="text"
                      className={style.inputfield}
                      name="country"
                      // value={shipping.state}
                      onChange={handleBillingChange}
                    >
                      <option>Select your country</option>
                      {countries
                        .filter((country) => country.name === 'India' || country.name === 'United States')
                        .map((country, idx) => (
                          <option key={idx}>{country.name}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className={style.sameAddress}>
                  <div>Shipping Address same as Billing address?</div>
                  <div>
                    <label htmlFor="yes" className={style.billingsameAsshipping}>
                      Yes
                    </label>
                    <input
                      type="radio"
                      name="address"
                      value={billing.radionInput}
                      className={style.billingsameAsshipping}
                      onClick={() => sameAddress()}
                    />
                    <label htmlFor="yes" className={style.billingNo}>
                      No
                    </label>
                    <input
                      type="radio"
                      name="address"
                      value={billing.radionInput}
                      className={style.billingsameAsshipping}
                      onClick={() => resetShipping()}
                    />
                  </div>
                </div>

                <div>
                  {!disableBillingButton ? (
                    <button className={style.savebtn} disabled>
                      Save
                    </button>
                  ) : (
                    <button onClick={handleBillingFormData} className={style.savebtnEnable}>
                      Save
                    </button>
                  )}
                  {/* <button
                  onClick={() => {
                    setBillingStatus(true);
                  }}
                  className={style.savebtn}
                  // disabled={disableButton}
                >
                  Save
                </button> */}
                </div>
                {/* billing address is same as shipping address */}
              </div>
            </div>

            {/* *****Shipping Address**** */}
            <div className={style.tab}>
              <input type="checkbox" id="choose3" className={style.lebelCkeck} />
              <label className={style.formlabel} htmlFor="choose3">
                Shipping Address
              </label>
              {shippingStatus ? (
                <div className={style.userData}>
                  <p>
                    {shipping.firstname} {shipping.lastname}
                  </p>
                  <p>{shipping.phone}</p>
                  <p>{shipping.pincode}</p>
                  <p>{shipping.houseAddress}</p>
                  <p>{shipping.areaAddress}</p>
                  <p>{shipping.landmark}</p>
                  <p>{shipping.city}</p>
                  <p>{shipping.state}</p>
                  <p>{shipping.country === 'Select your country' ? '' : shipping.country}</p>
                </div>
              ) : (
                <></>
              )}
              <div className={style.formcontent}>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">First Name*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="firstname"
                      value={shipping.firstname}
                      onChange={handleShippingChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Last Name*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="lastname"
                      value={shipping.lastname}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Phone number*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="phone"
                      value={shipping.phone}
                      onChange={handleShippingChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Pin code*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="pincode"
                      value={shipping.pincode}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Flat, house no., Building, company, apartment*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="houseAddress"
                      value={shipping.houseAddress}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Area, street, sector, village*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="areaAddress"
                      value={shipping.areaAddress}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                <div className={style.labelwithinputCont}>
                  <label htmlFor="">Landmark*</label>
                  <input
                    type="text"
                    className={style.inputfield}
                    name="landmark"
                    value={shipping.landmark}
                    onChange={handleShippingChange}
                  />
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Town/City*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="city"
                      value={shipping.city}
                      onChange={handleShippingChange}
                    />
                  </div>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">State*</label>
                    <input
                      type="text"
                      className={style.inputfield}
                      name="state"
                      // value={shipping.state}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                <div className={style.inputcont}>
                  <div className={style.labelwithinputCont}>
                    <label htmlFor="">Country*</label>
                    <select
                      type="text"
                      className={style.inputfield}
                      name="country"
                      value={shipping.country}
                      onChange={handleShippingChange}
                    >
                      <option>Select your country</option>
                      {countries
                        .filter((country) => country.name === 'India' || country.name === 'United States')
                        .map((country, idx) => (
                          <option key={idx}>{country.name}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div>
                  {!disableShippingButton ? (
                    <button className={style.savebtn} disabled>
                      Save
                    </button>
                  ) : (
                    <button onClick={handleShippingFormData} className={style.savebtnEnable}>
                      Save
                    </button>
                  )}
                  {/* <button
                    onClick={handleShippingChange}
                    className={style.savebtn}
                  >
                    Save
                  </button> */}
                </div>
              </div>
            </div>

            <div className={style.horizontalline}></div>
          </div>
          <div className={style.ordersummaryCont}>
            {data.map((el) => {
              return (
                <div className={style.totalpriceCont} key={el.id}>
                  <p className={style.orderSummaryText}>Order Summary</p>
                  <p className={style.summary}>{el.ordersummary}</p>
                  <div className={style.priceCont}>
                    <div className={style.price}>
                      <p className={style.orderProductName}>{el.name}</p>
                      <p>* {count} </p>
                      <p>
                        {billing.country === 'United States' ? '$' : '₹'}
                        {count * (billing.country === 'United States' ? 120 : 10000)}
                      </p>
                    </div>
                    {/* <div className={style.price}>
                      <p>Delivery charge</p>
                      <p className={style.deleverycharge}>
                        {billing.country === "United States" ? "$" : "₹"}
                        {billing.country === "United States" ? 12 : 1000}
                      </p>
                    </div> */}
                    {/* <div className={style.price}>
                      <p>Exclusive 50% discount</p>
                      <p>
                        {billing.country === "United States" ? "$" : "₹"}
                        {(count *
                          (billing.country === "United States" ? 240 : 20000)) /
                          2}
                      </p>
                    </div> */}
                    <div className={style.totalhorizontal}></div>
                    <div className={`${style.price} ${style.totalprice}`}>
                      <p>Total</p>
                      <p>
                        {billing.country === 'United States' ? '$' : '₹'}
                        {count * (billing.country === 'United States' ? 120 : 10000)}
                      </p>
                    </div>
                  </div>
                  <div className={style.priceButton}>
                    <div className={style.price}>
                      {/* <p>{(count * 20000) / 2}</p> */}
                      <div className={style.refundText} style={{ fontSize: '14px' }}>
                        *Exclusive of shipping and other taxes
                      </div>
                    </div>
                    <div className={style.buttonCont}>
                      {!disableContinueBtn ? (
                        <button className={style.payButton} disabled>
                          Continue to Pay
                        </button>
                      ) : (
                        <button className={style.payButton} onClick={displayChoice} style={{ opacity: 1 }}>
                          Continue to Pay
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
