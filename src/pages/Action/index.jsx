import { useLayoutEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { ActionSection } from '../../sections';
import styles from './action.module.css';

const Action = () => {
  useDocumentTitle('Action');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`action ${styles.action}`}>
      <ActionSection />
    </div>
  );
};

export default Action;
