import React from 'react';

const Card = ({ title, description, imageUrl, onDemoClick, onSourceClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {imageUrl && (
        <img className="card-image" src={imageUrl} alt={title} />
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div
        className={`card-overlay ${isHovered ? 'overlay-active' : ''}`}
      ></div>
      {isHovered && (
        <div className="card-actions">
          <button className="card-button" onClick={onDemoClick}>
            Demo
          </button>
          <button className="card-button" onClick={onSourceClick}>
            Source
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
