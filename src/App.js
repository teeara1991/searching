import React from "react";
import ListImages from "./components/listImages";
import Folders from "./components/Folders";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtering: "",
      curFolderId: 0
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
          />
        </div>
        <div className="column">
          <h1>Картинки</h1>
          <input type="text" onChange={this.handleChangeFilter} />
          <ListImages
            filter={filtering}
            images={images}
            id={this._folders(this.state.curFolderId)}
          />
        </div>
      </div>
    );
  }
  _id(folder, id) {
    function fun(folder) {
      if (folder.subfolders) {
        folder.map(sub => {
          return fun(folder.subfolders);
        });
      }
      return folder.id;
    }
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
    console.log(this.props.data.folders.map(folder => fun(folder, id)));
  }
}

export default App;
