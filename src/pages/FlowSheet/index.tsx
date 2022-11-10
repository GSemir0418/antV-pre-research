import { SheetComponent } from '@antv/s2-react';
import { useRef, useState } from 'react';
import fakeSheetData from './fakeSheetData.json';
import type { SpreadSheet } from '@antv/s2';
const FlowSheet = () => {
  const initOptions = {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  };
  const S2Ref = useRef<SpreadSheet>(null);
  const [options] = useState(initOptions);
  const [dataCfg] = useState(fakeSheetData);
  return (
    <div id="flow-sheet-container">
      <SheetComponent ref={S2Ref} dataCfg={dataCfg} options={options} sheetType={'pivot'} />
    </div>
  );
};
export default FlowSheet;
