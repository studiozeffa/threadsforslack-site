import { NowRequest, NowResponse } from '@vercel/node'

const subdomainParser = /^([a-zA-Z]+)\.threadsforslack\.com\/?$/

export default (req: NowRequest, res: NowResponse) => {
  let comparative = 'better';

  const host = req.headers['host'];
  const regexResult = subdomainParser.exec(host);
  if(regexResult && regexResult[1]) {
    comparative = regexResult[1];
  }

  const comparativeCapitalized = comparative.charAt(0).toUpperCase() + comparative.slice(1);
  res.status(200).send(`${comparativeCapitalized}!`)
}
