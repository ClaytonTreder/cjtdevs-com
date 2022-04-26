import './Payments.css';

import { attributes as text } from '../../content/pages/payments.md';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import PaymentForm from 'components/PaymentForm/PaymentForm';
import PendingPayment from 'components/PendingPayment/PendingPayment';

export default function Payments(params) {
  const [sucessfulPayment, setSucessfulPayment] = useState();
  const [pendingPayment, setPendingPayment] = useState();

  const loc = useLocation();

  useEffect(() => {
    if (loc.search.includes('?session_id=')) {
      setSucessfulPayment(true);
    }
  }, [params, loc.search]);

  return (
    <div className='payments'>
      <title>
        <h2>{text.title}</h2>
      </title>
      {sucessfulPayment ? (
        <div>
          <section className='success'>
            <p>Success! Your payment has been recieved and processed.</p>
          </section>
          <section className='success'>
            <p> Your confirmation number is:</p>
          </section>
          <section className='success'>
            <p> {loc.search.split('?session_id=')[1]}</p>
          </section>
          <section className='success'>
            <a href='/'>
              <input type='button' value='Home' />
            </a>
          </section>
        </div>
      ) : (
        <>
          {pendingPayment ? (
            <PendingPayment
              pendingPayment={pendingPayment}
              setPendingPayment={setPendingPayment}
            />
          ) : (
            <PaymentForm setPendingPayment={setPendingPayment} />
          )}
        </>
      )}
    </div>
  );
}
