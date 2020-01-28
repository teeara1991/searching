import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Folders(props) {
  const { folders, handleChangeFolder, curFolderId } = props;
  return <div style={{ marginLeft: 10 }}>{renderMenu(folders)}</div>;
  function renderMenu(items) {
    return items.map((item: any, index: any) => {
      return (
        <div
          key={item.id}
          style={{
            marginLeft: 20,
            color: item.id === curFolderId ? "red" : "black"
          }}
          onClick={e => {
            item.class = !item.class || item.class !== "active" ? "active" : "";
            handleChangeFolder(item.id, e);
          }}
        >
          {item.name}
          {item.class === "active" && item.subfolders
            ? renderMenu(item.subfolders)
            : null}
        </div>
      );
    });
  }
}

export default Folders;
