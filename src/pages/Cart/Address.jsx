import { useEffect, useState } from 'react';
import styles from './cart.module.css';

export const Address = ({
  section,
  setSection,
  setShippingAddress,
  shippingAddress,
  setBillingAddress,
  billingAddress,
  message,
  handleShipping,
  handleBilling,
  setMessage,
  type,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('isChecked');
    if (storedValue !== null) {
      setChecked(storedValue === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isChecked', checked);
  }, [checked]);

  const handleBillingAddress = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      setMessage('');
      setBillingAddress(shippingAddress);
    }
  };

  const handleBackBilling = () => {
    setSection('shipping');
    setMessage('');
  };

  const handleBackShipping = () => {
    setSection('contactInfo');
    setMessage('');
  };

  return (
    <>
      {section === 'shipping' && (
        <div className="py-5">
          <div className={styles.sectionHeading}>Shipping Address</div>
          <div className="d-grid margin-mobile mt-5">
            <small className="text-danger ">{message}</small>
            <div className="d-grid">
              <div className={styles.inputLabel}>
                Address<span className="text-danger">*</span>
              </div>
              <input
                placeholder="Enter Address here"
                type="text"
                className={styles.customInput}
                value={shippingAddress?.address}
                onChange={(e) =>
                  setShippingAddress({
                    address: e.target.value,
                    city: shippingAddress?.city,
                    pincode: shippingAddress?.pincode,
                    state: shippingAddress?.state,
                  })
                }
              />
            </div>
            <div className="row">
              <div className="col">
                <div className="d-grid">
                  <div className={styles.inputLabel}>
                    City<span className="text-danger">*</span>
                  </div>
                  <input
                    placeholder="Enter City name"
                    type="text"
                    className={styles.customInput}
                    value={shippingAddress?.city}
                    onChange={(e) =>
                      setShippingAddress({
                        city: e.target.value,
                        address: shippingAddress?.address,
                        pincode: shippingAddress?.pincode,
                        state: shippingAddress?.state,
                      })
                    }
                  />
                </div>
              </div>{' '}
              <div className="col">
                <div className="d-grid">
                  <div className={styles.inputLabel}>
                    Pin-code<span className="text-danger">*</span>
                  </div>
                  <input
                    placeholder="Enter Pin-code"
                    type="text"
                    className={styles.customInput}
                    value={shippingAddress?.pincode}
                    onChange={(e) =>
                      setShippingAddress({
                        pincode: e.target.value,
                        address: shippingAddress?.address,
                        city: shippingAddress?.city,
                        state: shippingAddress?.state,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="d-grid">
              <div className={styles.inputLabel}>
                State<span className="text-danger">*</span>
              </div>
              <input
                placeholder="Enter State name"
                type="text"
                className={styles.customInput}
                value={shippingAddress?.state}
                onChange={(e) =>
                  setShippingAddress({
                    state: e.target.value,
                    address: shippingAddress?.address,
                    city: shippingAddress?.city,
                    pincode: shippingAddress?.pincode,
                  })
                }
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className={styles.cancelBtn} onClick={handleBackShipping}>
                Back
              </button>
              <button className={styles.nextBtn} onClick={handleShipping}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {section === 'billing' && (
        <div className="py-5">
          <div className={styles.sectionHeading}>Billing Address</div>
          <div className="d-grid margin-mobile mt-5">
            <small className="text-danger ">{message}</small>
            <div className="d-grid">
              <div className={styles.inputLabel}>
                Address<span className="text-danger">*</span>
              </div>
              <input
                placeholder="Enter Address here"
                type="text"
                className={styles.customInput}
                value={billingAddress?.address}
                onChange={(e) =>
                  setBillingAddress({
                    address: e.target.value,
                    city: billingAddress?.city,
                    pincode: billingAddress?.pincode,
                    state: billingAddress?.state,
                  })
                }
                disabled={checked}
              />
            </div>
            <div className="row">
              <div className="col">
                <div className="d-grid">
                  <div className={styles.inputLabel}>
                    City<span className="text-danger">*</span>
                  </div>
                  <input
                    placeholder="Enter City name"
                    type="text"
                    className={styles.customInput}
                    value={billingAddress?.city}
                    onChange={(e) =>
                      setBillingAddress({
                        city: e.target.value,
                        address: billingAddress?.address,
                        pincode: billingAddress?.pincode,
                        state: billingAddress?.state,
                      })
                    }
                    disabled={checked}
                  />
                </div>
              </div>{' '}
              <div className="col">
                <div className="d-grid">
                  <div className={styles.inputLabel}>
                    Pin-code<span className="text-danger">*</span>
                  </div>
                  <input
                    placeholder="Enter Pin-code"
                    type="text"
                    className={styles.customInput}
                    value={billingAddress?.pincode}
                    onChange={(e) =>
                      setBillingAddress({
                        pincode: e.target.value,
                        address: billingAddress?.address,
                        city: billingAddress?.city,
                        state: billingAddress?.state,
                      })
                    }
                    disabled={checked}
                  />
                </div>
              </div>
            </div>

            <div className="d-grid">
              <div className={styles.inputLabel}>
                State<span className="text-danger">*</span>
              </div>
              <input
                placeholder="Enter State name"
                type="text"
                className={styles.customInput}
                value={billingAddress?.state}
                onChange={(e) =>
                  setBillingAddress({
                    state: e.target.value,
                    address: billingAddress?.address,
                    city: billingAddress?.city,
                    pincode: billingAddress?.pincode,
                  })
                }
                readOnly={checked}
              />
            </div>
            <div className="d-flex align-items-center pb-3">
              <input type="checkbox" checked={checked} onChange={handleBillingAddress} />
              <div className={styles.instructionCheck}>Use same as shipping address</div>
            </div>
            <div className="d-flex justify-content-end">
              <button className={styles.cancelBtn} onClick={handleBackBilling}>
                Back
              </button>
              <button className={styles.nextBtn} onClick={handleBilling}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
