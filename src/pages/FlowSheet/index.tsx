import { SheetComponent } from '@antv/s2-react';
import { useEffect, useRef, useState } from 'react';
import fakeSheetData from './fakeSheetData.json';
import type { SpreadSheet } from '@antv/s2';
import { S2Event } from '@antv/s2';
import { pick } from 'lodash';
import { getRowCount, initData } from '@/pages/FlowSheet/initData';
const FlowSheet = () => {
  const initOptions = {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  };

  // sheet Ref实例
  const S2Ref = useRef<SpreadSheet>(null);
  // input Ref实例
  const inputRef = useRef<HTMLInputElement>(null);
  // sheet选项
  const [options] = useState(initOptions);
  // 数据配置
  const [dataCfg] = useState(initData(fakeSheetData));
  // input value
  const [value, setValue] = useState('');
  // input show
  const [show, setShow] = useState(false);
  // input position
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  // 当前编辑的cell
  const [cell, setCell] = useState<any>(null);
  // 绑定单元格单击事件，保存当前cell
  useEffect(() => {
    const sheet = S2Ref.current;
    sheet?.on(S2Event.DATA_CELL_CLICK, (e) => {
      setCell(e.target.cfg.parent);
    });
  }, []);
  // 通过当前cell的信息，将input元素覆盖上去，同时赋初始值
  useEffect(() => {
    const sheet = S2Ref.current;
    if (sheet && cell) {
      const cellMeta = pick(cell.getMeta(), ['x', 'y', 'width', 'height', 'fieldValue']);
      // 获取列的高度和宽度，计算input位置
      const colCellHeight = (sheet.getColumnLeafNodes()[0] || { height: 0 }).height;
      const rowCellWidth = (sheet.getRowLeafNodes()[0] || { width: 0 }).width;
      setPosition({
        left: cellMeta.x + rowCellWidth * 6,
        top: cellMeta.y + colCellHeight * 2,
        width: cellMeta.width,
        height: cellMeta.height,
      });
      setShow(true);
      setValue(cellMeta.fieldValue);
    }
  }, [cell]);
  const onSave = (val: string) => {
    const sheet = S2Ref.current;
    if (sheet && cell) {
      const { rowIndex, colIndex, valueField, data } = cell.getMeta();
      console.log(cell.getMeta());
      // console.log('row', rowIndex);
      // console.log('col', colIndex);
      // originData中图元是沿横向自左上呈蛇形排列的形式
      // 按产品名称进行分组，即先排产品A，再排产品B
      // 单元格所在产品: data.productName
      // 计算单元格所在产品的行数
      const cellIndex = rowIndex * getRowCount(fakeSheetData, data.productName) + colIndex;
      console.log('data', sheet.dataSet.originData);
      sheet.dataSet.originData[cellIndex][valueField] = val;
      sheet.setDataCfg({ ...sheet.dataCfg, data: sheet.dataSet.originData });
      sheet.render();
      setShow(false);
    }
  };
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        onSave(value);
      }
    };
    if (inputRef.current) inputRef.current.addEventListener('keydown', onKeyDown);
    return () => {
      inputRef.current?.removeEventListener('keydown', onKeyDown);
    };
  }, [value]);
  // 自动focus
  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, [show]);
  return (
    <div id="flow-sheet-container" style={{ position: 'relative' }}>
      <SheetComponent ref={S2Ref} dataCfg={dataCfg} options={options} sheetType={'pivot'} />
      {show && (
        <input
          ref={inputRef}
          style={{
            ...position,
            position: 'absolute',
            textAlign: 'right',
            zIndex: 1000,
          }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      )}
    </div>
  );
};
export default FlowSheet;
