import React from "react";
import ListImages from "./components/listImages";
import Folders from "./components/Folders";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtering: "",
      curFolderId: ""
    };
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeFolder = this.handleChangeFolder.bind(this);
  }
  handleChangeFilter(event) {
    this.setState({ filtering: event.target.value });
  }
  handleChangeFolder(id, e) {
    e.stopPropagation();
    this.setState({ curFolderId: id });
  }

  render() {
    const { images, folders } = this.props.data;
    const { curFolderId, filtering } = this.state;
    return (
      <div className="row">
        <div className="column">
          <h1>Папки</h1>
          <Folders
            folders={folders}
            handleChangeFolder={(id, e) => this.handleChangeFolder(id, e)}
            curFolderId={curFolderId}
          />
        </div>
        <div className="column">
          <h1>Картинки</h1>
          <input type="text" onChange={this.handleChangeFilter} />
          <ListImages
            filter={filtering}
            images={images}
            id={this._folders(curFolderId)}
          />
        </div>
      </div>
    );
  }
  _id(folder, id) {
    var ids = [];
    function fun(folder) {
      folder.map(item => {
        if (item.subfolders.length > 0) {
          return fun(item.subfolders);
        }
        ids.push(item.id);
        return item.id;
      });
    }
    fun(folder, id);
    return ids.concat(id);
  }
  _folders(id) {
    function fun(folders, id) {
      if (folders.id === id) {
        return folders;
      }
      if (folders.subfolders) {
        for (let item of folders.subfolders) {
          if (item.id === id) {
            return item;
          }
          return fun(item.subfolders, id);
        }
      }
    }

    return this._id(
      this.props.data.folders
        .map(folder => fun(folder, id))
        .filter(folder => folder),
      id
    );
  }
}

export default App;
