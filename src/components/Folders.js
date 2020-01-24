import React from "react";

function createTree(data) {
  const ul = document.createElement("ul");

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.key = item.id;
    if (item.subfolders[0]) {
      li.appendChild(createTree(item.subfolders));
    }
    ul.appendChild(li);
  });
  return ul;
}
class Folders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { folders } = this.props;
    return (
      <div
        id="folders"
        dangerouslySetInnerHTML={{ __html: createTree(folders).outerHTML }}
      />
    );
  }
}

export default Folders;
