import { DrawerForm } from '@ant-design/pro-components';
import { Form, Tabs } from 'antd';
const EditModal = (props: any) => {
  const { isVisible } = props;
  const [form] = Form.useForm();
  return (
    <DrawerForm
      title="编辑工序"
      open={isVisible}
      form={form}
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
      }}
      onFinish={() => Promise.resolve()}
    >
      <Tabs
        defaultActiveKey="1"
        onChange={() => {}}
        centered
        items={[
          {
            label: `Tab 1`,
            key: '1',
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Tab 3`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </DrawerForm>
  );
};
export default EditModal;
