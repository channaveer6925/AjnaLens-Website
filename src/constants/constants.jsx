import React from 'react';
import colorPass from '../assets/ColorPassThrough.svg';
import latency from '../assets/Latency.svg';
import lightWeight from '../assets/LightWeightIcon.svg';
import fiveKmini from '../assets/fivekmini.svg';
import documentIcon from '../assets/DocIcon.svg';
import sdkIcon from '../assets/SDKIcon.svg';
import apiIcon from '../assets/APIFilesIcon.svg';
import tutorialIcon from '../assets/TutorialsIcon.svg';
import analyticsIcon from '../assets/AnalyticsIcon.svg';
import SearchIcon from '../assets/search-normal.svg';

export const featureData = [
  { id: 1, name: 'High Resolution', imgUrl: fiveKmini },
  { id: 2, name: 'Full Color Passthrough', imgUrl: colorPass },
  { id: 3, name: 'Ultra Low Latency', imgUrl: latency },
  { id: 4, name: 'Light in weight', imgUrl: lightWeight },
];

export const miniFeatures = [
  { id: 1, featureInfo: '5K (4560 x 2280)', name: 'Resolution ' },
  { id: 2, featureInfo: '1512', name: 'PPI (Pixel Per Inch)' },
  { id: 3, featureInfo: '72 Hz', name: 'Refresh rate' },
];

export const Specifications = [
  {
    id: 1,
    title: 'Processer',
    items: ['Qualcomm XR 2 + Gen 1 chip', 'CPU Octa-core Kryo 585', 'GPU Adreno 650', 'Model NXGXR2306'],
  },
  {
    id: 2,
    title: 'Optics',
    items: [
      'Pancake ',
      'Adjustable IPD 59-68 mm',
      'Adjustable Diopter Support',
      '2 RGB camera (16MP HDR)',
      'ultra low-latency color pass through',
    ],
  },
  {
    id: 3,
    title: 'Display',
    items: [
      'Dual 2.1 inch F-LCD',
      'Resolution 5K (4560 x 2280)',
      'Refresh Rate 72Hz',
      'FoV 95 - 105',
      'PPI 1512',
      'Foveated Rendering Support',
    ],
  },
  {
    id: 4,
    title: 'Device',
    items: ['Weight ~500 gm', '45 min use comfort', 'Color Black', 'Active Cooling'],
  },
  {
    id: 5,
    title: 'Tracking',
    items: ['6DOF Tracking HMD inside-out', 'Tracking Frequency 30 Hz', 'Hand Tracking'],
  },
  {
    id: 6,
    title: 'Buttons',
    items: ['Home', 'Enter ', 'Volume + -', 'Power'],
  },
  {
    id: 7,
    title: 'Audio',
    items: ['Type C support', 'Microphone Support'],
  },
  {
    id: 8,
    title: 'Connectivity',
    items: ['Ports USB-C', 'PC-VR cable Support', 'Wireless Streaming', 'Wi-Fi 6', 'Bluetooth 5'],
  },
  {
    id: 9,
    title: 'System',
    items: ['Android 12', 'Open XR Support', 'RAM 8GB'],
  },
  {
    id: 10,
    title: 'Storage',
    items: ['256GB'],
  },
  {
    id: 11,
    title: 'Battery',
    items: ['5500mAh Capacity', 'Working more than 3h', 'Fast Charge QC 3.0'],
  },
];

export const SE_Specifications = [
  {
    id: 1,
    title: 'Processer',
    items: ['Qualcomm XR 2 + Gen 1 chip', 'CPU Octa-core Kryo 585', 'GPU Adreno 650', 'Model NXGXR2205'],
  },
  {
    id: 2,
    title: 'Optics',
    items: [
      'Pancake ',
      'Adjustable IPD 59-68 mm',
      'Adjustable Diopter 0-500°',
      '2 RGB camera (16MP HDR)',
      'ultra low-latency color pass through',
    ],
  },
  {
    id: 3,
    title: 'Display',
    items: [
      'Dual 2.1 inch F-LCD',
      'Resolution 3200 x 1600',
      'Refresh Rate 90Hz',
      'FoV 95 - 105',
      'PPI 1058',
      'Foveated Rendering Support',
    ],
  },
  {
    id: 4,
    title: 'Device',
    items: ['Weight ~440 gm', '45 min use comfort', 'Color Black', 'Active Cooling'],
  },
  {
    id: 5,
    title: 'Tracking',
    items: ['6DOF Tracking HMD inside-out', 'Tracking Frequency 30 Hz'],
  },
  {
    id: 6,
    title: 'Buttons',
    items: ['Home', 'Enter ', 'Volume + -', 'Power'],
  },
  {
    id: 7,
    title: 'Audio',
    items: ['Stereo Speakers Support', 'Audio Jack support', 'Microphone Support'],
  },
  {
    id: 8,
    title: 'Connectivity',
    items: ['Ports USB-C', 'PC-VR cable Support', 'Wireless Streaming', 'Wi-Fi 6', 'Bluetooth 5'],
  },
  {
    id: 9,
    title: 'System',
    items: ['Android 12', 'Open XR Support', 'RAM 8GB'],
  },
  {
    id: 10,
    title: 'Storage',
    items: ['128GB'],
  },
  {
    id: 11,
    title: 'Battery',
    items: ['5500mAh Capacity', 'Working more than 3h', 'Fast Charge QC 3.0'],
  },
];

export const ForDevSec1 = [
  { id: 1, title: 'Documentation', imgUrl: documentIcon },
  { id: 2, title: 'SDK', imgUrl: sdkIcon },
  { id: 3, title: 'API’s', imgUrl: tutorialIcon },
  { id: 4, title: 'Tutorials', imgUrl: tutorialIcon },
  { id: 5, title: 'Analytics ', imgUrl: analyticsIcon },
];

export const PublisherhubData = [
  { id: 1, title: 'Market insight', imgUrl: SearchIcon },
  { id: 2, title: 'Analytics ', imgUrl: analyticsIcon },
];
