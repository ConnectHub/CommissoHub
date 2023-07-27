import { HasherService } from './hasher.service';

describe('HasherService_class', () => {
  it('test_hash_password', async () => {
    const hasherService = new HasherService();
    const password = 'password123';
    const hashedPassword = await hasherService.hash(password);
    expect(hashedPassword).not.toBe('');
  });

  it('test_hash_different_passwords', async () => {
    const hasherService = new HasherService();
    const password1 = 'password123';
    const password2 = 'password456';
    const hashedPassword1 = await hasherService.hash(password1);
    const hashedPassword2 = await hasherService.hash(password2);
    expect(hashedPassword1).not.toBe(hashedPassword2);
  });

  it('test_hash_long_password', async () => {
    const hasherService = new HasherService();
    const password = 'a'.repeat(1000);
    const hashedPassword = await hasherService.hash(password);
    expect(hashedPassword).not.toBe('');
  });

  it('test_hash_empty_password', async () => {
    const hasherService = new HasherService();
    const password = '';
    const hashedPassword = await hasherService.hash(password);
    expect(hashedPassword).not.toBe('');
  });

  it('test_compare_empty_hashed_password', async () => {
    const hasherService = new HasherService();
    const password = 'password123';
    const hashedPassword = '';
    const result = await hasherService.compare(password, hashedPassword);
    expect(result).toBe(false);
  });
});
