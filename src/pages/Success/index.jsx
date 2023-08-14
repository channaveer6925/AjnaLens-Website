import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './success.module.css';

const Success = () => {
  const { oid } = useParams();
  const location = useLocation();
  const [orderData, setOrderData] = useState({});
  const navigate = useNavigate();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location?.search) {
      const searchArr = location?.search?.split('&');
      const paymentIntent = searchArr[0].split('=');
      console.log('paymentIntent', paymentIntent);
      if (searchArr[2].includes('succeeded')) {
        axios.post('http://192.168.175.17:8282/confirm-order', { paymentIntent }).then((res) => {
          setOrderData(res?.data?.data);
        });
      }
      return;
    }
    try {
      axios.get(`http://192.168.175.17:8282/success/info?oid=${oid}`).then((res) => {
        setOrderData(res?.data?.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  return (
    <div className={styles.successSection}>
      <div className={styles.Container}>
        <h1 className={styles.PaymentStatus}>Payment Successful!</h1>
        <p className={styles.orderId}>Order ID: {orderData.id || orderData.payment_id}</p>
        <p className={styles.orderId}>Amount Paid: {+orderData?.amount_paid / 100}</p>
        <p className={styles.message}>
          You have successfully placed your order. More info will be sent on your registered email.
        </p>
      </div>
      <div>
        <button className={styles.homeBtn} onClick={() => navigate('/')}>
          go to home
        </button>
      </div>
    </div>
  );
};

export default Success;
