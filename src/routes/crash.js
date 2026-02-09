import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send('Crashing app now!');
  process.exit(1);
});

export default router;
