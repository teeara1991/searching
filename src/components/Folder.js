import React, { useState } from "react";
import styled from "styled-components";

const FolderWrapper = styled.ul`
  marginleft: 20;
`;

function Folder(props) {
  const { folder, handleChangeFolder } = props;
  const [open, setOpen] = useState(false);
  const _handleClick = e => {
    setOpen(!open);
    handleChangeFolder(folder.id, e);
  };

  return (
    <FolderWrapper onClick={_handleClick}>
      {folder.name}
      {open &&
        folder.subfolders.map((item, index) => {
          return (
            <li>
              <Folder {...props} key={index} folder={item} />
            </li>
          );
        })}
    </FolderWrapper>
  );
}

export default Folder;
