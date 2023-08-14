import styles from './cart.module.css';
import ajnaXRCart from '../../assets/cartView/ajnaXRCart.svg';
import AjnaXRSEOne from '../../assets/cartView/AjnaXRSEOne.svg';
import trash from '../../assets/trash.svg';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const Cart = ({ section, setSection, credit, setCredit, handleDecrease, product, type }) => {
  console.log('product', product);

  const productLName = product && product?.name?.split('AjnaXR')[1];
  const productPrice = product && product?.price?.$numberDecimal;
  const formatedPrice = PriceFormater(+productPrice);

  return (
    <>
      {' '}
      <div className="py-5 ">
        <div className={styles.sectionHeading}>
          Items in cart (1) <span className={styles.spanClear}>Clear cart</span>{' '}
        </div>
        <div className="row pt-5 pb-3 border-dashed">
          <div className="col-9 mobile-version">
            <div className="d-flex">
              {type === 'SE' && (
                <img src={AjnaXRSEOne} alt="product" style={{ objectFit: 'cover' }} width={'72px'} height={'62px'} />
              )}
              {type === 'PRO' && <img src={ajnaXRCart} alt="product" />}
              <div className="d-grid ps-2">
                <div className={styles.productName}>
                  Ajna<div className="fw-600 me-1">XR</div> <div className="fw-400">{productLName}</div>
                </div>
                <div className={styles.productStatus}>Only few left</div>
                <div className={styles.edition}>
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
        </div>
      </div>
      <div className="d-flex justify-content-end position-absolute mobile-bottom end-0 ">
        <button className={styles.cancelBtn}>Back</button>
        <button className={styles.nextBtn} onClick={() => setSection('contactInfo')}>
          Next
        </button>
      </div>
    </>
  );
};

function PriceFormater(number) {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }
  const formatter = new Intl.NumberFormat('en-IN');
  return formatter.format(number);
}
