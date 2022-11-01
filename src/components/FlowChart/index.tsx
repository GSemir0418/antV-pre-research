import type { Cell, Graph } from '@antv/x6';
import { useState, useEffect } from 'react';
import { getFakeData } from './getFakeData';
// import { autoLayout } from './autoLayout';
import { initGraph } from './initGraph';

const FlowChart = () => {
  //   const data: any[] = [];
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
    // setup();

    graph.on('node:mouseenter', ({ node }) => {
      console.log(node);
      if (node) {
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
      }
    });
    graph.on('node:mouseleave', ({ node }) => {
      if (node) {
        node.removeTools();
      }
    });
  }, [graph]);
  return <div id="container" />;
};

export default FlowChart;
