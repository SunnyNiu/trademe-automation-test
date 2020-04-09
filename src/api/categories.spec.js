import frisby from 'frisby';
import { baseURL } from './categories';

describe('UsedCars', () => {
  const usedCarsURL = `${baseURL}/UsedCars.json`;

  it('should return 76 brands of cars', () => {
    return frisby
      .get(usedCarsURL)
      .expect('status', 200)
      .then((res) => {
        expect(res.json.Subcategories.length).toBe(76);
      });
  });

  it("brand 'Kia' should exists and its number should be 1", () => {
    return frisby
      .get(`${usedCarsURL}?with_counts=true`)
      .expect('status', 200)
      .then((res) => {
        const kiaExist = res.json.Subcategories.some(
          ({ Name }) => Name === 'Kia'
        );
        expect(kiaExist).toBe(true);

        const kia = res.json.Subcategories.find(({ Name }) => Name === 'Kia');
        const { Count } = kia;
        expect(Count).toBe(1);
      });
  });

  it('‘Hispano Suiza’ does not exist', () => {
    return frisby
      .get(usedCarsURL)
      .expect('status', 200)
      .then((res) => {
        const hispanoSuizaExist = res.json.Subcategories.some(
          ({ Name }) => Name === 'Hispano Suiza'
        );
        expect(hispanoSuizaExist).toBe(false);
      });
  });
});
