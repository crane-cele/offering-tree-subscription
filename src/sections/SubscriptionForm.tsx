import React, { useState, useEffect } from 'react';
import FormInput from '../components/FormInput';
import SelectInput from '../components/SelectInput';
import { DescriptionSectionProps } from '../sections/Description';

interface SubscriptionFormProps {
  updateDescription: (description: string) => void;
  DescriptionSection: React.FC<DescriptionSectionProps>;
  description: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ updateDescription, DescriptionSection, description }) => {
  const [initialPrice, setInitialPrice] = useState('');
  const [billingFrequency, setBillingFrequency] = useState(1);
  const [billingPeriod, setBillingPeriod] = useState('Days');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [trialPeriod, setTrialPeriod] = useState('');
  const [trialPeriodType, setTrialPeriodType] = useState('None');
  const [duration, setDuration] = useState('Never Ends');
  const [billingCycles, setBillingCycles] = useState('');

  useEffect(() => {
    if (!paymentAmount && initialPrice) {
      setPaymentAmount(initialPrice);
    }
  }, [initialPrice]);

  useEffect(() => {
    let desc = '';
    const initial = parseFloat(initialPrice) || 0;
    const payment = parseFloat(paymentAmount) || 0;
    const cycles = parseInt(billingCycles) || 0;
    const trial = parseInt(trialPeriod) || 0;

    if (trialPeriodType !== 'None') {
      desc += `Your customer will be charged $<span class="highlight">${initial}</span> immediately for their ${trial} ${trialPeriodType.toLowerCase()} trial, `;
    } else {
      desc += `Your customer will be charged $<span class="highlight">${initial}</span> immediately, `;
    }

    if (duration === 'Never Ends') {
      desc += `and then $<span class="highlight">${payment}</span> every ${billingFrequency} ${billingPeriod} until they cancel.`;
    } else {
      const total = (cycles * payment + initial).toFixed(2);
      desc += `and then $<span class="highlight">${payment}</span> every ${billingFrequency} ${billingPeriod}, ${cycles} times. The total amount paid will be $<span class="highlight">${total}</span>.`;
    }

    updateDescription(desc);
  }, [initialPrice, billingFrequency, billingPeriod, paymentAmount, trialPeriod, trialPeriodType, duration, billingCycles]);

  const handlePositiveNumberChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseFloat(value) >= 0) {
      setter(value);
    }
  };

  const handlePositiveIntegerChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 0) {
      setter(value);
    }
  };

  return (
    <form className="form-container">
      <div className="form-line-grid">
        <FormInput 
          label="Initial Price"
          value={initialPrice}
          onChange={handlePositiveNumberChange(setInitialPrice)}
          type="number"
          placeholder="Enter initial price"
        />
        <FormInput 
          label="Billing Frequency"
          value={billingFrequency.toString()}
          onChange={handlePositiveIntegerChange(setBillingFrequency)}
          type="number"
          placeholder="Enter billing frequency"
        />
        <SelectInput 
          label="Billing Period"
          options={['Days', 'Weeks', 'Months']}
          value={billingPeriod}
          onChange={(e) => setBillingPeriod(e.target.value)}
        />
        <FormInput 
          label={`${billingPeriod.charAt(0).toUpperCase() + billingPeriod.slice(1)} Payment`}
          value={paymentAmount}
          onChange={handlePositiveNumberChange(setPaymentAmount)}
          type="number"
          placeholder="Enter payment amount"
        />
      </div>
      <div className="form-line-grid">
        <FormInput 
          label="Trial Period"
          value={trialPeriod}
          onChange={handlePositiveNumberChange(setTrialPeriod)}
          type="number"
          placeholder="Enter trial period"
          disabled={trialPeriodType === 'None'}
        />
        <SelectInput 
          label="Trial Period Type"
          options={['None', 'Days', 'Weeks', 'Months']}
          value={trialPeriodType}
          onChange={(e) => setTrialPeriodType(e.target.value)}
        />
        <SelectInput 
          label="Duration"
          options={['Never Ends', 'Customize']}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        {duration === 'Customize' && (
          <FormInput 
            label="Billing Cycles"
            value={billingCycles}
            onChange={handlePositiveNumberChange(setBillingCycles)}
            type="number"
            placeholder="Enter number of billing cycles"
          />
        )}
      </div>
      <DescriptionSection description={description} />
      <button type="submit" className="button-submit">
        Configure Subscription
      </button>
    </form>
  );
};

export default SubscriptionForm;
