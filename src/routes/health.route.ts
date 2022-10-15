import { Router, Request, Response } from 'express';

// Router URL: /health
const healthRouter = Router();

/**
 * @openapi
 * /health/:
 *   get:
 *     summary: Health check
 *     description: Application health check used by ping services and docker
 *     tags:
 *      - Health
 *     responses:
 *       200:
 *         description: Application is running. Health check passed.
 *       500:
 *          description: Application is not running. Health check failed.
 */
healthRouter.get(`/`, (req: Request, res: Response) => {
  res.send('Application is running. Health check passed.');
});

export default healthRouter;
