import { Router, Request, Response } from "express";
import { ProjectController } from "../app/inventory/project/projectController";
import { CaptureController } from "../app/inventory/capture/captureController";
import { authMiddleware } from "../routes/middlewares/auth";

const mainRouter = Router();

// Main Routes
// External checking endpoint
mainRouter.get(
    "/health",
    async (req: Request, res: Response) => {
        res.status(200).send({ status: 'OK' })
    }
)

mainRouter.get(
    "/",
    async (req: Request, res: Response) => {
        res.render('home');
    }
)

mainRouter.use(authMiddleware)

mainRouter.get('/:user/projects', ProjectController.viewUserProjects)
mainRouter.get('/:user/projects/:projectId/boxes', ProjectController.viewProjectBoxes)
mainRouter.get('/capture/:captureId', CaptureController.getCapture)
mainRouter.post('/capture/:captureId', CaptureController.postCaptureData)
mainRouter.post('/capture/:captureId/rotate', CaptureController.postRotateCapture)

export default mainRouter