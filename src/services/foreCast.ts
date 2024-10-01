import { StormGlass, ForecastPoint } from "@src/clients/stormGlas";

export enum BeachPosition{
    S = 'S',
    E = 'E',
    N = 'N',
    W = 'W',    
}

export interface Beach {
    name: string;
    position: BeachPosition;
    lat: number;
    lng: number;
    user: string;
  }
  

export interface BeachForeCast extends Omit<Beach, 'user'>, ForecastPoint {}

export class Forecast {
    constructor (protected stormGlass = new StormGlass()) {}

    public async processForecastForBeaches(
        beaches: Beach[] 
        ): Promise<BeachForeCast[]>{
            const pointsWithCorrectSources: BeachForeCast[] = [];   
            for(const beach of beaches){
              const points = await this.stormGlass.fetchPoints(beach.lat, beach.lng);   
              const enrichedBeachData = points.map((e) => ({   
                    ...{
                        lat: beach.lat,
                        lng: beach.lng,
                        name: beach.name,
                        position: beach.position,
                    },
                    ...e,
                }));    
                pointsWithCorrectSources.push(...enrichedBeachData);
            }
        
        return pointsWithCorrectSources;
        }
    
}

