import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export { ImageGallery };
