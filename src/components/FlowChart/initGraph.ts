import type { Cell } from '@antv/x6';
import { Dom } from '@antv/x6';
import { Graph } from '@antv/x6';
import { registerNodes } from './registerNodes';

export const initGraph = () => {
  // 注册自定义图元
  registerNodes();
  // 初始化画布
  return new Graph({
    container: document.getElementById('container')!,
    scroller: {
      enabled: true,
      padding: 0,
      pageWidth: 0,
      minVisibleHeight: 0,
      minVisibleWidth: 0,
      pannable: true,
    },
    interacting: false,
  });
};

export const createNode = (graph: Graph, rank: string, name: string, image: string) => {
  return graph.createNode({
    shape: 'org-node',
    attrs: {
      '.image': { xlinkHref: image },
      '.rank': {
        text: Dom.breakText(rank, { width: 160, height: 45 }),
      },
      '.name': {
        text: Dom.breakText(name, { width: 160, height: 45 }),
      },
    },
  });
};

export const createEdge = (graph: Graph, source: Cell, target: Cell) => {
  return graph.createEdge({
    shape: 'org-edge',
    source: { cell: source.id },
    target: { cell: target.id },
  });
};
