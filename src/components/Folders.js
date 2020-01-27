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
    const { folders, handleChangeFolder } = this.props;
    const renderMenu = items => {
      return items.map((item: any, index: any) => {
        return (
          <li
            key={item.id}
            style={{ marginLeft: 10 }}
            onClick={e => handleChangeFolder(item.id, e)}
          >
            <a href="#">{item.name}</a>
            <ul className="dropdown">
              {item.subfolders ? renderMenu(item.subfolders) : null}
            </ul>
          </li>
        );
      });
    };

    return (
      <ul role="navigation" class="nav">
        {renderMenu(folders)}
      </ul>
    );
  }
}

export default Folders;
