import "./SectionFooter.css"

function SectionFooter({ content }) {

  return (
    <div className="section-footer-container" >
      <div className="section-footer">
        <p className="section-content">{content}</p>
      </div>
    </div>
  );
}

export default SectionFooter;
