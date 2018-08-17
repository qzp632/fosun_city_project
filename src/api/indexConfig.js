import request from '../utils/request'
import { MOCKAPI } from './config'

export function getIndexDatas() {
    return request(MOCKAPI.INDEX)
}