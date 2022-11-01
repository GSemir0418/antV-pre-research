const fakeData = [
  {
    id: 1,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 100, y: 100 },
    label: 'First',
  },
  {
    id: 2,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 300, y: 200 },
    label: 'Second',
  },
  {
    id: 3,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 500, y: 200 },
    label: 'Third',
  },
  {
    id: 4,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 300, y: 0 },
    label: 'Fourth',
  },
  {
    id: 5,
    shape: 'flow-edge',
    source: 1,
    target: 2,
  },
  {
    id: 6,
    shape: 'flow-edge',
    source: 2,
    target: 3,
  },
  {
    id: 7,
    shape: 'flow-edge',
    source: 1,
    target: 4,
  },
];
export const getFakeData = () => {
  return fakeData;
};
