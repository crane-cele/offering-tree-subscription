import React, { useEffect } from 'react';

export interface DescriptionSectionProps {
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description }) => {
  useEffect(() => {
    const descriptionElement = document.querySelector('.description-content') as HTMLElement | null;
    if (descriptionElement) {
      descriptionElement.classList.remove('description-animate');
      void descriptionElement.offsetWidth; // Trigger reflow
      descriptionElement.classList.add('description-animate');
    }
  }, [description]);

  return (
    <div className="description-section">
      <p className="description-content description-animate" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

export default DescriptionSection;
