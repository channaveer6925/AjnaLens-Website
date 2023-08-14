import { useLayoutEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { InNews, MediaHero, PressImages } from '../../sections';

const Media = () => {
  useDocumentTitle('AjnaLens in Media | Contact Our Press Release Team Today');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`media`}>
      <MediaHero />
      <PressImages />
      <InNews />
    </div>
  );
};

export default Media;
