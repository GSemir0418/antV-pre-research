import { ProList } from '@ant-design/pro-components';

import { useState } from 'react';
import s from './index.less';

type ProductList = {
  id: number;
  name: string;
  desc: string;
  selected?: boolean;
};

const ProductOption = () => {
  const fakeList: ProductList[] = [
    {
      id: 1001,
      name: '产品1',
      desc: 'A001',
    },

    {
      id: 1002,
      name: '产品2',
      desc: 'A002',
    },

    {
      id: 1003,
      name: '产品3',
      desc: 'A003',
    },

    {
      id: 1004,
      name: '产品4',
      desc: 'A004',
    },

    {
      id: 1005,
      name: '产品5',
      desc: 'A005',
    },

    {
      id: 1006,
      name: '产品6',
      desc: 'A006',
    },

    {
      id: 1007,
      name: '产品7',
      desc: 'A007',
    },

    {
      id: 1008,
      name: '产品8',
      desc: 'A008',
    },

    {
      id: 1009,
      name: '产品9',
      desc: 'A009',
    },

    {
      id: 1010,
      name: '产品10',
      desc: 'A010',
    },

    {
      id: 1011,
      name: '产品11',
      desc: 'A011',
    },

    {
      id: 1012,
      name: '产品12',
      desc: 'A012',
    },

    {
      id: 1013,
      name: '产品13',
      desc: 'A013',
    },
  ];
  const [dataSource, setDataSource] = useState<ProductList[]>(fakeList);

  return (
    <div className={s.wrapper}>
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
    </div>
  );
};

export default ProductOption;
