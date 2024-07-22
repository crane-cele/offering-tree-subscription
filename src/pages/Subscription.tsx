import React, { useState } from "react";
import SubscriptionForm from "../sections/SubscriptionForm";
import DescriptionSection from "../sections/Description";

// Subscription page component managing the subscription form and description
const Subscription: React.FC = () => {
  const [description, setDescription] = useState("");

   // Update the description states
  const updateDescription = (desc: string) => {
    setDescription(desc);
  };

  return (
    <div className="subscription-container">
      <SubscriptionForm
        updateDescription={updateDescription}
        DescriptionSection={DescriptionSection}
        description={description}
      />
    </div>
  );
};

export default Subscription;
