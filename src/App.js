import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import {
  Home,
  AboutUs,
  Podcasts,
  Purpose,
  ContactUs,
  Media,
  Blog,
  Career,
  Action,
  Checkout,
  Success,
  Legal,
  Terms,
  StripeCheckout,
} from './pages';
import { BlogContent, JD, XRProductPage, OurStory } from './sections';
import PreLaunch from './sections/PreLaunch';
import Defence from './pages/Defence';
import LandingPage from './components/Web_landingPage/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { AjnaXR } from './pages/AjnaXR/AjnaXR';
import { CheckoutPage } from './pages/Cart';
import { AjnaXrSE } from './pages/AjnaXR/AjnaXrSE';
import { ForDev } from './pages/ForDev/ForDev';
import { Ajnavidya } from './pages/Ajnavidya/Ajnavidya';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/ajnaxr-PRO" element={<AjnaXR />} />
        <Route path="/ajnaxr-SE" element={<AjnaXrSE />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to={'/'} />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:blogId" element={<BlogContent />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/careers/job/:id" element={<JD />} />
        {/* already commented <Route path="/action" element={<Action />} /> */}
        <Route path="/prelaunch" element={<PreLaunch />} />
        {/* already commented <Route path="/ajnaxr" element={<XRProductPage />} /> */}
        {/* already commented <Route path="/legal" element={<Legal />} /> */}
        <Route path="/termsofuse" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* already commented<Route path="/checkout" element={<Checkout />} /> */}
        {/* already commented <Route path="/checkout/stripe" element={<StripeCheckout />} /> */}
        <Route path="/success" element={<Success />} />
        <Route path="/success/:oid" element={<Success />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/defence" element={<Defence />} />
        <Route path="/forDevelopers" element={<ForDev />} />
        <Route path="/cart/:headset" element={<CheckoutPage />} />
        <Route path="/ajnaVidya" element={<Ajnavidya />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
