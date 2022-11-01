import { ProList } from '@ant-design/pro-components';

import { useState } from 'react';

type ProductList = {
  id: number;
  name: string;
  desc: string;
  selected?: boolean;
};

const ProductOption = () => {
  const geneFakeProductList = (num: number) => {
    const result = [];
    for (let i = 1; i <= num; i++) {
      result.push({
        id: 1000 + i,
        name: `产品${i}`,
        desc: `这是A0${i}产品的描述`,
      });
    }
    return result;
  };
  const fakeList: ProductList[] = geneFakeProductList(15);

  const [dataSource, setDataSource] = useState<ProductList[]>(fakeList);

  return (
    <ProList<ProductList>
      size="small"
      rowKey="id"
      headerTitle="产品列表"
      tooltip="选择产品进行可视化配置"
      dataSource={dataSource}
      metas={{
        title: {
          dataIndex: 'name',
        },

        description: {
          dataIndex: 'desc',
        },
      }}
      rowClassName={(record: any) => (record.selected ? 'rowSelected' : '')}
      onRow={(record, index) => {
        return {
          onClick: (event) => {
            event.preventDefault();
            if (!record.selected && index !== undefined) {
              const d = [...fakeList];
              d.splice(index, 1, {
                ...record,
                selected: true,
              });
              setDataSource(d);
            }
          },
        };
      }}
    />
  );
};

export default ProductOption;
