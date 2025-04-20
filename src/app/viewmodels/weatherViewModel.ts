export class WeatherViewModel {
    constructor(
      public location: string,
      public timestamp: number,
      public temperature: number,
      public feelsLike: number,
      public tempMin: number,
      public tempMax: number,
      public pressure: number,
      public humidity: number,
      public weatherMain: string,
      public weatherDescription: string,
      public windSpeed: number,
      public cloudiness: number,
      public icon: string,
      public creationDate: Date = new Date(),
      public lastUpdate: Date = new Date()
    ) {}
}