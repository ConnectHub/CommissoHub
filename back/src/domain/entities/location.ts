export class Location {
  lat: number;
  long: number;
  municipality: string;

  constructor(partial: Partial<Location>) {
    Object.assign(this, partial);
  }
}
