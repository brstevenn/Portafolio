import "./Image.css";

function Image({image, width, height, styles, link, content}) {
  return (
    <a href={link} target="_blank" className={`imageContainer${styles}`}>
      <img
      className={`image${styles}`}
      src={image}
      width={width}
      height={height}
      />
    </a>
  );
}

export default Image;
