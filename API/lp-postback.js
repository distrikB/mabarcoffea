export default async function handler(req, res) {
  const secret = 'rahasia123';

  const {
    key,
    subid = '',
    status = '',
    payout = '',
    offer_id = '',
    transaction_id = ''
  } = req.query;

  if (key !== secret) {
    return res.status(403).send('Forbidden');
  }

  const log = `${new Date().toISOString()} - SUBID: ${subid} | Status: ${status} | Payout: ${payout} | OfferID: ${offer_id} | TID: ${transaction_id}\n`;

  console.log(log); // Log ke console (bisa dicek di Vercel log)

  res.status(200).send('OK');
}
