import express, {Application} from 'express';
import cors from "cors";
import testRoutes from "../routes/test.route"
import reqresRoutes from "../routes/reqres.route";

class Server {
    private app: Application
    private port: string;
    private APIRoutes = { 
        test: "/api/test",
        reqres: "/api/reqres"
    }

    constructor() { 
        this.app = express();
        this.port = process.env.PORT || "";
        this.middlewares();
        this.routes();
    }

    dbConnection() { 

    }

    middlewares() { 
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static("public") );

    }

    routes() { 
        this.app.use( this.APIRoutes.test, testRoutes );
        this.app.use( this.APIRoutes.reqres, reqresRoutes );
    }

    listen() { 
        this.app.listen( this.port, () => {
            console.log("\n================================");
            console.log(`[!] Server running on port ${this.port}`);
            console.log("================================");
        });
    }
}

export default Server;