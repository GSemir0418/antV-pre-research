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
