import React from "react";
import ListImages from "./components/listImages";
import Folders from "./components/Folders";
import "./App.css";
import faker from "faker";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      images: [],
      filtering: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ filtering: event.target.value });
  }
  componentWillMount() {
    let images = [];
    for (let i = 0; i < 12; i++) {
      let url = faker.image.avatar();
      let tags = faker.random.words().split(" ");
      let folderId = Math.floor(Math.random() * Math.floor(12));
      images.push({ url, folderId, tags });
    }
    let folders = [];
    let id = 1;
    for (let i = 0; i < 4; i++) {
      folders.push({ id: i, name: faker.system.fileType(), subfolders: [] });
      for (let j = 0; j < 2; j++) {
        id = id + 1;
        folders[i].subfolders.push({
          id: parseInt(id),
          name: faker.system.fileType(),
          subfolders: []
        });
      }
      id = id + 1;
    }
    this.setState({ images, folders });
  }

  render() {
    return (
      <div className="row">
        <div className="column">
          <h1>Папки</h1>
          <Folders folders={this.state.folders} />
        </div>
        <div className="column">
          <h1>Картинки</h1>
          <input type="text" onChange={this.handleChange} />
          <ListImages
            filter={this.state.filtering}
            images={this.state.images}
          />
        </div>
      </div>
    );
  }
}

export default App;
