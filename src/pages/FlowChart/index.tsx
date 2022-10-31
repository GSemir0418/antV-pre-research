import FlowChart from '@/components/FlowChart';
import ProductOption from '@/components/ProductOption';
import s from './index.less';
const FlowChartPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.optionWrapper}>
        <ProductOption />
      </div>
      <div className={s.containerWrapper}>
        <FlowChart />
      </div>
    </div>
  );
};
export default FlowChartPage;
