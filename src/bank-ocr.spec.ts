import { detect } from './bank-ocr';

describe('Handle invalid and valid detection payload', () => {
  it('Should throw exception for payload less than 9', () => {
    const payload: string[] = ['I'];

    expect(() => {
      detect(payload);
    }).toThrow(Error);
  });

  it('Should throw exception for invalid character', () => {
    const payload: string[] = ['O'];

    expect(() => {
      detect(payload);
    }).toThrow(Error);
  });

  it('Should not throw exception for valid payload length', () => {
    const payload: string[] = ['', '', '', '', '', '', '', '', '',];

    expect(() => {
      detect(payload);
    }).not.toThrow(Error);
  });

  it('Should not throw exception for valid character', () => {
    const payload: string[] = ['I', '_', '', '', '', '', '', '', '',];

    expect(() => {
      detect(payload);
    }).not.toThrow(Error);
  });
});
