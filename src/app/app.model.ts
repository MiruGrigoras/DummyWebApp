export interface MyReview{
  stars?: number,
  body?: string,
  author?: string,
  createdOn?: number
}

export interface MyObj{
  name?: string,
  band?:string,
  series?: string,
  channelBandwidth?: number,
  available?:boolean,
  reviews?: Array<MyReview>,
}
export interface MyCoordinates{
  degreesLat: number,
  minutesLat: number,
  secondsLat: number,
  degreesLong: number,
  minutesLong: number,
  secondsLong: number,
  latNS: string,
  longEW: string
  }
