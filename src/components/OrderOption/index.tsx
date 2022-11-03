import { useState, useEffect } from 'react';
import { ProList } from '@ant-design/pro-components';
type OrderList = {
  id: number;
  name: string;
  desc: string;
};
const OrderOption = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const geneFakeOrderList = (num: number) => {
    const result = [];
    for (let i = 1; i <= num; i++) {
      result.push({
        id: 1000 + i,
        name: `A00${i}`,
        desc: `这是A0${i}产线的描述`,
      });
    }
    return result;
  };
  const fakeList: OrderList[] = geneFakeOrderList(7);
  // 默认选中全部
  useEffect(() => {
    if (fakeList.length > 0) setSelectedRowKeys(fakeList.map((item) => item.id));
    // eslint-disable-next-line
  }, []);

  return (
    <ProList<OrderList>
      size="small"
      rowKey="id"
      headerTitle="订单总览"
      tooltip="选择产线进行可视化配置"
      dataSource={fakeList}
      metas={{
        title: {
          dataIndex: 'name',
        },

        description: {
          dataIndex: 'desc',
        },
      }}
      rowSelection={{
        selectedRowKeys,
        onChange: setSelectedRowKeys,
      }}
      tableAlertRender={false}
    />
  );
};
export default OrderOption;
