import { Router } from "express";

const router = Router();
let ready = true; 

router.get('/', (req, res) => {
  if (ready) res.status(200).send('READY');
  else res.status(503).send('NOT READY');
});

export default router;
