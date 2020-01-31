import React from "react";
import Image from "./components/Image";
import Folder from "./components/Folder";
import { connect } from "react-redux";
import "./App.css";
import { changeTag, changeFolder } from "./action/action";
import { getFilteredImages } from "./selectors";

class App extends React.Component {
  render() {
    const { images, folders } = this.props.data;
    const { changeTag, changeFolder } = this.props;

    return (
      <div className="row">
        <div className="column">
          <h1>Папки</h1>
          {folders.map((item, index) => (
            <Folder
              key={index}
              folder={item}
              handleChangeFolder={changeFolder}
            />
          ))}
        </div>
        <div className="column">
          <h1>Картинки</h1>
          <input type="text" onChange={changeTag} />
          {images.map((image, index) => (
            <Image key={index} image={image} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: { ...state, images: getFilteredImages(state) }
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
