import { getIndexDatas } from '../../api/indexConfig'

const indexConfig = {
    state: {
        indexData: []
    },
    mutations: {
        'SET_INDEXDATA': (state, data) => {
            state.indexData = data.data
        }
    },
    actions: {
        async getIndexData({ commit }) {
           const res = await getIndexDatas()
           commit('SET_INDEXDATA', res.data)
        }
    }
}

export default indexConfig