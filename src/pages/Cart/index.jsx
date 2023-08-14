import { useState } from 'react';
import { Address } from './Address';
import { Cart } from './Cart';
import { ContactInfo } from './ContactInfo';
import { Gallery } from './Gallery';
import { Summary } from './Summary';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const CheckoutPage = () => {
  const { headset } = useParams();
  const [product, setProduct] = useState({});
  const [section, setSection] = useState('cart');
  const [message, setMessage] = useState('');
  const [credit, setCredit] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    pincode: '',
    state: '',
  });

  const [billingAddress, setBillingAddress] = useState({
    address: '',
    city: '',
    pincode: '',
    state: '',
  });
  const handleDecrease = () => {
    if (credit <= 1) {
      return;
    } else {
      setCredit(credit - 1);
    }
  };

  const handleContact = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (contactInfo?.name === '' || contactInfo?.email === '' || contactInfo?.mobile === '') {
      setMessage('Please Enter All the fields');
      return;
    }
    if (!emailRegex.test(contactInfo?.email)) {
      setMessage('Please Enter Valid Email');
      return;
    }
    if (!mobileRegex.test(contactInfo?.mobile)) {
      setMessage('Please Enter Valid Mobile No.');
      return;
    }
    setMessage('');
    setSection('shipping');
  };

  const handleShipping = () => {
    const pincodeRegex = /^[0-9]{6}$/;
    if (
      shippingAddress?.address === '' ||
      shippingAddress?.city === '' ||
      shippingAddress?.pincode === '' ||
      shippingAddress?.state === ''
    ) {
      setMessage('Please Enter All the fields');
      return;
    }
    if (!pincodeRegex.test(shippingAddress?.pincode)) {
      setMessage('Please Enter Valid Pincode');
      return;
    }
    setMessage('');
    setSection('billing');
  };

  const handleBilling = () => {
    const pincodeRegex = /^[0-9]{6}$/;
    if (
      billingAddress?.address === '' ||
      billingAddress?.city === '' ||
      billingAddress?.pincode === '' ||
      billingAddress?.state === ''
    ) {
      setMessage('Please Enter All the fields');

      return;
    }
    if (!pincodeRegex.test(billingAddress?.pincode)) {
      setMessage('Please Enter Valid Pincode');
      return;
    }
    setMessage('');
    setSection('summary');
  };

  useEffect(() => {
    axios
      .get(`http://192.168.175.17:8282/getProductById?id=64d4d91127358858da0b071e`)
      .then((response) => {
        // Update the state with fetched data
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="row  px-4 desktop-version mt-5">
      <div className="mobile-version col-5  position-relative ">
        {section === 'summary' && (
          <Summary
            section={section}
            setSection={setSection}
            handleDecrease={handleDecrease}
            setCredit={setCredit}
            credit={credit}
            product={product}
            contactInfo={contactInfo}
            shippingAddress={shippingAddress}
            billingAddress={billingAddress}
            setMessage={setMessage}
            type={headset}
          />
        )}
        {section === 'cart' && (
          <Cart
            section={section}
            setSection={setSection}
            handleDecrease={handleDecrease}
            setCredit={setCredit}
            credit={credit}
            product={product}
            type={headset}
          />
        )}
        {section === 'contactInfo' && (
          <ContactInfo
            section={section}
            setSection={setSection}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            message={message}
            handleContact={handleContact}
            setMessage={setMessage}
            type={headset}
          />
        )}
        {section === 'billing' || 'shipping' ? (
          <Address
            setShippingAddress={setShippingAddress}
            shippingAddress={shippingAddress}
            setBillingAddress={setBillingAddress}
            billingAddress={billingAddress}
            section={section}
            setSection={setSection}
            message={message}
            handleShipping={handleShipping}
            handleBilling={handleBilling}
            setMessage={setMessage}
            type={headset}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="col-7  mobile-hide">
        <Gallery type={headset} />
      </div>
    </div>
  );
};
