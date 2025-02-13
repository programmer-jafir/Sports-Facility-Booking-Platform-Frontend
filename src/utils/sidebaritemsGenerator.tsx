import { ItemType } from "antd/es/menu/interface";
import { NavLink } from "react-router-dom";
import { TUserPaths } from "../types"; // Assuming this exists

export const sidebarItemsGenerator = (items: TUserPaths[], role: string): ItemType[] => {
  return items.map<ItemType>((item) => {
    if (item.children) {
      return {
        key: item.name!,
        label: item.name!,
        type: "group", // Ensure proper type
        children: item.children.map((child) => ({
          key: child.name!,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      };
    }

    return {
      key: item.name!,
      label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
    };
  });
};
