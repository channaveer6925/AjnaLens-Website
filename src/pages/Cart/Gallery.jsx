import styles from './cart.module.css';
import allSet from '../../assets/cartView/allSet.png';
import sideView from '../../assets/cartView/sideView.png';
import front from '../../assets/cartView/front.png';
import { useState } from 'react';
import SEallSet from '../../assets/cartView/SEallSet.jpg';
import SEfront from '../../assets/cartView/SEfront.png';
import SEside from '../../assets/cartView/SEside.png';
import SEslant from '../../assets/cartView/SEslant.png';

export const Gallery = ({ type }) => {
  const [active, setActive] = useState({ index: 1, img: type === 'PRO' ? allSet : SEallSet, height: '326.978px' });
  const setGalleryImg = (index, img, height) => {
    setActive({ index: index, img: img, height });
  };

  return (
    <div className="p-5 d-grid">
      {type === 'PRO' ? (
        <>
          <div className={styles.mainGalleryDiv}>
            <img
              src={active.img}
              alt="main"
              width={'auto'}
              style={{ maxHeight: '326.978px' }}
              className={styles.mainImg}
            />
          </div>
          <div className="row my-3">
            <div className="col">
              <div
                className={styles.gallerySection}
                style={{ border: `${active.index === 1 ? '1px solid #7a68e9' : 'none'}` }}
                onClick={() => setGalleryImg(1, allSet)}
              >
                <img src={allSet} alt="main" style={{ width: '133.362px' }} className={styles.mainImg} />
              </div>
            </div>
            <div className="col">
              <div
                className={styles.gallerySection}
                style={{ border: `${active.index === 2 ? '1px solid #7a68e9' : 'none'}` }}
                onClick={() => setGalleryImg(2, front)}
              >
                <img src={front} alt="main" style={{ width: '103.105px' }} className={styles.mainImg} />
              </div>
            </div>
            <div className="col">
              <div
                className={styles.gallerySection}
                style={{ border: `${active.index === 3 ? '1px solid #7a68e9' : 'none'}` }}
                onClick={() => setGalleryImg(3, sideView)}
              >
                <img src={sideView} alt="main" style={{ width: '123.113px' }} className={styles.mainImg} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.mainGalleryDiv}>
            <img
              src={active.img}
              alt="main"
              width={'auto'}
              style={{ maxHeight: active?.height }}
              className={styles.mainImg}
            />
          </div>
          <div className="row my-3">
            <div className="col">
              <div
                className={styles.gallerySection}
                style={{ border: `${active.index === 1 ? '1px solid #7a68e9' : 'none'}` }}
                onClick={() => setGalleryImg(1, SEallSet, '326.978px')}
              >
                <img src={SEallSet} alt="main" style={{ width: '133.362px' }} className={styles.mainImg} />
              </div>
            </div>
            <div className="col">
              <div
                className={styles.gallerySection}
                style={{ border: `${active.index === 2 ? '1px solid #7a68e9' : 'none'}` }}
                onClick={() => setGalleryImg(2, SEfront, '271px')}
              >
                <img src={SEfront} alt="main" style={{ width: '103.105px' }} className={styles.mainImg} />
              </div>
            </div>
            <div className="col">
              <div
                className={styles.gallerySection}
                style={{ border: `${active.index === 3 ? '1px solid #7a68e9' : 'none'}` }}
                onClick={() => setGalleryImg(3, SEside, '364px')}
              >
                <img src={SEside} alt="main" style={{ width: '123.113px' }} className={styles.mainImg} />
              </div>
            </div>
            <div className="col">
              <div
                className={styles.gallerySection}
                style={{ border: `${active.index === 4 ? '1px solid #7a68e9' : 'none'}` }}
                onClick={() => setGalleryImg(4, SEslant, '204.978px')}
              >
                <img src={SEslant} alt="main" style={{ width: '123.113px' }} className={styles.mainImg} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
