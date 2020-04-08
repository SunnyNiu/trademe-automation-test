import frisby from 'frisby';

describe('UsedCars', () => {
  it('should return 76 brands of cars', () => {
    const expected = 76;
    return frisby
      .get('https://api.tmsandbox.co.nz/v1/Categories/UsedCars.json')
      .expect('status', 200)
      .then((res) => {
        expect(res.json.Subcategories.length).toBe(expected);
      });
  });
});
