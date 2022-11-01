import { DrawerForm } from '@ant-design/pro-components';
import { Form, Tabs } from 'antd';
const EditModal = (props: any) => {
  const { isVisible, close } = props;
  const [form] = Form.useForm();
  return (
    <DrawerForm
      title="工序详情"
      open={isVisible}
      form={form}
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
        bodyStyle: {
          paddingTop: 0,
        },
        maskClosable: true,
        onClose: () => close(),
      }}
      onFinish={() => Promise.resolve(true)}
    >
      <Tabs
        defaultActiveKey="1"
        onChange={() => {}}
        centered
        size={'small'}
        tabBarGutter={90}
        items={[
          {
            label: `输入`,
            key: '1',
            children: `Content of Tab Pane 1`,
          },
          {
            label: `输出`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `使用`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </DrawerForm>
  );
};
export default EditModal;
