import React from "react";
import ListImages from "./components/listImages";
import Folders from "./components/Folders";
import { connect } from "react-redux";
import "./App.css";
import { changeTag, changeFolder } from "./action/action";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images, folders, curTag, folderId } = this.props.data;
    const { changeTag, changeFolder } = this.props;

    return (
      <div className="row">
        <div className="column">
          <h1>Папки</h1>
          <Folders
            folders={folders}
            handleChangeFolder={changeFolder}
            curFolderId={folderId}
          />
        </div>
        <div className="column">
          <h1>Картинки</h1>
          <input type="text" onChange={changeTag} />
          <ListImages
            filter={curTag}
            images={images}
            id={this._getId(folders, folderId)}
          />
        </div>
      </div>
    );
  }
  _getId(array, id) {
    function func(array) {
      return array.reduce(function(r, a) {
        r.push({ id: a.id, name: a.name, subfolders: a.subfolders });
        if (a.subfolders && Array.isArray(a.subfolders)) {
          r = r.concat(func(a.subfolders));
        }
        return r;
      }, []);
    }
    return func(func(array).filter(folder => folder.id === id)).map(
      folder => folder.id
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state
});
const mapDispatchToProps = dispatch => {
  return {
    changeTag: event => dispatch(changeTag(event.target.value)),
    changeFolder: (id, event) => {
      event.stopPropagation();
      dispatch(changeFolder(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
