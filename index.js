const express = require('express');
const {isolationAlgorithm} = require('./src/contact-tracing-algorithm');

const app = express();

app.use(express.json()); // might have to raise the body size 

app.post('/contact-trace', (req, res) => {
  const {infected, degree_of_safety, contact_network} = req.body;
  if (infected && degree_of_safety && contact_network) {

    // will probs have to take contact_network and turn it into a adj list
    const requiresIsolation = isolationAlgorithm(infected, contact_network, degree_of_safety)
    .filter((human, index, self) => self.indexOf(human) === index);
    
    res.status(200).send({'requires_isolation': requiresIsolation});
  } else {
    res.status(400).send('Invalid request.\n');
  }
});

app.post('/sign-up', (req, res) => {
  const {first_name, last_name, email, password} = req.body;
  if (first_name && last_name && email && password) {
    console.log('Sign-up endpoint work in progress.');
    res.status(200).send('Work in progress.\n');
  } else {
    res.status(400).send('Invalid Request.\n')
  }
});

app.listen(8080, () => {
  console.log('Backend started.');
});
