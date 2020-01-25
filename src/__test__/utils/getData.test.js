import getData from '../../util/getData';

describe('Fech API', () => {
  beforeEach(() => {
    fetch.resetMocks();

  });

  test('Llamar una API y retornar datos ', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com').then(((response) => {
      expect(response.data).toEqual('1234');
    }));

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
