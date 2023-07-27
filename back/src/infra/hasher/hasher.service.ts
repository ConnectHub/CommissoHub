import { compare, hash } from 'bcrypt';
import { Hasher } from 'src/domain/entities/hasher';

export class HasherService implements Hasher {
  async hash(password: string): Promise<string> {
    const salt = process.env.SALT || 10;
    return await hash(password, salt);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword);
  }
}
