// Each test loads a fresh copy of the service so its cache starts empty.
const loadService = () => {
  let service;
  jest.isolateModules(() => {
    service = require('../services/projectsService');
  });
  return service;
};

const respondWith = (projects) =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(projects) });

beforeEach(() => {
  global.fetch = jest.fn();
});

test('PDATA-1 projects are loaded from projects.json once and shared', async () => {
  fetch.mockReturnValue(respondWith([{ id: 1, order: 0 }]));
  const { getProjects } = loadService();

  await getProjects();
  await getProjects();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('/projects/projects.json');
});

test('PDATA-2 projects are sorted by order', async () => {
  fetch.mockReturnValue(
    respondWith([
      { id: 1, order: 2 },
      { id: 2, order: 0 },
      { id: 3, order: 1 },
    ])
  );
  const { getProjects } = loadService();
  const ids = (await getProjects()).map((p) => p.id);
  expect(ids).toEqual([2, 3, 1]);
});

test('PDATA-4 a failed load is retried on the next request', async () => {
  fetch
    .mockReturnValueOnce(Promise.resolve({ ok: false }))
    .mockReturnValueOnce(respondWith([{ id: 1, order: 0 }]));
  const { getProjects } = loadService();

  await expect(getProjects()).rejects.toThrow('Failed to load projects.json');
  await expect(getProjects()).resolves.toHaveLength(1);
});

test('getProjectById finds a project by id given as a string', async () => {
  fetch.mockReturnValue(
    respondWith([
      { id: 1, order: 0 },
      { id: 2, order: 1 },
    ])
  );
  const { getProjectById } = loadService();
  await expect(getProjectById('2')).resolves.toEqual({ id: 2, order: 1 });
  await expect(getProjectById('9')).resolves.toBeNull();
});
