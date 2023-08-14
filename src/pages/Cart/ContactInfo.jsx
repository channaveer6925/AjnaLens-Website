import styles from './cart.module.css';

export const ContactInfo = ({
  section,
  setSection,
  contactInfo,
  setContactInfo,
  message,
  handleContact,
  setMessage,
  type,
}) => {
  const handleBack = () => {
    setSection('cart');
    setMessage('');
  };
  return (
    <div className="py-5">
      <div className={styles.sectionHeading}>Fill contact information</div>
      <div className="d-grid margin-mobile mt-5">
        {message !== '' && <small className="text-danger ">{message}</small>}
        <div className="d-grid">
          <div className={styles.inputLabel}>
            Name<span className="text-danger">*</span>
          </div>
          <input
            value={contactInfo?.name}
            onChange={(e) =>
              setContactInfo({ name: e.target.value, email: contactInfo?.email, mobile: contactInfo?.mobile })
            }
            placeholder="Enter name here"
            type="text"
            className={styles.customInput}
          />
        </div>
        <div className="d-grid">
          <div className={styles.inputLabel}>
            Email ID<span className="text-danger">*</span>
          </div>
          <input
            placeholder="User@Email.com"
            value={contactInfo?.email}
            onChange={(e) =>
              setContactInfo({ email: e.target.value, name: contactInfo?.name, mobile: contactInfo?.mobile })
            }
            type="text"
            className={styles.customInput}
          />
        </div>
        <div className="d-grid">
          <div className={styles.inputLabel}>
            Phone Number<span className="text-danger">*</span>
          </div>
          <input
            placeholder="+910000000000"
            value={contactInfo?.mobile}
            onChange={(e) =>
              setContactInfo({ mobile: e.target.value, name: contactInfo?.name, email: contactInfo?.email })
            }
            type="text"
            className={styles.customInput}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className={styles.cancelBtn} onClick={handleBack}>
            Back
          </button>
          <button className={styles.nextBtn} onClick={handleContact}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
