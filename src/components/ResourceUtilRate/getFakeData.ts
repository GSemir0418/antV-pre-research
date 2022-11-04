export type ResourceUtilDataType = Record<string, string>;
export const getFakeData = (cols: string[]) => {
  const result = [];
  // [ {resource: 'xxx', '11/4': '100%'...}, {...} ,...]
  const resources = ['切削设备', '蒸煮设备', '炒锅', '腌制', '包装'];
  for (const r of resources) {
    const obj2 = {};
    for (const col of cols) {
      obj2[col] = '100%';
    }
    const obj: ResourceUtilDataType = { ...obj2 };
    obj.resource = r;
    result.push(obj);
  }
  return result;
};
