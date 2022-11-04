import type { Cell } from '@antv/x6';
import { Shape } from '@antv/x6';
import { Dom } from '@antv/x6';
import { Graph } from '@antv/x6';
import { registerNodes } from './registerNodes';

export const initGraph = () => {
  // 初始化画布
  const g = new Graph({
    container: document.getElementById('container')!,
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
    // 连线选项
    connecting: {
      router: 'manhattan',
      // 锚点
      // anchor: 'orth',
      allowBlank: false,
      // 连接点
      connectionPoint: 'rect',
      createEdge() {
        return new Shape.Edge({
          inherit: 'edge',
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2,
            },
          },
          label: {
            attrs: {
              label: {
                fill: '#A2B1C3',
                fontSize: 12,
              },
            },
          },
        });
      },
      validateConnection({ targetMagnet }) {
        return !!targetMagnet;
      },
    },
    scroller: {
      enabled: true,
      // padding: 12,
      // pageWidth: 0,
      // minVisibleHeight: 0,
      // minVisibleWidth: 0,
      pannable: true,
    },
    // @ts-ignore
    height: '100%',
    autoResize: true,
    // 对齐线
    snapline: true,
    // 网格
    grid: {
      visible: true,
    },
  });
  // 注册自定义图元
  registerNodes(g);
  return g;
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
    source: { cell: source.id, port: 'top' },
    target: { cell: target.id, port: 'top' },
  });
};
