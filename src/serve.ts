import './util/module-alias';
import { Controller, Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import { runInThisContext } from 'vm';
import { ForeCastController } from './controllers/forecast';


export class SetupServer extends Server { 
   constructor(private port = 3000){
         super();
   }
  public init(): void{
   this.setupExpress();
 } 

  private setupExpress(): void{
    this.app.use(bodyParser.json());    
   }
   
   private setupControllers(): void{
    const forecastController = new ForeCastController();
    this.addControllers([forecastController]);
   }
   
   public getApp(): Application{
     return this.app;
   }    
}