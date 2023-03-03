import express, {Application, Request, Response} from "express"
import morgan from "morgan"
import compression from "compression"
import cors from "cors"
import helmet from "helmet"

class App {
  public app: Application;

  constructor() {
    this.app = express()
    this.plugins()
    this.routes()
  }

  protected plugins(): void {
    this.app.use(express.json())
    this.app.use(morgan("dev"))
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(helmet())
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("test")
    })
    this.app.route("/users").post((req: Request, res: Response) => {
      res.send(req.body)
    })
  }
}

const app = new App().app

export default app