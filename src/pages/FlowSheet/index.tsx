import { PivotSheet } from '@antv/s2';
import { useEffect } from 'react';
import fakeSheetData from './fakeSheetData.json';
const FlowSheet = () => {
  useEffect(() => {
    const container = document.getElementById('flow-sheet-container')!;
    const s2Options = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };
    const s2 = new PivotSheet(container, fakeSheetData, s2Options);
    s2.render();
  }, []);
  return <div id="flow-sheet-container" />;
};
export default FlowSheet;
