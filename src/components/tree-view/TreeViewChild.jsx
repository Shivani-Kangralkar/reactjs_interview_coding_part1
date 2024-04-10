import React from "react";
import TreeViewSubChild from "./TreeViewSubChild";

const TreeViewChild = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length > 0
      ? list.map((item) => <TreeViewSubChild item={item} key={item.label}/>) : null}
    </ul>

  );
};

export default TreeViewChild;
