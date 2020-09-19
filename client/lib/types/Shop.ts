import {
  Type
} from '../enum/index'

export type Shop = {
  type: Type.SHOP,
  id: string,
  // 店舗名
  name?: string,
  // 店舗肩書き
  prefixName?: string,
  // 一言紹介
  description?: string,
  // 長文紹介
  intro?: string,
  // 住所
  address?: string,
  // 建物名
  buildingName?: string,
  // 郵便番号
  postal?: string|number,
  // 電話番号
  tel?: string|number,
  imageLink?: string,
  subImageLink?: string[],
  menuImageLink?: string[],
  facebookLink?: string,
  homepageLink?: string,
  instaLink?: string,
  lineLink?: string,
  twitterLink?: string,
  uberEatsLink?: string,
  youtubeLink?: string,
  // 優先度
  priority: number,
  // 価格帯
  priceRange?: string,
  // 公開設定
  public: boolean,
  // deprecated
  businessHour1?: string,
  // deprecated
  businessHour2?: string,
  businessStartHour1?: string|Date,
  businessEndHour1?: string|Date,
  businessLoHour1?: string|Date,
  businessStartHour2?: string|Date,
  businessEndHour2?: string|Date,
  businessLoHour2?: string|Date,
  parkingLot?: string,
  regularHoliday?: string,
  seat?: string,
  // テイクアウト可能かどうか
  canTakeout: boolean,
  instaShopLink?: string,
  instaNumber?: number,
  latitude?: number,
  longitude?: number,
  keywords: string[],
  dishes?: string[],
  timeZone?: string[],
  createdAt?: Date|Object,
  deletedAt?: Date|Object,
  updatedAt?: Date|Object
}
