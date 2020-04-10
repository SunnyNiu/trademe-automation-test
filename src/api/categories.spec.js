import frisby from 'frisby';
import { baseURL } from './categories';

describe('UsedCars Category', () => {
  const usedCarsURL = `${baseURL}/UsedCars.json`;

  it('should return 76 brands of cars', () => {
    return frisby
      .get(usedCarsURL)
      .expect('status', 200)
      .then((res) => {
        expect(res.json.Subcategories.length).toBe(76);
      });
  });

  it(`should exists a brand called 'Kia', its count should be 1`, () => {
    return frisby
      .get(`${usedCarsURL}?with_counts=true`)
      .expect('status', 200)
      .then((res) => {
        const kia = res.json.Subcategories.find(({ Name }) => Name === 'Kia');
        expect(kia).toBeTruthy();
        expect(kia.Count).toBe(1);
      });
  });

  it(`should not contains brand named 'Hispano Suiza'`, () => {
    return frisby
      .get(usedCarsURL)
      .expect('status', 200)
      .then((res) => {
        const hispanoSuiza = res.json.Subcategories.find(
          ({ Name }) => Name === 'Hispano Suiza'
        );
        expect(hispanoSuiza).toBeFalsy();
      });
  });
});
