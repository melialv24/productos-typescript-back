import express, { Application } from "express";
import cors from 'cors'
import http from 'http' // add this line
import { ApolloServer, ExpressContext } from "apollo-server-express";
import productSchema from '../api/graphQL/schemas/productSchema'
import productResolver  from '../api/graphQL/resolvers/productsResolver'

class Server {

    private app: Application;
    private port: string;
    private server: ApolloServer<ExpressContext>

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8000'
        this.server = new ApolloServer({
            typeDefs: [productSchema],
            resolvers: [productResolver]
        });
        


    }

    async startApolloServer() {
        
        await this.server.start();
        this.server.applyMiddleware({ app: this.app });
    }

    listen() {
       /* this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port)
        })*/
        this.startApolloServer()
       
        const httpServer =  http.createServer(this.app);

       httpServer.listen({ port: this.port }, () => {
           console.log(`Server running at http://localhost:${this.port}${this.server.graphqlPath}`);
       });
    }

}

export default Server