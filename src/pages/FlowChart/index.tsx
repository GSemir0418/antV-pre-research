import ProductOption from '@/components/ProductOption';
import s from './index.less';
const FlowChartPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.optionWrapper}>
        <ProductOption />
      </div>
      <div className={s.container}>流程图</div>
    </div>
  );
};
export default FlowChartPage;
