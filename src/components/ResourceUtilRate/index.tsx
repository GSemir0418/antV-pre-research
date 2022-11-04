import { ProTable } from '@ant-design/pro-components';
import { useEffect, useState, useMemo } from 'react';
import { minuteGap } from '../GanttChart/dataTransFormLib';
import { COLS } from '../GanttChart/generateConfig';
import type { ResourceUtilDataType } from './getFakeData';
import { getFakeData } from './getFakeData';
const ResourceUtilRate = ({ dateRange }: any) => {
  const [dataSource, setDataSource] = useState<ResourceUtilDataType[]>([]);
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
  const cols = useMemo(() => COLS(dateRange, timeMode), [dateRange, timeMode]);
  useEffect(() => {
    setDataSource(getFakeData(cols));
  }, [cols]);
  const columns = [
    {
      title: '资源',
      dataIndex: 'resource',
      width: '200px',
      fixed: 'left',
    },
    ...cols.map((item) => {
      return {
        title: item,
        dataIndex: item,
        width: '80px',
      };
    }),
  ];
  return (
    <ProTable
      dataSource={dataSource}
      headerTitle="资源利用率"
      size={'small'}
      search={false}
      options={false}
      // @ts-ignore
      columns={columns}
      scroll={{ x: '100px', y: '150px' }}
    />
  );
};
export default ResourceUtilRate;
