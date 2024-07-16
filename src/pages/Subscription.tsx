import React, { useState } from 'react';
import SubscriptionForm from '../sections/SubscriptionForm';
import DescriptionSection from '../sections/Description';

const Subscription: React.FC = () => {
  const [description, setDescription] = useState('');

  const updateDescription = (desc: string) => {
    setDescription(desc);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <SubscriptionForm updateDescription={updateDescription} DescriptionSection={DescriptionSection} description={description} />
    </div>
  );
};

export default Subscription;
