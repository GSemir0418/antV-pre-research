import type { Cell, Graph } from '@antv/x6';
import { useState, useEffect } from 'react';
import EditModal from './EditModal';
import { getFakeData } from './getFakeData';
// import { autoLayout } from './autoLayout';
import { initGraph } from './initGraph';
const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
  for (let i = 0, len = ports.length; i < len; i = i + 1) {
    ports[i].style.visibility = show ? 'visible' : 'hidden';
  }
};
const FlowChart = () => {
  //   const data: any[] = [];
  const [isVisible, setVisible] = useState<boolean>(false);
  const [graph, setGraph] = useState<Graph>();
  // 初始化画布
  useEffect(() => {
    // if (data) {
    //   graph?.dispose();
    setGraph(initGraph());
    // }
  }, []);

  // 计算并渲染图元
  useEffect(() => {
    if (!graph) return;
    const cells: Cell[] = [];
    getFakeData().forEach((item: any) => {
      if (item.shape === 'flow-node') {
        cells.push(graph.createNode(item));
      } else {
        cells.push(graph.createEdge(item));
      }
    });
    graph.resetCells(cells);
    // graph.zoomTo(0.8);
    // graph.zoomToFit();
    graph.centerContent();
    graph.on('node:click', ({ node }) => {
      if (node) {
        graph.removeTools();
        node.addTools({
          name: 'boundary',
          args: {
            attrs: {
              fill: '#7c68fc',
              stroke: '#9254de',
              strokeWidth: 1,
              fillOpacity: 0.2,
            },
          },
        });
        setVisible(true);
      }
    });
    graph.on('node:mouseenter', () => {
      const container = document.getElementById('container')!;
      const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>;
      showPorts(ports, true);
    });
    graph.on('node:mouseleave', () => {
      const container = document.getElementById('container')!;
      const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>;
      showPorts(ports, false);
    });
    // graph.on('node:mouseenter', ({ node }) => {
    //   if (node) {
    //     node.addTools([
    //       {
    //         name: 'button-remove',
    //         args: {
    //           x: 0,
    //           y: 0,
    //           offset: { x: 10, y: 10 },
    //         },
    //       },
    //       {
    //         name: 'button',
    //         args: {
    //           markup: [
    //             {
    //               tagName: 'circle',
    //               selector: 'button',
    //               attrs: {
    //                 r: 14,
    //                 stroke: '#fe854f',
    //                 strokeWidth: 2,
    //                 fill: 'white',
    //                 cursor: 'pointer',
    //               },
    //             },
    //             {
    //               tagName: 'text',
    //               textContent: 'Btn',
    //               selector: 'icon',
    //               attrs: {
    //                 fill: '#fe854f',
    //                 fontSize: 10,
    //                 textAnchor: 'middle',
    //                 pointerEvents: 'none',
    //                 y: '0.3em',
    //               },
    //             },
    //           ],
    //           x: '100%',
    //           y: '100%',
    //           offset: { x: -20, y: -20 },
    //           onClick({ cell }: { cell: Cell }) {
    //             console.log(cell);
    //           },
    //         },
    //       },
    //     ]);
    //   }
    // });
    // graph.on('node:mouseleave', ({ node }) => {
    //   if (node) {
    //     node.removeTool('button');
    //     node.removeTool('button-remove');
    //   }
    // });
  }, [graph]);
  return (
    <>
      <div id="container" />
      <EditModal
        isVisible={isVisible}
        close={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default FlowChart;
