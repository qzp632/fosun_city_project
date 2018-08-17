import request from '../utils/request'
import { MOCKAPI } from './config'

export function getCityNameList() {
    return request(MOCKAPI.CITYNAMELIST)
}