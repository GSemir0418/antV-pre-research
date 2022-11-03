import OrderOption from '@/components/OrderOption';
import GanttChart from '@/components/GanttChart';
import { QueryFilter, ProFormDateRangePicker } from '@ant-design/pro-components';
import type { ProFormInstance } from '@ant-design/pro-components';
import { useRef } from 'react';
import s from './index.less';

const GanttChartPage = () => {
  const formRef = useRef<ProFormInstance<Record<string, any>> | undefined>();
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <QueryFilter
          formRef={formRef}
          // onFinish={}
          style={{ overflow: 'hidden' }}
        >
          <ProFormDateRangePicker name="dateRange" label="日期区间" />
        </QueryFilter>
      </div>
      <div className={s.main}>
        <div className={s.orderOption}>
          <OrderOption />
        </div>
        <div className={s.chart}>
          <div className={s.gantt}>
            <GanttChart />
          </div>
          <div className={s.table}>表格</div>
        </div>
      </div>
    </div>
  );
};

export default GanttChartPage;
