const { fahrenheit2celcius, celcius2fahrenheit } = require('./fahrenheit-2-celcius.js');


describe('the fahrenheit-celcius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

  describe('the fahrenheit-celcius conversion should behave as follows', () => {

    it('function fahrenheit2celcius exists', () => {
      expect(fahrenheit2celcius).toBeDefined();
    });

    it('function celcius2fahrenheit exists', () => {
      expect(celcius2fahrenheit).toBeDefined();
    });

    it('converts 50 F to 10C', () => {
      expect(fahrenheit2celcius(50)).toBe(10);
    });

    it('convert 212 F to 100 C', () => {
      expect(fahrenheit2celcius(212)).toBe(100);
    });

    it('convert 32 F to 0 C', () => {
      expect(fahrenheit2celcius(32)).toBe(0);
    });

    it('convert -40 F to -40 C', () => {
      expect(fahrenheit2celcius(-40)).toBe(-40);
    });
/* second section */
    it('converts 10 C to 50 C', () => {
      expect(celcius2fahrenheit(10)).toBe(50);
    });

    it('convert 212 F to 100 C', () => {
      expect(celcius2fahrenheit(100)).toBe(212);
    });

    it('convert 0 C to 32 C', () => {
      expect(celcius2fahrenheit(0)).toBe(32);
    });

    it('convert -40 C to -40 F', () => {
      expect(celcius2fahrenheit(-40)).toBe(-40);
    });

  });

});