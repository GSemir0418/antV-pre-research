import OrderOption from '@/components/OrderOption';
import GanttChart from '@/components/GanttChart';
import { QueryFilter, ProFormDateRangePicker } from '@ant-design/pro-components';
import type { ProFormInstance } from '@ant-design/pro-components';
import { useEffect, useRef, useState } from 'react';
import fakeData from '../../components/GanttChart/fakeData.json';
import s from './index.less';
import ResourceUtilRate from '@/components/ResourceUtilRate';

const GanttChartPage = () => {
  const formRef = useRef<ProFormInstance<Record<string, any>> | undefined>();
  const [data, setData] = useState<any[]>([]);
  const [dateRange, setDateRange] = useState<string[]>();
  const onFinish = (v: any) => {
    setDateRange(v.dateRange || undefined);
    setData([...fakeData]);
    return Promise.resolve();
  };
  // 开局请求赋值
  useEffect(() => {
    formRef.current?.submit();
  }, []);
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <QueryFilter formRef={formRef} onFinish={onFinish} style={{ overflow: 'hidden' }}>
          <ProFormDateRangePicker name="dateRange" label="日期区间" />
        </QueryFilter>
      </div>
      <div className={s.main}>
        <div className={s.orderOption}>
          <OrderOption />
        </div>
        <div className={s.chart}>
          <div className={s.gantt}>
            <GanttChart data={data} dateRange={dateRange} />
          </div>
          <div className={s.table}>
            <ResourceUtilRate dateRange={dateRange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChartPage;
