import { fetcher } from 'src/hooks/fetcher';

describe('fetcher', () => {
  it('apiのURLが未設定だった時エラーが発生するか', async () => {
    expect(fetcher).rejects.toThrow();
  });

  it('apikeyが未定義だったときエラーが発生するか', async () => {
    expect(fetcher('DAMMY')).rejects.toThrow();
  });
});
