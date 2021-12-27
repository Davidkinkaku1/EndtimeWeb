const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryText = 'SELECT * FROM "contact_us" ORDER BY "id";';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting contacts informations', error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  let Newcontact = req.body;
  console.log(`A new Message coming in`, Newcontact);

  let queryText = `INSERT INTO "contact_us" ("full_name", "email_address","request")
                   VALUES ($1, $2, $3);`;
  pool.query(queryText, [Newcontact.full_name, Newcontact.email_address, Newcontact.request])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding a new contact request`, error);
      res.sendStatus(500);
    });

});

// Delete A request{contact} by id 
router.delete('/:id',  (req, res) => { //calling the database
  let contactId = req.params.id;
  console.log(contactId);
  let queryText = `DELETE FROM "contact_us" WHERE "id" = $1;`; 
  pool.query(queryText, [contactId])
  .then((result) => {
      res.sendStatus(204);
  }).catch((err) => {
      res.sendStatus(500);
  })
});



module.exports = router;
