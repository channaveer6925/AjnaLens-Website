import React, { useEffect, useState } from 'react';
import style from './ContactForm.module.css';
import Indiamap from './../../asets/Indiamap.svg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import fb from '../../asets/modal_fb_icon.png';
import twitter from '../../asets/modal_twitter_icon.png';
import linkedin from '../../asets/modal_linkedin_icon.png';
import link from '../../asets/modal_link_icon.png';

const ContactForm = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organizationName: '',
    jobTitle: '',
    contactNumber: '',
    webLink: '',
    comment: '',
    purpose: '',
  });
  // const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };
  // form submit
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (
      inputValue.firstName === '' ||
      inputValue.lastName === '' ||
      inputValue.email === '' ||
      inputValue.organizationName === '' ||
      inputValue.jobTitle === '' ||
      // inputValue.contactNumber === '' ||
      inputValue.webLink === '' ||
      inputValue.comment === '' ||
      inputValue.purpose === ''
    ) {
      alert('Please fill all the fields');
    } else {
      let payload = [
        {
          Attribute: 'FirstName',
          Value: inputValue.firstName,
        },
        {
          Attribute: 'LastName',
          Value: inputValue.lastName,
        },
        {
          Attribute: 'EmailAddress',
          Value: inputValue.email,
        },
        {
          Attribute: 'mx_Organization_Name',
          Value: inputValue.organizationName,
        },
        {
          Attribute: 'JobTitle',
          Value: inputValue.jobTitle,
        },
        {
          Attribute: 'Mobile',
          Value: inputValue.contactNumber,
        },
        {
          Attribute: 'Website',
          Value: inputValue.webLink,
        },
        {
          Attribute: 'Notes',
          Value: inputValue.comment,
        },
        {
          Attribute: 'mx_Type',
          Value: inputValue.purpose,
        },
        {
          Attribute: 'Source',
          Value: 'AjnaLens Contact us',
        },
      ];
      // payload.push(data);
      axios
        .post(
          'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r8e91f5c9d4fa723aaf2938bc7a435d39&secretKey=d2af1fcd7174415147ee2d647094b220413947b3',
          payload
        )
        .then((res) => {
          setModalShow(true);
        })
        .catch((err) => console.log(err));
      // setFormData(payload);
      setInputValue({
        firstName: '',
        lastName: '',
        email: '',
        organizationName: '',
        jobTitle: '',
        contactNumber: '',
        webLink: '',
        comment: '',
        purpose: '',
      });
    }
  };
  return (
    <div className={style.parentContainer}>
      <section className={style.section1}>
        <div className={style.heading}>
          {/* <div className={style.ContactUs}>Contact us</div> */}
          <div className={style.collabrateText}>
            We'd love to <span className={style.collabrateTextColor}> collaborate!</span>
          </div>
        </div>
        <div className={style.mainContainer}>
          {/* form */}
          <div>
            {/* first name */}
            <div className={style.gridCont}>
              <div>
                <label htmlFor="" className={style.labelTxt}>
                  First Name*
                </label>
                <div className={style.input}>
                  <input type="text" name="firstName" value={inputValue.firstName} onChange={handleChange} required />
                </div>
              </div>
              {/* last name */}
              <div>
                <div>
                  <label htmlFor="" className={style.labelTxt}>
                    Last Name*
                  </label>
                </div>
                <div className={style.input}>
                  <input type="text" name="lastName" value={inputValue.lastName} onChange={handleChange} required />
                </div>
              </div>
              {/* Business email* */}
              <div>
                <div>
                  <label htmlFor="" className={style.labelTxt}>
                    Business email*
                  </label>
                </div>
                <div className={style.input}>
                  <input type="email" name="email" value={inputValue.email} onChange={handleChange} required />
                </div>
              </div>
              {/* Organization name* */}
              <div>
                <div>
                  <label htmlFor="" className={style.labelTxt}>
                    Organization name*
                  </label>
                </div>
                <div className={style.input}>
                  <input
                    type="text"
                    name="organizationName"
                    value={inputValue.organizationName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/*Job title* */}
              <div>
                <div>
                  <label htmlFor="" className={style.labelTxt}>
                    Job title*
                  </label>
                </div>
                <div className={style.input}>
                  <input type="text" name="jobTitle" value={inputValue.jobTitle} onChange={handleChange} required />
                </div>
              </div>
              {/* Contact number* */}
              <div>
                <div>
                  <label htmlFor="" className={style.labelTxt}>
                    Contact number
                  </label>
                </div>
                <div className={style.input}>
                  <input
                    type="text"
                    name="contactNumber"
                    value={inputValue.contactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* website Link */}
            <div className={style.websiteCont} style={{ paddingTop: '10px' }}>
              <div>
                <div>
                  <label htmlFor="" className={style.webTxt}>
                    Website Link*
                  </label>
                </div>
                <div className={style.input1}>
                  <input
                    type="text"
                    className={style.websiteLink}
                    name="webLink"
                    value={inputValue.webLink}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            {/* type cont */}
            <div className={style.typeCont}>
              <div className={style.type}>Type</div>
              <div className={style.inputWithradio}>
                <div className={style.radioInputContainer}>
                  <input
                    type="radio"
                    name="purpose"
                    value="support"
                    id="support"
                    onChange={handleChange}
                    // defaultChecked={true}
                    checked={inputValue.purpose == 'support'}
                    required
                  />
                  <label htmlFor="support">Support</label>
                </div>
                <div className={style.radioInputContainer}>
                  <input
                    type="radio"
                    id="business_enquiry"
                    name="purpose"
                    value="business_enquiry"
                    checked={inputValue.purpose === 'business_enquiry'}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="business_enquiry">Business enquiry </label>
                </div>
                <div className={style.radioInputContainer}>
                  <input
                    type="radio"
                    name="purpose"
                    id="partnership"
                    value="partnership"
                    checked={inputValue.purpose === 'partnership'}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="partnership">Partnership</label>{' '}
                </div>
                <div className={style.radioInputContainer}>
                  <input
                    type="radio"
                    name="purpose"
                    id="purpose"
                    value="others"
                    checked={inputValue.purpose === 'others'}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="purpose">Others</label>
                </div>
              </div>
            </div>
            {/* Mention your purpose below* */}
            <div className={style.MentionyourContainer}>
              <div className={style.mention}>Mention your purpose below*</div>
              <div className={style.MentionyourInput}>
                <textarea
                  placeholder="Write your message here"
                  className={style.text}
                  name="comment"
                  value={inputValue.comment}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={style.submitBtn}>
              <button onClick={() => handleSubmit()}>Submit</button>
            </div>
          </div>
          {/* section two */}
          {/* <hr className={style.line} /> */}
          <div className={style.line}></div>
          <div className={style.sectionTwo}>
            <div className={style.forBusiness}>
              <div className={style.Businesstxt}>
                For <br /> Business
              </div>
              <div className={style.email}>Business@ajnalens.com</div>
            </div>
            {/* **** */}
            <div className={style.forBusiness}>
              <div className={style.Businesstxt}>
                For <br /> Supports
              </div>
              <div className={style.email}>Support@ajnalens.com</div>
            </div>
            <div className={style.forBusiness}>
              <div className={style.Businesstxt}>
                For <br /> Careers
              </div>
              <div className={style.email}>Hr@ajnalens.com</div>
            </div>
            <div className={style.forBusiness}>
              <div className={style.Businesstxt}>
                For <br /> Everything Else
              </div>
              <div className={style.email}>Hello@ajnalens.com</div>
            </div>
          </div>
        </div>
        <div className={style.line2}></div>
        <div className={style.officeAddressContainer}>
          <div className={style.officeAddressText}>Office Address</div>
          <div className={style.officeAddressCont}>
            <div className={style.officeAddressName}>Dimension NXG Private Limited</div>
            <div className={style.officeAddress}>
              Office no. 527 & 528, 5th floor, Lodha Supremus 2, Road number 22, Wagle Estate, Thane – west, Maharashtra
              – 400604.{' '}
            </div>
            <div>CIN: U74999MH2014PTC259269</div>
          </div>
        </div>
      </section>
      {/* map */}
      <div className={style.mapCont}>
        {<img src={Indiamap} alt="indiamap" style={{ zIndex: '1', width: '38rem' }} />}
      </div>
      <Modal show={modalShow} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className={style.modalBody}>
            <h4>Form Submitted Successfully!</h4>
            <p>For updates regarding our upcoming launches and more follow us on given link bellow.</p>
            <div className={style.links}>
              <div className="link">
                <a href="https://www.facebook.com/ajnalens" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="" />
                </a>
              </div>
              <div className="link">
                <a href="https://twitter.com/ajnalens" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="" />
                </a>
              </div>
              <div className="link">
                <a href="https://in.linkedin.com/company/ajnalens" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="" />
                </a>
              </div>
              <div className="link">
                <a href="">
                  <img src={link} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ContactForm;
