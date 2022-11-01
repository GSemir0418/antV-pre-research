import type { Cell } from '@antv/x6';
import { Color, Graph } from '@antv/x6';
export const registerNodes = () => {
  const portAttrs = {
    circle: {
      r: 4,
      magnet: true,
      stroke: '#5F95FF',
      strokeWidth: 1,
      fill: '#fff',
      style: {
        visibility: 'hidden',
      },
    },
  };
  const ports = {
    groups: {
      top: {
        position: 'top',
        attrs: { ...portAttrs },
      },
      right: {
        position: 'right',
        attrs: { ...portAttrs },
      },
      bottom: {
        position: 'bottom',
        attrs: { ...portAttrs },
      },
      left: {
        position: 'left',
        attrs: { ...portAttrs },
      },
    },
    items: [
      {
        group: 'top',
        // 控制链接桩用
        // id: 'top',
      },
      {
        group: 'right',
      },
      {
        group: 'bottom',
      },
      {
        group: 'left',
      },
    ],
  };
  // 自定义节点
  Graph.registerNode(
    'flow-node',
    {
      inherit: 'rect',
      width: 100,
      height: 60,
      // 自定义按钮工具
      tools: [
        {
          name: 'button-remove',
          args: {
            x: '100%',
            y: 0,
            offset: { x: -10, y: 10 },
          },
        },
        {
          name: 'button',
          args: {
            markup: [
              {
                tagName: 'circle',
                selector: 'button',
                attrs: {
                  r: 7,
                  fill: 'blue',
                  cursor: 'pointer',
                },
              },
              {
                tagName: 'text',
                textContent: '+',
                selector: 'icon',
                attrs: {
                  fill: 'white',
                  fontSize: 16,
                  fontWeight: 'bolder',
                  textAnchor: 'middle',
                  pointerEvents: 'none',
                  y: '0.3em',
                },
              },
            ],
            x: '100%',
            y: '100%',
            offset: { x: -10, y: -10 },
            onClick({ cell }: { cell: Cell }) {
              const fill = Color.randomHex();
              cell.attr({
                body: {
                  fill,
                },
                label: {
                  fill: Color.invert(fill, true),
                },
              });
            },
          },
        },
      ],
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
        },
        text: {
          fontSize: 12,
          fill: '#262626',
        },
      },
      ports: { ...ports },
    },
    true,
  );
  // 自定义边
  Graph.registerEdge(
    'flow-edge',
    {
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
    },
    true,
  );
};
