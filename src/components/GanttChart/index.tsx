import type { Cell, Graph } from '@antv/x6';
import { useEffect, useMemo, useState } from 'react';
import { minuteGap, positionXTotime, pxToMillionSecond, timeFormat } from './dataTransFormLib';
import { generateColumns, generateData, generateEdge, generateRows } from './generateConfig';
import { initGraph } from './initGraph';
const GanttChart = (chartProps: any) => {
  const { data, dateRange } = chartProps;
  const [graph, setGraph] = useState<Graph>();

  // 计算timeMode
  const timeMode = useMemo(() => {
    // 默认值是当月的
    if (!dateRange) return 'default';
    const gapHours = minuteGap(dateRange[0], dateRange[1]) / 60;
    // 如果小于或等于24小时，默认显示24小时
    if (gapHours <= 24) return 'hour';
    // 如果大于24小时，但小于5天，以天240px显示
    else if (gapHours <= 5 * 24) return 'day240';
    // 如果大于24小时，但小于12天，以天120px显示
    else if (gapHours <= 12 * 24) return 'day120';
    else return 'day';
  }, [dateRange]);
  // 初始化甘特图画布
  useEffect(() => {
    if (data) {
      // 再次取消全部
      graph?.dispose();
      setGraph(initGraph(timeMode));
    }
    // eslint-disable-next-line
  }, [timeMode, data]);

  // 计算并渲染全部图元
  useEffect(() => {
    if (!graph || !data) return;
    const cells: Cell[] = [];
    Array.from([
      ...generateRows(data, dateRange, timeMode),
      ...generateColumns(data, dateRange, timeMode),
      ...generateData(data, timeMode),
      ...generateEdge(data),
    ]).forEach((item: any) => {
      if (item.shape === 'lane-edge') {
        cells.push(graph.createEdge(item));
      } else {
        cells.push(graph.createNode(item));
      }
    });
    console.log(cells);
    graph.resetCells(cells);
    // 更新tooltip展示
    graph.on('node:mouseup', (props) => {
      const { node } = props;
      if (node.id.includes('n')) return;
      if (node.hasTool('tooltip')) node.removeTool('tooltip');
      const nodeStartTime = new Date(positionXTotime(node.position().x, timeMode)).toISOString();
      const nodeEndTime = new Date(
        new Date(positionXTotime(node.position().x, timeMode)).getTime() +
          pxToMillionSecond(node.getSize().width, timeMode),
      ).toISOString();
      node.addTools([
        {
          name: 'tooltip',
          args: {
            tooltip: node.id,
            startTime: timeFormat(nodeStartTime),
            endTime: timeFormat(nodeEndTime),
            orderInfo: node.getProp().orderInfo,
            deviceInfo: node.getProp().deviceInfo,
          },
        },
      ]);
    });

    // graph.centerContent()
    // graph.scaleContentToFit()
    // graph.zoomToFit({ padding: 10 })
    // graph.zoom(0.2)
  }, [data, dateRange, graph, timeMode]);
  return <div id="gantt-container" />;
};
export default GanttChart;
