import { Controller, Get } from "@overnightjs/core";
import {Request, Response } from 'express'; 
@Controller('forecast')
export class ForeCastController{
    @Get('')    
   public getForecastForLoggerUser(_:Request, res: Response): void{
    
   }
}
