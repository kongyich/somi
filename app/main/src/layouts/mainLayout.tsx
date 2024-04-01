import { FC } from 'react';
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import styles from './styles/ManageLayout.module.scss'
import useNavPage from '../hooks/useNavPage';

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {

  useNavPage(true)
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          {/* <Logo /> */}
        </div>
        <div className={styles.right}>
          {/* <UserInfo /> */}
        </div>
      </Header>
      <Layout className={styles.main}>
        <Content >
          <Outlet />
        </Content>
      </Layout>
      <Footer className={styles.footer}>somi &copy;2024 - present. Created by gua</Footer>
    </Layout>
  );
};

export default MainLayout
