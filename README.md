# Graduation Invitation

Ứng dụng Next.js độc lập cho thiệp mời lễ tốt nghiệp.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Tùy chỉnh nội dung

Sửa object `invitation` trong `app/page.tsx`. Ảnh bìa và album nằm tại
`public/templates/graduation/1`.

## Deploy

Đặt thư mục này làm root directory trên Vercel, Netlify hoặc server Node.js.

```bash
npm run build
npm run start
```