import s from './index.less';

const GanttChartPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>表头</div>
      <div className={s.main}>
        <div className={s.orderOption}>多选列表</div>
        <div className={s.chart}>
          <div className={s.gantt}>图表</div>
          <div className={s.table}>表格</div>
        </div>
      </div>
    </div>
  );
};

export default GanttChartPage;
