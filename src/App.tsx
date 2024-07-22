import React from "react";
import SubscriptionPage from "./pages/Subscription";

// Main App component rendering the Subscription page centered on the screen
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <SubscriptionPage />
    </div>
  );
};

export default App;
