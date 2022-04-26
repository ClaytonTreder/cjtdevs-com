import './PaymentForm.css';

import { attributes as text } from '../../content/pages/payments.md';
import { useState } from 'react';

export default function PaymentForm(params) {
  const [interval, setInterval] = useState('oneTime');
  const [paymentAmount, setPaymentAmount] = useState();
  const [requiredPayment, setRequiredPayment] = useState();

  const changeInterval = (type) => {
    return () => {
      setInterval(type);
    };
  };
  const changeAmount = (e) => {
    setPaymentAmount(e.target.value);
  };
  const next = () => {
    if (paymentAmount >= 20) {
      params.setPendingPayment({
        interval: interval,
        paymentAmount: paymentAmount ?? 0,
      });
    } else {
      setRequiredPayment('Minimun payment is $20');
    }
  };

  return (
    <div className='paymentForm'>
      <section>
        <div>
          <h4>{text.subTitle}</h4>
          <p>{text.description}</p>
        </div>
        <div>
          <hr />
          <h5>Payment Amount</h5>
          <div>
            ${' '}
            <input
              type='number'
              min='20'
              step='10'
              name='amount'
              value={paymentAmount}
              onChange={changeAmount}
            />
            {requiredPayment && (
              <div className='flex-row'>{requiredPayment}</div>
            )}
          </div>
          <hr />
          <h5>Interval</h5>
          <div>
            <div className='flex-row interval'>
              <span className='type'>
                <input
                  type='radio'
                  name='interval'
                  checked={interval === 'oneTime'}
                  onChange={changeInterval('oneTime')}
                />
                {text.subscriptions.oneTime}
              </span>
              <span className='type'>
                <input
                  type='radio'
                  name='interval'
                  checked={interval === 'monthly'}
                  onChange={changeInterval('monthly')}
                />
                {text.subscriptions.monthly}
              </span>
              <span className='type'>
                <input
                  type='radio'
                  name='interval'
                  checked={interval === 'quarterly'}
                  onChange={changeInterval('quarterly')}
                />
                {text.subscriptions.quarterly}
              </span>
              <span className='type'>
                <input
                  type='radio'
                  name='interval'
                  checked={interval === 'yearly'}
                  onChange={changeInterval('yearly')}
                />
                {text.subscriptions.yearly}
              </span>
            </div>
          </div>
          <hr />
          <div>
            <input type='button' value='Next' onClick={next} />
          </div>
        </div>
      </section>
    </div>
  );
}
