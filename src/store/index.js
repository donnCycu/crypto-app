import {createStore} from "vuex";
import {api} from "./store.js";

const store = createStore({
    modules: {
        api,
    },
});
export default store;
