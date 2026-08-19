import styles from './GalleryItem.module.scss'

interface GalleryItemProps {
    id: string,
    alt: string,
    src: string,
}

export const GalleryItem = (props:GalleryItemProps) => {
    const {id, alt, src} = props
  return (
    
      <img
        className={styles.galleryItem}
        id={id}
        alt={alt}
        src={src}
        
      ></img>
    
  );
};
