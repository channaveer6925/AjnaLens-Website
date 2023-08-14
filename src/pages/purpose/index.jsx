import React, { useLayoutEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Purpose } from '../../sections';

const PurposePage = () => {
  useDocumentTitle('Most Advanced True Mixed Reality Headset- AjnaXR | Upskilling India with #IamSkillFirst Movement');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Purpose />;
};

export default PurposePage;
