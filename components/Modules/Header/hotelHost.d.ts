import { default as HeaderData } from '../../../stories/Header/header-config.json';
/** 從 JSON 靜態推導所有館別 code；無須手動更新 */
export type HotelCode = (typeof HeaderData)['headerConfig']['hotelHosts'][number]['code'];
