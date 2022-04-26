const stripe = require('stripe')(process.env.STRIPE_SK);

const getReccuring = (init_interval) => {
  let interval;
  let interval_count = 1;
  switch (init_interval) {
    case 'monthly':
      interval = 'month';
      break;
    case 'quarterly':
      interval = 'month';
      interval_count = 3;
      break;
    case 'yearly':
      interval = 'year';
      break;
  }
  return { interval, interval_count };
};

const handler = async function (event, context) {
  try {
    let statusCode = 500;
    const body = JSON.parse(event.body);
    switch (event.httpMethod) {
      case 'POST':
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price_data: {
                currency: 'usd',
                tax_behavior: 'exclusive',
                product_data: {
                  name: `CJT Devs ${
                    body.interval === 'oneTime'
                      ? 'one time payment of'
                      : body.interval
                  }`,
                },
                unit_amount: body.paymentAmount * 100,
                recurring:
                  body.interval === 'oneTime'
                    ? undefined
                    : getReccuring(body.interval),
              },
              quantity: 1,
            },
          ],
          mode: body.interval === 'oneTime' ? 'payment' : 'subscription',
          shipping_address_collection: {
            allowed_countries: ['US'],
          },
          success_url:
            process.env.CHECKOUT_URL +
            'payments?session_id={CHECKOUT_SESSION_ID}',
          cancel_url: process.env.CHECKOUT_URL + 'payments',
        });
        return {
          statusCode: 200,
          body: JSON.stringify({
            location: session.url,
          }),
        };
      case 'GET':
        const sessionRet = await stripe.checkout.sessions.retrieve(
          body.sessionId
        );
        if (session) {
          return {
            statusCode: 200,
            body: JSON.stringify({
              session: sessionRet,
            }),
          };
        }
        break;
      default:
        statusCode = 402;
        break;
    }
    return { statusCode };
  } catch (err) {
    console.log(err);
    return ServerError();
  }
};

module.exports = { handler };
