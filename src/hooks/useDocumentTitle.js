// useDocumentTitle.js
import axios from 'axios';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const { pathname } = location;
      try {
        const { data } = await axios.get(
          `https://seo-apis.ajnalens.com/api/seo-data${pathname === '/' ? '/home' : pathname}`
        );
        document.title =
          data?.data?.title || title || "AjnaXR World's best Mixed Reality Headset | Best VR Passthrough Device";
      } catch (e) {
        document.title = title || "AjnaXR World's best Mixed Reality Headset | Best VR Passthrough Device";
      }
    };
    fetchData();
    // document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
}

export default useDocumentTitle;
