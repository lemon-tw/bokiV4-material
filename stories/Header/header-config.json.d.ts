declare const _default: {
    "headerConfig": {
        "languages": [
            {
                "code": "zh-TW",
                "label": "繁體中文"
            },
            {
                "code": "en",
                "label": "English"
            },
            {
                "code": "ja",
                "label": "日本語"
            },
            {
                "code": "ko",
                "label": "한국어"
            }
        ],
        "currencies": [
            {
                "code": "TWD",
                "label": "台幣",
                "symbol": "NT$",
                "isDefault": true,
                "exchangeRate": 1.0
            },
            {
                "code": "USD",
                "label": "美元",
                "symbol": "$",
                "isDefault": false,
                "exchangeRate": 31.5
            },
            {
                "code": "JPY",
                "label": "日圓",
                "symbol": "¥",
                "isDefault": false,
                "exchangeRate": 0.21
            },
            {
                "code": "EUR",
                "label": "歐元",
                "symbol": "€",
                "isDefault": false,
                "exchangeRate": 34.2
            }
        ],
        "hotel": [
            {
                "code": "taipei",
                "hotel": "台北館",
                "fullName": "Lemon Hotel 台北館",
                "address": "台北市信義區信義路五段7號",
                "phone": "+886-2-2345-6789",
                "image": "/images/hotels/taipei.jpg",
                "isActive": true,
                "openingDate": "2020-01-15",
                "features": [
                    "商務中心",
                    "健身房",
                    "免費WiFi",
                    "停車場"
                ]
            },
            {
                "code": "taichung",
                "hotel": "台中館",
                "fullName": "Lemon Hotel 台中館",
                "address": "台中市西屯區台灣大道三段99號",
                "phone": "+886-4-2345-6789",
                "image": "/images/hotels/taichung.jpg",
                "isActive": true,
                "openingDate": "2021-03-20",
                "features": [
                    "溫泉SPA",
                    "會議廳",
                    "免費WiFi",
                    "接駁服務"
                ]
            },
            {
                "code": "kaohsiung",
                "hotel": "高雄館",
                "fullName": "Lemon Hotel 高雄館",
                "address": "高雄市前金區中正四路211號",
                "phone": "+886-7-2345-6789",
                "image": "/images/hotels/kaohsiung.jpg",
                "isActive": true,
                "openingDate": "2021-08-10",
                "features": [
                    "海景房",
                    "游泳池",
                    "免費WiFi",
                    "自助早餐"
                ]
            },
            {
                "code": "hualien",
                "hotel": "花蓮館",
                "fullName": "Lemon Hotel 花蓮館",
                "address": "花蓮縣花蓮市中山路123號",
                "phone": "+886-3-2345-6789",
                "image": "/images/hotels/hualien.jpg",
                "isActive": true,
                "openingDate": "2022-05-01",
                "features": [
                    "山景房",
                    "溫泉",
                    "免費WiFi",
                    "自行車租借"
                ]
            }
        ],
        "announcements": {
            "group": [
                {
                    "id": "global-001",
                    "title": "🎉 集團新年特惠活動",
                    "article": "即日起至2月底，全館別住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",
                    "visible": true,
                    "priority": 1,
                    "startDate": "2025-01-01",
                    "endDate": "2025-02-28",
                    "targetHotels": [
                        "taipei",
                        "taichung",
                        "kaohsiung",
                        "hualien"
                    ],
                    "type": "promotion"
                },
                {
                    "id": "global-002",
                    "title": "🌟 集團會員升級優惠",
                    "article": "升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",
                    "visible": true,
                    "priority": 2,
                    "startDate": "2025-01-15",
                    "endDate": "2025-12-31",
                    "targetHotels": [
                        "taipei",
                        "taichung",
                        "kaohsiung",
                        "hualien"
                    ],
                    "type": "membership"
                }
            ],
            "taipei": [
                {
                    "id": "taipei-001",
                    "title": "🎉 台北館新年特惠活動",
                    "article": "台北館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",
                    "visible": true,
                    "priority": 1,
                    "startDate": "2025-01-01",
                    "endDate": "2025-02-28",
                    "type": "promotion"
                },
                {
                    "id": "taipei-002",
                    "title": "🌟 台北館會員升級優惠",
                    "article": "台北館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",
                    "visible": true,
                    "priority": 2,
                    "startDate": "2025-01-15",
                    "endDate": "2025-12-31",
                    "type": "membership"
                },
                {
                    "id": "taipei-003",
                    "title": "🚗 台北館免費停車服務",
                    "article": "台北館入住期間提供免費停車位，讓您的台北旅程更加便利無憂，市中心住宿首選。",
                    "visible": true,
                    "priority": 3,
                    "startDate": "2025-01-01",
                    "endDate": "2025-12-31",
                    "type": "service"
                }
            ],
            "taichung": [
                {
                    "id": "taichung-001",
                    "title": "🎉 台中館新年特惠活動",
                    "article": "台中館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",
                    "visible": true,
                    "priority": 1,
                    "startDate": "2025-01-01",
                    "endDate": "2025-02-28",
                    "type": "promotion"
                },
                {
                    "id": "taichung-002",
                    "title": "🌟 台中館會員升級優惠",
                    "article": "台中館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",
                    "visible": true,
                    "priority": 2,
                    "startDate": "2025-01-15",
                    "endDate": "2025-12-31",
                    "type": "membership"
                },
                {
                    "id": "taichung-003",
                    "title": "♨️ 台中館溫泉SPA開放",
                    "article": "台中館全新溫泉SPA設施正式開放，享受舒壓療癒時光，預約制服務，為您的住宿體驗加分。",
                    "visible": true,
                    "priority": 3,
                    "startDate": "2025-01-10",
                    "endDate": "2025-12-31",
                    "type": "facility"
                }
            ],
            "kaohsiung": [
                {
                    "id": "kaohsiung-001",
                    "title": "🎉 高雄館新年特惠活動",
                    "article": "高雄館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",
                    "visible": true,
                    "priority": 1,
                    "startDate": "2025-01-01",
                    "endDate": "2025-02-28",
                    "type": "promotion"
                },
                {
                    "id": "kaohsiung-002",
                    "title": "🌟 高雄館會員升級優惠",
                    "article": "高雄館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",
                    "visible": true,
                    "priority": 2,
                    "startDate": "2025-01-15",
                    "endDate": "2025-12-31",
                    "type": "membership"
                },
                {
                    "id": "kaohsiung-003",
                    "title": "🌊 高雄館海景房優惠",
                    "article": "高雄館海景房特別優惠，欣賞港都美景，感受海風徐徐，讓您的住宿體驗更加難忘。",
                    "visible": true,
                    "priority": 3,
                    "startDate": "2025-01-01",
                    "endDate": "2025-06-30",
                    "type": "room"
                }
            ],
            "hualien": [
                {
                    "id": "hualien-001",
                    "title": "🎉 花蓮館新年特惠活動",
                    "article": "花蓮館即日起至2月底，住宿享 8 折優惠！立即預訂享受超值價格，數量有限，先訂先得。",
                    "visible": true,
                    "priority": 1,
                    "startDate": "2025-01-01",
                    "endDate": "2025-02-28",
                    "type": "promotion"
                },
                {
                    "id": "hualien-002",
                    "title": "🌟 花蓮館會員升級優惠",
                    "article": "花蓮館升級VIP會員即享專屬禮遇，包含免費早餐、延遲退房、積點回饋等多項優惠服務。",
                    "visible": true,
                    "priority": 2,
                    "startDate": "2025-01-15",
                    "endDate": "2025-12-31",
                    "type": "membership"
                },
                {
                    "id": "hualien-003",
                    "title": "🏔️ 花蓮館山景溫泉體驗",
                    "article": "花蓮館獨特山景溫泉，在大自然懷抱中享受溫泉療癒，配合自行車租借服務，體驗花蓮之美。",
                    "visible": true,
                    "priority": 3,
                    "startDate": "2025-01-01",
                    "endDate": "2025-12-31",
                    "type": "experience"
                }
            ]
        },
        "hotelHosts": [
            {
                "code": "taipei",
                "hotel": "台北館"
            },
            {
                "code": "taichung",
                "hotel": "台中館"
            },
            {
                "code": "kaohsiung",
                "hotel": "高雄館"
            },
            {
                "code": "hualien",
                "hotel": "花蓮館"
            }
        ]
    }
};

export default _default;
