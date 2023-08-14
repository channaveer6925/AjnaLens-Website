import { useLayoutEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { ContactForm } from '../../sections';
import styles from './contactUs.module.css';

const ContactUs = () => {
  useDocumentTitle('Contact Us');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`contactUs ${styles.contactUs}`}>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
