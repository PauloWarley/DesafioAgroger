import 'reflect-metadata'
import { AppDataSource } from "./data-source"
import { createConnection } from "typeorm";
import app from "./app";
import port from "./config"

AppDataSource.initialize().then(async () => {

    async function startServer() {
        try {
            await createConnection();
            app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            });
        } catch (error) {
            console.log("Failed to connect to the database:", error);
        }
    }

    startServer();

}).catch(error => console.log(error))

