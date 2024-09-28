import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import SportsFooter from "../SportsFooter";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Sidebar/>
      <Layout>
        {/* <Header style={{ padding: 0 }} /> */}
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
        <SportsFooter/>
      </Layout>
    </Layout>
    
  );
};

export default MainLayout;
