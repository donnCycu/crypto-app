import ApiService from "@/services/api-service";


export const api = {
    namespaced: true,
    state: {data: null, error: null, metadata: []},
    actions: {
        getData({commit}) {
            return ApiService.getData().then(data => {
                commit('apiFetchSuccess', data);
                return Promise.resolve(data);
            }, error => {
                commit('apiFetchFailure', error);
                return Promise.reject(error);
            });
        },
        getMetadata({commit}, id) {
            return ApiService.getMetadata(id).then(data => {
                commit('metadataFetchSuccess', data);
                return Promise.resolve(data);
            }, error => {
                commit('metadataFetchFailure', error);
                return Promise.reject(error);
            });
        }
    },
    mutations: {
        apiFetchSuccess(state, data) {
            state.data = data;
        },
        apiFetchFailure(state, error) {
            state.data = null;
            state.error = error;
        },
        metadataFetchSuccess(state, id, data) {
            state.metadata[id] = data;
        },
        metadataFetchFailure(state, id, error) {
            state.metadata[id] = error;
        }
    }
}
