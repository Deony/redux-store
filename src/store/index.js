import { createStore } from "redux";

import reducer from "../reducers";


const bookStore = createStore(reducer);

export default bookStore;