const pathobj = {
    state: {
        pathkey: 0
    },
    mutations: {
        'SET_PK': (state, key) => {
            state.pathkey = key
        }
    },
    actions: {
        setPathKey({ commit }, key) {
           commit('SET_PK', key)
        }
    }
}

export default pathobj