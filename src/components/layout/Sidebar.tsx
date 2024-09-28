import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebaritemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { userPaths } from '../../routes/user.routes';

const {  Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    User: 'user',
}


const Sidebar = () => {
    const role = 'user';
    let sidebarItems;
    switch (role) {
        case userRole.ADMIN:
           sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
            break;
        case userRole.User:
           sidebarItems = sidebarItemsGenerator(userPaths, userRole.User);
            break;
    
        default:
            break;
    }
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
       
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    );
};

export default Sidebar;






// SidebarComponent.jsx
// import { sidebarItemsGenerator } from '../../utils/sidebaritemsGenerator';
// import { adminPaths } from '../../routes/admin.routes';
// import { userPaths } from '../../routes/user.routes';

// import React, { useState } from 'react';
// import { Layout, Menu } from 'antd';

// const userRole = {
//     ADMIN: 'admin',
//     User: 'user',
// }

// const Sidebar = () => {
//   const role = 'user';
//     let sidebarItems;
//     switch (role) {
//         case userRole.ADMIN:
//            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
//             break;
//         case userRole.User:
//            sidebarItems = sidebarItemsGenerator(userPaths, userRole.User);
//             break;
    
//         default:
//             break;
//     }
//   const [collapsed, setCollapsed] = useState(false);
//   const {  Sider } = Layout;

//   return (
//     <Sider
//       collapsible
//       collapsed={collapsed}
//       onCollapse={(value) => setCollapsed(value)}
//       breakpoint="lg" // Collapse at 'large' breakpoint (1024px and below)
//       onBreakpoint={(broken) => setCollapsed(broken)} // Auto collapse when screen size breaks
//       style={{ height: '100vh' }}
//     >
//       {/* <div className="logo" style={{ color: 'white', textAlign: 'center', padding: '16px' }}>
//         My Logo
//       </div> */}
//       <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={["4"]}
//           items={sidebarItems}
//         />
//     </Sider>
//   );
// };

// export default Sidebar;

