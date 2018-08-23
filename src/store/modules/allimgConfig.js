//用来请求国内项目数据
import { getCityNameList } from '../../api/allimgConfig'

const allimgConfig = {
    state: {
        CityNameList: []
    },
    mutations: {
        'SET_CITYNAME': (state, data) => {
            state.CityNameList = data.data
        }
    },
    actions: {
        async getCityNameList({ commit }) {
           const res = await getCityNameList()
           commit('SET_CITYNAME', res.data)
        }
    }
}

export default allimgConfig