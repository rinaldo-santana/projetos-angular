import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('Deve transformar a data 2018-01-31 para 31/01/2018', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2018-01-31')).toEqual('31/01/2018');
  });
});
