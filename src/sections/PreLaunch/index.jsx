import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './prelaunch.module.css';
import progress from '../../asets/prelaunch/line.png';
import gradientBackground from '../../asets/prelaunch/gradientBackground.png';
import headset from '../../asets/prelaunch/AjnaXrV5R5.png';
import { useNavigate } from 'react-router';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useRef } from 'react';
const PreLaunch = () => {
  const Onview = useRef();
  useDocumentTitle('Pre Launch');
  const [currency, setCurrency] = useState({
    second: '84999',
    third: '99999',
  });
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(-1);
  const [currencyCode, setCurrencyCode] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    fetch('https://s3.ajnavidya.com/ajnalens/ajnaxr/prelaunch/data.json')
      .then((res) => res.json())
      .then((data) => {
        const countryData = [];
        for (let country of data) {
          const { name, currencies } = country;

          countryData.push({ name, currencies });
        }

        setCountries(countryData);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry !== -1) {
      const country = countries[selectedCountry];
      const currency = country.currencies;
      const currencyCode = Object.keys(currency)[0];
      const currencySymbol = currency[currencyCode].symbol;

      setCurrencyCode(currencyCode);
      setCurrencySymbol(currencySymbol);

      // fetch exchange rate
      // fetch(`https://api.fastforex.io/fetch-one?from=USD&to=${currencyCode}&api_key=9c4c3c4c4f-1c4c4c4c4f-q3q3q3q3q3`

      fetch(
        'https://api.freecurrencyapi.com/v1/latest?apikey=xW2Jm5N9C07ucGndp73u63fm7efCdgXf5tL2Bq4c&base_currency=INR'
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const rate = data.data[currencyCode];
          if (!rate) {
            setSelectedCountry(-1);
          }
          setExchangeRate(rate);
        })
        .catch((err) => console.error('error:' + err));
    }
  }, [selectedCountry]);

  const selectCountryHandler = (e) => {
    Onview.current.scrollIntoView({ block: 'center' });
    if (e.target.value === '-1') {
      setSelectedCountry(-1);
    } else {
      setSelectedCountry(e.target.value);
    }
  };

  useEffect(() => {
    const curr = document.getElementById('currency');
    const curr1 = document.getElementById('currency1');
    if (curr) {
      curr.innerHTML = ` <br/> ${
        selectedCountry == -1 ? `₹${currency.third}` : `${currencySymbol}${Math.ceil(currency.third * exchangeRate)}`
      }`;
      curr.innerHTML = curr.innerHTML.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    if (curr1) {
      curr1.innerHTML = `  <br/> ${
        selectedCountry == -1 ? `₹${currency.second}` : `${currencySymbol}${Math.ceil(currency.second * exchangeRate)}`
      }`;
      curr1.innerHTML = curr1.innerHTML.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }, [selectedCountry, exchangeRate]);

  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {/* heading */}
        <div className={styles.heading}>
          <p className={styles.heading1}>AjnaXR SE</p>
          <p className={styles.heading2}>Become a creator of the future</p>
          {/* <button
            onClick={() =>
              navigate('', { state: { exchangeRate, currencyCode, currencySymbol, selectedCountry } })
            }
            className={styles.PreLaunchBtn}
          >
            Booking Closed
          </button> */}
          <button className={styles.PreLaunchBtn}>Booking Closed</button>
        </div>

        {/* plans */}
        <div className={styles.plans} ref={Onview}>
          {/* column1 */}

          {/* column2 */}
          <div className={styles.col1}>
            <div className="w-100">
              <h3 className={styles.colBoldText}>Pre-order at</h3>
              <p className={styles.colText}>&nbsp;</p>
            </div>

            <div className="w-100">
              {/* <p className={styles.colText}>&nbsp;</p> */}
              <h3 className={styles.colBoldText + ' ' + ''} id="currency1">
                {selectedCountry === -1
                  ? `₹${currency.second}`
                  : `${currencySymbol}${Math.ceil(currency.second * exchangeRate)}`}
              </h3>
            </div>
          </div>

          {/* column3 */}
          <div className={styles.col1}>
            <div>
              <h3 className={styles.colBoldText}>Headset price</h3>
              <p className={styles.colText}>
                {/* Beyond 800 <span className={styles.enroll}>Enrollments</span> */}
                &nbsp;
              </p>
            </div>

            <div className="w-100">
              {/* <p className={styles.colText}>&nbsp;</p> */}
              <h3 className={styles.colBoldText + ' ' + ''} id="currency">
                {selectedCountry === -1
                  ? `₹${currency.third}`
                  : `${currencySymbol}${Math.ceil(currency.third * exchangeRate)}`}
              </h3>
            </div>
          </div>
        </div>
        {/* progress bar */}
        <div className={styles.progressBar}>
          <img src={progress} alt="progress" />
        </div>
      </div>
      {/* Country Selector */}
      <div className={styles.countrySelector}>
        <h2>Select Country</h2>
        <select onChange={selectCountryHandler}>
          <option value="-1">None</option>
          {countries?.map((country, idx) => (
            <option key={`country-${idx}`} value={idx}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PreLaunch;
