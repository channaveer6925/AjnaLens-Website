import React, { useState } from 'react';
import styled from 'styled-components'; // You can use your preferred styling approach

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  border: none;
  outline: none;
  background-color: #1b1b1b;
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

const ToggleButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.9%; /* 18.384px */
  letter-spacing: 0.64px;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#343434' : '#1B1B1B')};
  color: #fff;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 130%; /* 52px */
  }
`;

const SlidingTab = ({ setActiveTab, activeTab }) => {
  return (
    <ToggleSwitch>
      <ToggleButton active={!activeTab} onClick={() => setActiveTab(false)}>
        Flip Up
      </ToggleButton>
      <ToggleButton active={activeTab} onClick={() => setActiveTab(true)}>
        Flip Down
      </ToggleButton>
    </ToggleSwitch>
  );
};

export default SlidingTab;
