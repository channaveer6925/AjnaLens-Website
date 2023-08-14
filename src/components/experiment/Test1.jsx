import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import ajnaxr from '../../asets/X3.png';

const Test1 = () => {
  const first = useRef();
  useEffect(() => {
    const zoomElement = first.current;
    let zoom = 1;
    const ZOOM_SPEED = 0.1;

    function zooming(e) {
      if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
      } else {
        zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
      }
    }
    document.addEventListener('wheel', zooming);

    //  return (window.removeEventListener("wheel",zooming))
  }, []);
  return (
    <div className={styles.workspace} ref={first}>
      <img src={ajnaxr} />
    </div>
  );
};

export default Test1;
