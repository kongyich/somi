import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const MainLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content
          style={{
            width: '100%'
          }}
        >
          <div style={{ paddingLeft: '40px' }}>
            <Outlet />
          </div>

        </Content>
      </Layout>
    </Layout>
  );
};



export default MainLayout
