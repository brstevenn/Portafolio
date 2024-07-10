import "./Image.css";

function Image({image, width, height, style, link, content}) {
  return (
    <a href={link} target="_blank" className={`imageContainer${style}`}>
      <img
      className={`image${style}`}
      src={image}
      width={width}
      height={height}
      />
    </a>
  );
}

export default Image;
