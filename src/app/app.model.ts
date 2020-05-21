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
