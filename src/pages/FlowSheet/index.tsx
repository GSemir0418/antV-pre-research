import { PivotSheet } from '@antv/s2';
import { useEffect } from 'react';
const FlowSheet = () => {
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json')
      .then((res) => res.json())
      .then((dataCfg) => {
        const container = document.getElementById('flow-sheet-container')!;
        const s2Options = {
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        };
        const s2 = new PivotSheet(container, dataCfg, s2Options);
        s2.render();
      });
  }, []);
  return <div id="flow-sheet-container" />;
};
export default FlowSheet;
