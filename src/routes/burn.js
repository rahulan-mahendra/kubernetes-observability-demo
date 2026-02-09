import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  const seconds = parseInt(req.query.seconds) || 10;
  const end = Date.now() + seconds * 1000;
  while (Date.now() < end) { /* busy wait */ }
  res.send(`Burned CPU for ${seconds} seconds`);
});

export default router;
