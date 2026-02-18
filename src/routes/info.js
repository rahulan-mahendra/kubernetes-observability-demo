import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  const start = Date.now();
  res.send('Kubernetes Observability Demo');
});

export default router;
