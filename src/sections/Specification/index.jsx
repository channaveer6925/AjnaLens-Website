import React from 'react';
import styles from './styles.module.css';

const Specification = () => {
  const data = [
    {
      name: 'Processors',
      xrSpecifcns: ['Qualcomm XR 2 chip', ' CPU Octa-core Kryo 585', 'GPU Adreno 650 ', ' NXGXR2205'],
      newXrSpesfcns: ['Qualcomm XR 2 + Gen 1 chip', 'CPU Octa-core Kryo 585', 'GPU Adreno 650', 'NXGXR2306'],
    },
    {
      name: 'Optics',
      xrSpecifcns: [
        'Pancake',
        'Adjustable IPD 60-68 mm',
        'Adjustable Diopter Support',
        '2 RGB camera',
        'ultra low-latency color see through',
      ],
      newXrSpesfcns: [
        'Pancake',
        'Adjustable IPD 60-68 mm',
        'Adjustable Diopter Support',
        '2 RGB camera (16MP HDR',
        'ultra low-latency color see through',
      ],
    },

    {
      name: 'Display',
      xrSpecifcns: [
        'Dual 2.1 inch F-LCD',
        'Resolution 3200 x 1600',
        'Refresh Rate 90Hz',
        'FoV 95 - 108',
        'PPI 1058',
        'Foveated Rendering Support',
      ],
      newXrSpesfcns: [
        'Dual 2.1 inch F-LCD',
        'Resolution 5K (4560 x 2280)',
        'Refresh Rate 90Hz',
        'FoV 95 - 108',
        'PPI 1512',
        'Foveated Rendering Support',
      ],
    },
    {
      name: 'Device',
      xrSpecifcns: ['Weight ~400 gm', '45 min use comfort', 'Color Black', 'Active Cooling'],
      newXrSpesfcns: ['Weight ~400 gm', '45 min use comfort', 'Color Black', 'Active Cooling'],
    },
    {
      name: 'Tracking',
      xrSpecifcns: ['6DOF Tracking HMD', 'Tracking Frequency 60 Hz', '-', '-'],
      newXrSpesfcns: [
        '6DOF Tracking HMD',
        'Tracking Frequency 60 Hz',
        // '2 Eye tracking cameras',
        'Hand Tracking Interactivity',
      ],
    },
    {
      name: 'Buttons',
      xrSpecifcns: ['Home', 'Back', 'Volume', 'Power'],
      newXrSpesfcns: ['Home', 'Back', 'Volume', 'Power'],
    },
    {
      name: 'Audio',
      xrSpecifcns: ['Stereo Speakers Support', 'Microphone Support'],
      newXrSpesfcns: ['Stereo Speakers Support', 'Microphone Support'],
    },
    {
      name: 'Connectivity',
      xrSpecifcns: ['Ports USB-C', 'PC-VR cable Support', 'Wireless Streaming', 'Wi-Fi 6', 'Bluetooth 5'],
      newXrSpesfcns: ['Ports USB-C', 'PC-VR cable Support', 'Wireless Streaming', 'Wi-Fi 6', 'Bluetooth 5'],
    },
    {
      name: 'System',
      xrSpecifcns: ['Android 10', 'Open XR Support', 'RAM 6GB'],
      newXrSpesfcns: ['Android 12', 'Open XR Support', 'RAM 8GB'],
    },
    {
      name: 'Storage',
      xrSpecifcns: ['Storage 128GB'],
      newXrSpesfcns: ['Storage 256GB'],
    },
    {
      name: 'Battery',
      xrSpecifcns: ['5500mAh Capacity', 'Working more than 3h', 'Fast Charge QC 3.0'],
      newXrSpesfcns: ['5500mAh Capacity', 'Working more than 3h', 'Fast Charge QC 3.0'],
    },
  ];
  return (
    <div className={styles.container} id="specifications">
      <div className={styles.specification}>
        <div className={styles.specHeading}>
          <h1>Product Specification</h1>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productHead}>
            <h3>Product</h3>
            <div className={styles.productType}>
              <p>
                Ajna<span>XR</span>&nbsp; SE
              </p>
              <div className={styles.vl}></div>
              <p>
                Ajna<span>XR</span>&nbsp; Pro
              </p>
            </div>
          </div>
          {data.map((item, id) => (
            <div key={id} className={styles.productBody}>
              <h3>{item.name}</h3>
              <div className={styles.productDesc}>
                <ul>
                  {item.xrSpecifcns.map((spec, id1) => (
                    <li key={id1}>{spec}</li>
                  ))}
                </ul>
                <div className={styles.vl}></div>
                <ul>
                  {item.newXrSpesfcns.map((spec, id2) => (
                    <li key={id2}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specification;
