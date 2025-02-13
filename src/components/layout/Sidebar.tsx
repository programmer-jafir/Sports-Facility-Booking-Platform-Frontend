import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebaritemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { ItemType } from "antd/es/menu/interface";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems: ItemType[] = [];

  if (user) {
    sidebarItems =
      user.role === userRole.ADMIN
        ? sidebarItemsGenerator(adminPaths, userRole.ADMIN)
        : sidebarItemsGenerator(userPaths, userRole.USER);
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={sidebarItems} />
    </Sider>
  );
};

export default Sidebar;
