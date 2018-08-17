const flags = {
    state: {
        flagVal: false
    },
    mutations: {
        'SET_FLAG': (state, flag) => {
            state.flagVal = flag
        }
    },
    actions: {
        setFlag({ commit }, falg) {
           commit('SET_FLAG', falg)
        }
    }
}

export default flags