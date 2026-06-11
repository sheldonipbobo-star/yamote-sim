export interface Station {
  id: number
  nameJa: string
  nameEn: string
  position: { x: number; y: number; z: number }
  stopDuration: number // seconds
}

// 山手線29個車站（順時針方向）
export const YAMANOTE_STATIONS: Station[] = [
  { id: 1, nameJa: '東京', nameEn: 'Tokyo', position: { x: 0, y: 0, z: 0 }, stopDuration: 45 },
  { id: 2, nameJa: '有楽町', nameEn: 'Yurakucho', position: { x: 50, y: 0, z: 0 }, stopDuration: 35 },
  { id: 3, nameJa: '新橋', nameEn: 'Shinbashi', position: { x: 100, y: 0, z: 0 }, stopDuration: 40 },
  { id: 4, nameJa: '浜松町', nameEn: 'Hamamatsucho', position: { x: 150, y: 0, z: 0 }, stopDuration: 35 },
  { id: 5, nameJa: '田町', nameEn: 'Tamachi', position: { x: 200, y: 0, z: 0 }, stopDuration: 35 },
  { id: 6, nameJa: '三田', nameEn: 'Mita', position: { x: 250, y: 0, z: 0 }, stopDuration: 35 },
  { id: 7, nameJa: '麻布十番', nameEn: 'Azabujuban', position: { x: 300, y: 0, z: 0 }, stopDuration: 35 },
  { id: 8, nameJa: '赤坂見附', nameEn: 'Akasaka-Mitsuke', position: { x: 350, y: 0, z: 0 }, stopDuration: 35 },
  { id: 9, nameJa: '永田町', nameEn: 'Nagatacho', position: { x: 400, y: 0, z: 0 }, stopDuration: 35 },
  { id: 10, nameJa: '溜池山王', nameEn: 'Tameike-Sanno', position: { x: 450, y: 0, z: 0 }, stopDuration: 35 },
  { id: 11, nameJa: '銀座線赤坂見附', nameEn: 'Akasaka-Mitsuke G', position: { x: 500, y: 0, z: 0 }, stopDuration: 35 },
  { id: 12, nameJa: '表参道', nameEn: 'Omotesando', position: { x: 550, y: 0, z: 0 }, stopDuration: 35 },
  { id: 13, nameJa: '明治神宮前', nameEn: 'Meiji-Jingu-Mae', position: { x: 600, y: 0, z: 0 }, stopDuration: 40 },
  { id: 14, nameJa: '代々木', nameEn: 'Yoyogi', position: { x: 650, y: 0, z: 0 }, stopDuration: 35 },
  { id: 15, nameJa: '新宿', nameEn: 'Shinjuku', position: { x: 700, y: 0, z: 0 }, stopDuration: 60 },
  { id: 16, nameJa: '新大久保', nameEn: 'Shin-Okubo', position: { x: 750, y: 0, z: 0 }, stopDuration: 35 },
  { id: 17, nameJa: '高田馬場', nameEn: 'Takadanobaba', position: { x: 800, y: 0, z: 0 }, stopDuration: 35 },
  { id: 18, nameJa: '目白', nameEn: 'Mejiro', position: { x: 850, y: 0, z: 0 }, stopDuration: 35 },
  { id: 19, nameJa: '池袋', nameEn: 'Ikebukuro', position: { x: 900, y: 0, z: 0 }, stopDuration: 50 },
  { id: 20, nameJa: '大塚', nameEn: 'Otsuka', position: { x: 950, y: 0, z: 0 }, stopDuration: 35 },
  { id: 21, nameJa: '巣鴨', nameEn: 'Sugamo', position: { x: 1000, y: 0, z: 0 }, stopDuration: 35 },
  { id: 22, nameJa: '駒込', nameEn: 'Komagome', position: { x: 1050, y: 0, z: 0 }, stopDuration: 35 },
  { id: 23, nameJa: '田端', nameEn: 'Tabata', position: { x: 1100, y: 0, z: 0 }, stopDuration: 35 },
  { id: 24, nameJa: '西日暮里', nameEn: 'Nishi-Nippori', position: { x: 1150, y: 0, z: 0 }, stopDuration: 35 },
  { id: 25, nameJa: '日暮里', nameEn: 'Nippori', position: { x: 1200, y: 0, z: 0 }, stopDuration: 40 },
  { id: 26, nameJa: '鶯谷', nameEn: 'Uguisudani', position: { x: 1250, y: 0, z: 0 }, stopDuration: 35 },
  { id: 27, nameJa: '上野', nameEn: 'Ueno', position: { x: 1300, y: 0, z: 0 }, stopDuration: 50 },
  { id: 28, nameJa: '御徒町', nameEn: 'Okachimachi', position: { x: 1350, y: 0, z: 0 }, stopDuration: 35 },
  { id: 29, nameJa: '秋葉原', nameEn: 'Akihabara', position: { x: 1400, y: 0, z: 0 }, stopDuration: 40 },
]
