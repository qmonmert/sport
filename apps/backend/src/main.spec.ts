import { User } from 'libs/activities/src/lib/user/user.component';

describe('main.ts', () => {
  it('should have good properties', () => {
    const user: User = {
      id: 1,
      firstname: 'Quentin',
      lastname: 'Monmert',
      city: 'Paris',
      country: 'France'
    };
    expect(user.id).toEqual(1);
    expect(user.firstname).toEqual('Quentin');
    expect(user.lastname).toEqual('Monmert');
    expect(user.city).toEqual('Paris');
    expect(user.country).toEqual('France');
  });
});
