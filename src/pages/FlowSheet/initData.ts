import { omit, pick } from 'lodash';

export const initData = (dataCfg: any) => {
  const originData = [...dataCfg.data];
  const arr = [];
  const localeMap = {
    frontSettings: '前设置',
    make: '制造',
    postSettings: '后设置',
    connectionMethod: '接续方法',
    moveTime: '移动时间/min',
  };
  for (const d of originData) {
    const process = omit(d, [
      'productName',
      'operationNo',
      'operationDescription',
      'instructionType',
      'instructionCode',
      'resource',
    ]);
    const base = pick(d, [
      'productName',
      'operationNo',
      'operationDescription',
      'instructionType',
      'instructionCode',
      'resource',
    ]);
    for (const key in process) {
      arr.push({ ...base, setting: localeMap[key], value: process[key] });
    }
  }
  return { ...dataCfg, data: arr };
};
// 根据产品名称获取对应总行数
export const getRowCount = (dataCfg: any, field: string) => {
  const originData = [...dataCfg.data];
  let result = 0;
  for (const d of originData) {
    if (d.productName === field) {
      result += 1;
    }
  }
  console.log(result);
  return result;
};
