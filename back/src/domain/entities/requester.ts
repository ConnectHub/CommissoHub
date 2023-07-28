export abstract class Requester {
  abstract get(url: string): Promise<any>;
}
