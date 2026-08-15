interface GalleryItemProps {
    id: string,
    alt: string,
    src: string,
}

export const GalleryItem = (props:GalleryItemProps) => {
    const {id, alt, src} = props
  return (
    <>
      <img
        className="gallery-item"
        id={id}
        alt={alt}
        src={src}
      ></img>
    </>
  );
};
