import type { Graph } from '@antv/x6';
import { useState, useEffect } from 'react';
// import { autoLayout } from './autoLayout';
import { createEdge, createNode, initGraph } from './initGraph';
const male =
  'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*kUy8SrEDp6YAAAAAAAAAAAAAARQnAQ';
const female =
  'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*f6hhT75YjkIAAAAAAAAAAAAAARQnAQ';
// 布局方向
export const dir = 'LR'; // LR RL TB BT
const FlowChart = () => {
  const data: any[] = [];
  const [graph, setGraph] = useState<Graph>();
  // 初始化画布
  useEffect(() => {
    if (data) {
      graph?.dispose();
      setGraph(initGraph());
    }
  }, [data]);

  // 计算并渲染图元
  useEffect(() => {
    if (!graph) return;
    const nodes = [
      createNode(graph, 'Founder & Chairman', 'Pierre Omidyar', male),
      createNode(graph, 'President & CEO', 'Margaret C. Whitman', female),
      createNode(graph, 'President, PayPal', 'Scott Thompson', male),
      createNode(graph, 'President, Ebay Global Marketplaces', 'Devin Wenig', male),
      createNode(graph, 'Senior Vice President Human Resources', 'Jeffrey S. Skoll', male),
      createNode(graph, 'Senior Vice President Controller', 'Steven P. Westly', male),
    ];
    const edges = [
      createEdge(graph, nodes[0], nodes[1]),
      createEdge(graph, nodes[1], nodes[2]),
      createEdge(graph, nodes[1], nodes[3]),
      createEdge(graph, nodes[1], nodes[4]),
      createEdge(graph, nodes[1], nodes[5]),
    ];
    graph.resetCells([...nodes, ...edges]);
    // autoLayout(graph);
    graph.zoomTo(0.8);
    graph.centerContent();
    // setup();
  }, [graph]);
  return <div id="container" />;
};

export default FlowChart;
