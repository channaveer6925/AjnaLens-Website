import styles from './cart.module.css';
import ajnaXRCart from '../../assets/cartView/ajnaXRCart.svg';
import trash from '../../assets/trash.svg';
import percen from '../../assets/percentage.svg';
import promo from '../../assets/promo.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AjnaXRSEOne from '../../assets/cartView/AjnaXRSEOne.svg';

export const Summary = ({
  section,
  setSection,
  credit,
  setCredit,
  handleDecrease,
  setMessage,
  product,
  contactInfo,
  shippingAddress,
  billingAddress,
  type,
}) => {
  const [promoCode, setPromoCode] = useState(false);
  const handleBack = () => {
    setSection('billing');
    setMessage('');
  };

  const productLName = product && product?.name?.split('AjnaXR')[1];
  const productPrice = product && product?.price?.$numberDecimal;
  const formatedPrice = PriceFormater(+productPrice);
  const totalPrice = PriceFormater(credit * +productPrice);
  const navigate = useNavigate();
  const paylaod = {
    id: product?._id,
    product_id: product?._id,
    userName: contactInfo?.name,
    email: contactInfo?.email,
    phone: contactInfo?.mobile,
    billingAddress: billingAddress,
    shippingAddress: shippingAddress,
    qty: credit,
    organization: 'ajnalens',
  };

  const handlePayment = () => {
    axios
      .post('http://192.168.175.17:8282/order', paylaod)
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
        alert('Something went wrong');
      });
  };

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
    //  const result = await axios.post('https://pay.ajnavidya.com/order', );
    const result = await axios.post('http://192.168.175.17:8282/order', paylaod);

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data.data;
    const options = {
      key: 'rzp_test_l3wS6rHGd3GHjO', // Enter the Key ID generated from the Dashboard
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
        const result = await axios.post('http://192.168.175.17:8282/success', data);
        if (result) {
          return navigate(`/success/${data.orderCreationId}`);
        }
      },
      prefill: {
        name: paylaod.userName,
        email: paylaod.email,
        contact: paylaod.phone,
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="py-5">
      <div className={styles.sectionHeading}>Payment</div>
      <div className="row pt-5 pb-0 border-solid">
        <div className="col-9 mobile-version">
          <div className="d-flex">
            {type === 'SE' && (
              <img src={AjnaXRSEOne} alt="product" style={{ objectFit: 'cover' }} width={'72px'} height={'62px'} />
            )}
            {type === 'PRO' && <img src={ajnaXRCart} alt="product" />}
            <div className="d-grid ps-2">
              <div className={styles.productName}>
                Ajna<div className="fw-600 me-1">XR</div> <div className="fw-400">{productLName && productLName}</div>
              </div>
              <div className={styles.productStatus}>Only few left</div>
              <div className={styles.edition}>
                {' '}
                {product && product?.name?.includes('Limited edition') ? 'Limited Edition' : ''}
              </div>
              <div className={styles.deliveryStatus}>{`Estimated delivery ${
                product && product?.name?.includes('Limited edition') ? '15 Oct' : '14 Nov'
              } 2023`}</div>
            </div>
          </div>
        </div>
        <div className="col-3 gy-2 mobile-version mobile-spacing">
          <div className={'fw-400 ' + styles.productName}>₹ {formatedPrice && formatedPrice}</div>
          <div className="d-flex gap-2 mt-2">
            <div className={styles.counter}>
              <button className={styles.btnMinus} onClick={handleDecrease}>
                {' '}
                -{' '}
              </button>
              <div className={styles.btnCredits}>{credit}</div>
              <button className={styles.btnPlus} onClick={() => setCredit(credit + 1)}>
                {' '}
                +
              </button>
            </div>
            <button className={styles.clearButton}>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between pe-5 py-3">
          <div className={styles.totalPrice}>Total Amount</div>
          <div className={styles.totalPrice}>₹ {totalPrice}</div>
        </div>
      </div>

      {promoCode ? (
        <div className="d-flex mt-3">
          <input
            placeholder="Enter Coupon Code"
            type="text"
            readOnly={true}
            className={styles.customInput}
            style={{ width: '100%' }}
          />
          <div>
            <button
              type="button"
              style={{ margin: '10px 0 0 10px' }}
              className={styles.cancelBtn}
              onClick={() => setPromoCode(!promoCode)}
            >
              Reedem
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.couponContainer}>
          <div className="d-flex align-items-center">
            <img src={percen} alt="percentage" /> &nbsp; Add Coupon Code
          </div>
          <div onClick={() => setPromoCode(!promoCode)}>Apply</div>
        </div>
      )}

      {/* <div className={styles.totalPrice}>Promo Codes</div>
      <div style={{ height: '128px', overflowY: 'auto' }}>
        {' '}
        <div className={styles.promoContainer}>
          <div className={styles.promoHeading}>
            <div className="d-flex align-items-center">
              <img src={promo} alt="percentage" /> &nbsp; Add Coupon Code
            </div>
            <div className="fw-600">Apply</div>
          </div>
          <div>Save ₹1000 on this on purchases above ₹2500.</div>
        </div>
        <div className={styles.promoContainer}>
          <div className={styles.promoHeading}>
            <div className="d-flex align-items-center">
              <img src={promo} alt="percentage" /> &nbsp; Add Coupon Code
            </div>
            <div className="fw-600">Apply</div>
          </div>
          <div>Save ₹1000 on this on purchases above ₹2500.</div>
        </div>
      </div> */}

      <div className="d-flex mt-3">
        <button className={styles.cancelBtn} style={{ width: '100%' }} onClick={handleBack}>
          Back
        </button>
        <button className={styles.nextBtn} style={{ width: '100%' }} onClick={displayRazorpay}>
          Pay
        </button>
      </div>
    </div>
  );
};
function PriceFormater(number) {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }
  const formatter = new Intl.NumberFormat('en-IN');
  return formatter.format(number);
}
