// Xóa header nhận dạng - by Kthy
const headers = $request.headers;
delete headers["X-RevenueCat-ETag"];
$done({ headers });
