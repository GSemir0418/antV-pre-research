import { Graph } from '@antv/x6';
export const registerNodes = () => {
  // 自定义节点
  Graph.registerNode(
    'org-node',
    {
      width: 260,
      height: 88,
      markup: [
        {
          tagName: 'rect',
          attrs: {
            class: 'card',
          },
        },
        {
          tagName: 'image',
          attrs: {
            class: 'image',
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'rank',
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'name',
          },
        },
        {
          tagName: 'g',
          attrs: {
            class: 'btn add',
          },
          children: [
            {
              tagName: 'circle',
              attrs: {
                class: 'add',
              },
            },
            {
              tagName: 'text',
              attrs: {
                class: 'add',
              },
            },
          ],
        },
        {
          tagName: 'g',
          attrs: {
            class: 'btn del',
          },
          children: [
            {
              tagName: 'circle',
              attrs: {
                class: 'del',
              },
            },
            {
              tagName: 'text',
              attrs: {
                class: 'del',
              },
            },
          ],
        },
      ],
      attrs: {
        '.card': {
          rx: 10,
          ry: 10,
          refWidth: '100%',
          refHeight: '100%',
          fill: '#5F95FF',
          stroke: '#5F95FF',
          strokeWidth: 1,
          pointerEvents: 'visiblePainted',
        },
        '.image': {
          x: 16,
          y: 16,
          width: 56,
          height: 56,
          opacity: 0.7,
        },
        '.rank': {
          refX: 0.95,
          refY: 0.5,
          fill: '#fff',
          fontFamily: 'Courier New',
          fontSize: 13,
          textAnchor: 'end',
          textVerticalAnchor: 'middle',
        },
        '.name': {
          refX: 0.95,
          refY: 0.7,
          fill: '#fff',
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: '600',
          textAnchor: 'end',
        },
        '.btn.add': {
          refDx: -16,
          refY: 16,
          event: 'node:add',
        },
        '.btn.del': {
          refDx: -44,
          refY: 16,
          event: 'node:delete',
        },
        '.btn > circle': {
          r: 10,
          fill: 'transparent',
          stroke: '#fff',
          strokeWidth: 1,
        },
        '.btn.add > text': {
          fontSize: 20,
          fontWeight: 800,
          fill: '#fff',
          x: -5.5,
          y: 7,
          fontFamily: 'Times New Roman',
          text: '+',
        },
        '.btn.del > text': {
          fontSize: 28,
          fontWeight: 500,
          fill: '#fff',
          x: -4.5,
          y: 6,
          fontFamily: 'Times New Roman',
          text: '-',
        },
      },
    },
    true,
  );
  // 自定义边
  Graph.registerEdge(
    'org-edge',
    {
      zIndex: -1,
      attrs: {
        line: {
          strokeWidth: 2,
          stroke: '#A2B1C3',
          sourceMarker: null,
          targetMarker: null,
        },
      },
    },
    true,
  );
};
