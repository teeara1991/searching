import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import faker from "faker";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { storeGeneraror } from "./action/action";

const store = configureStore();
store.dispatch(storeGeneraror(generateFake()));

function generateFake() {
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
    folders.push({ id: id, name: faker.system.fileType(), subfolders: [] });
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
  return { images, folders };
}

ReactDOM.render(
  <Provider store={store}>
    <App data={generateFake()} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
