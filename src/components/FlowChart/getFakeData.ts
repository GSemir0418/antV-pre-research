const fakeData = [
  {
    id: 1,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 110, y: 120 },
    label: 'First',
    attrs: {
      //   body: { rx: 30, ry: 30 },
    },
  },
  {
    id: 2,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 320, y: 120 },
    label: 'Second',
    attrs: {
      //   body: { rx: 30, ry: 30 },
    },
  },
  {
    id: 3,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 520, y: 120 },
    label: 'Third',
    attrs: {
      //   body: { rx: 30, ry: 30 },
    },
  },
  {
    id: 4,
    shape: 'flow-node',
    width: 100,
    height: 60,
    position: { x: 320, y: 240 },
    label: 'Fourth',
    attrs: {
      //   body: { rx: 30, ry: 30 },
    },
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
