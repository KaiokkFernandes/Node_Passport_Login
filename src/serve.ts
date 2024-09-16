import './util/module-alias';
import { Controller, Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import { runInThisContext } from 'vm';


export class setupServer extends Server{
    constructor(private port = 3000){
      super();
    }

    public async init(): Promise<void>{
        this.setupExpress();
        this.setupControllers();
        await this.databaseSetup();
    }


    private setupControllers(): void {
        const forecastController = new ForecastController();
        const beachesController = new BeachesController();
        const usersController = new UsersController();
        this.addControllers([
          forecastController,
          beachesController,
          usersController,
        ]);
      }

}
