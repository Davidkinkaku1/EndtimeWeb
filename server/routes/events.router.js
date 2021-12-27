const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
    // GET route code here
    let queryText = 'SELECT * FROM "events" ORDER BY "id";';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting events informations', error);
      res.sendStatus(500);
    });
  });
  
  /**
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
    let Newevent = req.body;
    console.log(`A new event coming in`, Newevent);
  
    let queryText = `INSERT INTO "events" ("event_title", "event_details", "event_location")
                     VALUES ($1, $2, $3);`;
    pool.query(queryText, [Newevent.event_title, Newevent.event_details, Newevent.event_location])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding a new event request`, error);
        res.sendStatus(500);
      });
  
  });
  
  // Delete A request{contact} by id 
  router.delete('/:id',  (req, res) => { //calling the database
    let contactId = req.params.id;
    console.log(contactId);
    let queryText = `DELETE FROM "events" WHERE "id" = $1;`; 
    pool.query(queryText, [contactId])
    .then((result) => {
        res.sendStatus(204);
    }).catch((err) => {
        res.sendStatus(500);
    })
  });
  
module.exports = router;
