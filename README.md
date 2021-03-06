# 餐廳清單(Restaurant List)

  - 此專案使用 Node.js + Express + MongoDB 
  - 打造一個可供使用者蒐集個人喜愛餐廳的餐廳清單
  - 並提供瀏覽、新增、編輯、搜尋、刪除功能。

## 環境建置與需求 (prerequisites)
```
Node.js 10.15.0
```
## 安裝與執行步驟 (installation and execution)

**1. 將本專案存放至本機(下列方法2擇1)**
  - 打開終端機輸入 git clone https://github.com/emilycodeee/restaurant-list-CRUD.git
  - 點選 Download ZIP 下載

**2. 進入專案資料夾(restaurant_list)使用終端機安裝相關套件**

```
npm install
```
**3. 載入seed data**
```
npm run seed
```
**4. 使用nodemon，啟動專案伺服器**
```
npm run dev
```
**5. 終端機出現下列字串代表伺服器成功啟動**

Express is listening on http://localhost:3000

**6. 透過瀏覽器瀏覽專案**

打開瀏覽器在網址列輸入 localhost:3000 即可瀏覽

## 功能描述 (features)
  - 瀏覽餐廳列表(可視評分星級、餐廳分類)
  - 於列表中點擊任一餐廳可進入詳細頁面查看簡介、電話、店址等
  - 使用關鍵字搜尋欄位快速搜尋餐廳名稱或餐廳分類
  - 可新增餐廳資料
  - 可編輯已建好的餐廳資料
  - 可任意刪除餐廳資料
  - 可選擇資料依偏好排序顯示

