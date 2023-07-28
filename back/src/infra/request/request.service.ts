import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Requester } from 'src/domain/entities/requester';

@Injectable()
export class RequesterService implements Requester {
  async get(url: string): Promise<any> {
    const { data } = await axios.get(url);
    return data;
  }
}
