jsx
import React, { useEffect, useState } from 'react';
import style from './index.module.css';
import Indiamap from './../../asets/Indiamap.svg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import fb from '../../asets/modal_fb_icon.png';
import twitter from '../../asets/modal_twitter_icon.png';
import linkedin from '../../asets/modal_linkedin_icon.png';
import link from '../../asets/modal_link_icon.png';

const Contactus = () => {
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
'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r60a0ef5b8ccbfefb7e5a6336bc3f1ff9&secretKey=3bf8f2b558a07b093dedf1d9e97bb800dc8640fc',
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
<div className={style.contactTxt}>
<h1>
<span>Contact us</span> for more info
</h1>
</div>
<div className={style.mainContainer}>
{/_ form _/}
<div>
{/_ first name _/}
<div className={style.gridCont}>
<div>
<label htmlFor="" className={style.labelTxt}>
First Name*
</label>
<div className={style.input}>
<input type="text" name="firstName" value={inputValue.firstName} onChange={handleChange} required />
</div>
</div>
{/* last name _/}
<div>
<div>
<label htmlFor="" className={style.labelTxt}>
Last Name_
</label>
</div>
<div className={style.input}>
<input type="text" name="lastName" value={inputValue.lastName} onChange={handleChange} required />
</div>
</div>
{/_ Business email_ _/}
<div>
<div>
<label htmlFor="" className={style.labelTxt}>
Business email_
</label>
</div>
<div className={style.input}>
<input type="email" name="email" value={inputValue.email} onChange={handleChange} required />
</div>
</div>
{/_ Organization name_ _/}
<div>
<div>
<label htmlFor="" className={style.labelTxt}>
Organization name_
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
{/_Job title_ _/}
<div>
<div>
<label htmlFor="" className={style.labelTxt}>
Job title_
</label>
</div>
<div className={style.input}>
<input type="text" name="jobTitle" value={inputValue.jobTitle} onChange={handleChange} required />
</div>
</div>
{/_ Contact number_ _/}
<div>
<div>
<label htmlFor="" className={style.labelTxt}>
Contact number
</label>
</div>
<div className={style.input}>
<input type="text" name="contactNumber" value={inputValue.contactNumber} onChange={handleChange} />
</div>
</div>
</div>
{/_ website Link _/}
<div className={style.websiteCont} style={{ paddingTop: '10px' }}>
<div>
<div>
<label htmlFor="" className={style.webTxt}>
Website Link_
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
{/_ type cont _/}
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
{/_ Mention your purpose below_ _/}
<div className={style.MentionyourContainer}>
<div className={style.mention}>Mention your purpose below_</div>
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
</div>
</section>
{/_ map _/}
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
export default Contactus;

css

.parentContainer {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/_ margin-left: 2rem; _/
/_ background-color: #5d5d5d; _/
}
.contactTxt {
font-weight: 600;
color: white;
}
.contactTxt h1 {
font-size: 72px;
}
.contactTxt h1 > span {
color: #a966ff;
}
.section1 {
/_ width: 40rem; _/
/_ margin-top: 10rem; _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/_ z-index: -1; _/
/_ border: 1px solid black; _/
}
.mainContainer {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
.ContactUs {
font-size: 1rem;
color: #717171;
font-weight: 600;
letter-spacing: 1px;
}
.collabrateText {
margin-top: 0.5rem;
/_ width: 38.938rem;
height: 3.625rem; _/
font-weight: 700;
font-size: 3rem;
}
.collabrateTextColor {
color: #7000ff;
letter-spacing: 2px;
}
.formContainer {
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
/_ align-items: center; _/
/_ border: 1px solid black; _/
margin-top: 6.25rem;
/_ width: 60rem; _/
height: 10rem;
gap: 20px;
z-index: 1;
background-color: #fff;
}
.labelTxt {
font-size: 14px;
color: #ffffff;
/_ letter-spacing: 3px; _/
font-weight: 500;
}
.webTxt {
font-size: 14px;
color: #ffffff;
font-weight: 500;
}
.input {
display: flex;
flex-direction: row;
justify-content: flex-start;
padding-left: 30px;
width: 365px;
height: 55px;
border-radius: 10px;
background: #2a2a2a;
margin-top: 0.5rem;
color: white;
}
.input > input {
border: none;
outline: none;
font-size: 20px;
background: #2a2a2a;
color: #ffffff;
}
.input1 > input {
font-size: 20px;
width: 100%;
background: #2a2a2a;
border: none;
outline: none;
color: white;
}

.inputWebsite {
width: 80%;
height: 55px;
border-radius: 10px;
border: none;
}
.typeContainer {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
}
.type {
font-size: 14px;
color: #ffffff;

font-weight: 500;
}
.mention {
font-size: 14px;
color: #343434;
font-weight: 500;
padding-top: 10px;
/_ margin-right: 35rem; _/
}
.typeCon {
/_ width: 786px; _/
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
border: none;
outline: none;
}
.radioCont {
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding-left: 50px;
height: 70px;
}
/_ .radios{
border: 1px solid black;
display: flex;
flex-direction: row;
margin-right: 100px;
} _/
.supportRadio {
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
height: 55px;
padding-left: 40px;
}
.supportRadio > input {
border: none;
outline: none;
font-size: 20px;
}
.lebalTxt {
font-size: 16px;
font-weight: 500;
}
/_ label {
font-weight: 500;
color: #343434;
background-color: aqua;
} _/
.gridCont {
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;
z-index: 1;
background: #2e2e2e;
}
.websiteLink {
width: 96%;
height: 55px;
border: 1px solid #c2c2c2;
border-radius: 12px;
padding-left: 30px;
font-size: 15px;
}
.typeCont {
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 1rem;
color: white;
}
.inputWithradio {
/_ margin-left: 40px; _/
display: flex;
flex-wrap: wrap;
/_ border: 1px solid ; _/
gap: 26px;
/_ background-color: aqua; _/
}
.radioInputContainer {
display: flex;
flex-direction: row;
gap: 6px;
}
.MentionyourInput {
height: 193px;
width: 100%;
border-radius: 10px;
color: #ffffff;
}
.submitBtn {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 52px;
margin-bottom: 3rem;
}
.submitBtn > button {
width: 126px;
height: 53px;
border-radius: 30px;
background-color: #7000ff;
border: none;
outline: none;
color: white;
font-size: 18px;
font-weight: 600;
}
.line {
margin-top: 3rem;
width: 100%;
height: 0px;
border: 1px solid rgb(221, 210, 210);
}
.line2 {
margin-top: 4.5rem;
width: 80%;
border: 1px solid rgb(221, 210, 210);
}
.sectionTwo {
display: grid;
grid-template-columns: repeat(4, 1fr);
align-items: center;
justify-content: center;
/_ margin-left: 80px; _/
margin-top: 3.6rem;
/_ border: 1px solid black; _/
/_ width: 120%; _/
/_ height: 285px; _/
}
.forBusiness {
/_ border: 1px solid black; _/
/_ width: 128px; _/
height: 74px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
}
.Businesstxt {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 32px;
font-weight: 600;
color: #000000;
}
.email {
font-size: 18px;
color: #5d5d5d;
}
.officeAddressContainer {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
/_ border: 1px solid; _/
width: 40%;
height: 200px;
margin-top: 7rem;
margin-bottom: 8rem;
/_ margin-left: 3rem; _/
}
.officeAddressText {
font-size: 16px;
color: #717171;
font-weight: 500;
}
.officeAddressCont {
margin-top: 1rem;
font-size: 18px;
font-weight: 500;
color: #050505;
}
.officeAddress {
margin-top: 2rem;
margin-bottom: 2rem;
}
.officeAddressName {
width: 18rem;
}
.text {
width: 100%;
height: 100%;
border-radius: 12px;
padding: 15px;
resize: none;
background: #2a2a2a;
color: #ffffff;
}
.mapCont {
/_ border: 1px solid; _/
position: absolute;
top: 100px;
right: 1px;
z-index: -1;
/_ margin-bottom: 3rem; _/
}
.MentionyourContainer {
display: flex;
flex-direction: column;
align-items: flex-start;
color: white;

/_ width: 96%; _/
}
.MentionyourContainer > div {
margin-top: 0.5rem;
/_ background: #2a2a2a; _/
color: white;
}
/_ Modal _/
.modalBody {
text-align: center;
}
.links {
display: flex;
flex-direction: row;
justify-content: center;
gap: 1rem;
}
/_ media query _/
@media only screen and (max-width: 480px) {
.heading {
display: flex;
flex-direction: column;
/_ align-items: flex-start; _/
/_ border: 1px solid red; _/
/_ width: 80%; _/
}
.type {
padding-right: 15rem;
}
.MentionyourInput {
display: flex;
flex-direction: column;
align-items: center;
}

.collabrateText {
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 2.5rem;
}
/_ .webTxt { _/
/_ margin-left: 3.4rem; _/
/_ margin-top: 1rem; _/
/_ background-color: aqua; _/
/_ } _/
.typeCont {
display: flex;
flex-direction: column;
align-items: center;
}
.mapCont {
display: none;
}
.section1 {
/_ background-color: rgb(223, 116, 22); _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
}
.line {
margin-top: -2rem;
margin-bottom: 1rem;
width: 80%;
height: 0px;
border: 1px solid rgb(221, 210, 210);
}
.ContactUs {
font-size: 1rem;
color: #717171;
font-weight: 600;
margin-left: 2.5rem;

    /* padding-right: 100px; */

}
.collabrateText {
width: 20.188rem;
/_ height: 3.625rem; _/
font-size: 2rem;
padding-right: 1.275rem;
}
.text {
/_ background-color: aquamarine; _/
height: 40%;
/_ background-color: aqua; _/
/_ margin-left: 3rem; _/
width: 87%;
}
.gridCont {
/_ margin-top: 133px; _/
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
/_ gap: 10px; _/
/_ border: 1px solid; _/
}

.websiteCont {
display: flex;
flex-direction: column;
align-items: center;
margin-top: 0.3rem;
}

.input {
/_ background-color: aqua; _/
width: 87%;
overflow: hidden;
/_ background-color: aqua; _/
}
.input1 {
display: flex;
flex-direction: column;
align-items: flex-start;
}
.input1 > input {
width: 87%;
/_ background-color: aqua; _/
margin-right: 0.5rem;
margin-top: 0.5rem;
}
.input > input {
width: 80%;
/_ background-color: aqua; _/
}

.inputWithradio {
/_ border: 1px solid black; _/
width: 65%;
display: flex;
flex-direction: column;
gap: 16px;
/_ justify-content:flex-start; _/
align-items: flex-start;

    /* justify-content: flex-start; */
    /* align-items: flex-start; */
    /* margin-left: 30px; */

}

.radioInputContainer {
display: flex;
flex-direction: row;
gap: 6px;
}

.websiteText {
margin-left: 1rem;
font-size: 14px;
color: #343434;
}
.mention {
font-size: 14px;
color: #343434;
font-weight: 500;
/_ background-color: aqua; _/
}
.MentionyourInput {
display: flex;
flex-direction: column;
align-items: flex-start;

    /* margin-left: 3.75rem; */

}
.MentionyourContainer {
width: 100%;
}
.sectionTwo {
display: flex;
flex-direction: column;
align-items: center;
width: 10%;
margin: auto;
margin-top: -5rem;
}
.forBusiness {
/_ border: 1px solid black; _/
margin-top: 80px;
}
.submitBtn {
margin-top: -3rem;
margin-bottom: 5rem;
}
.officeAddressContainer {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-right: 10rem;
}
.officeAddressContainer {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-right: 10rem;
}
}

@media only screen and (max-width: 930px) {
}
@media only screen and (max-width: 930px) {
}
