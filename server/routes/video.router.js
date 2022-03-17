const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
    // GET route code here
    let queryText = 'SELECT * FROM "video" ORDER BY "id" DESC;';
    pool.query(queryText).then(result => {
      console.log("The videos are here ", result.rows);
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
    let Newvideo = req.body;
    console.log(`A new video coming in`, Newvideo);
  
    let queryText = `INSERT INTO "video" ("link", "title", "description")
                     VALUES ($1, $2, $3);`;
    pool.query(queryText, [Newvideo.link, Newvideo.title, Newvideo.description])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding a new video request`, error);
        res.sendStatus(500);
      });
  
  });
  
  // Delete A request{contact} by id 
  router.delete('/:id',  (req, res) => { //calling the database
    let contactId = req.params.id;
    console.log(contactId);
    let queryText = `DELETE FROM "video" WHERE "id" = $1;`; 
    pool.query(queryText, [contactId])
    .then((result) => {
        res.sendStatus(204);
    }).catch((err) => {
        res.sendStatus(500);
    })
  });
  

module.exports = router;
