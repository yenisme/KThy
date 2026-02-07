// ========= Khổng Mạnh Yên 🤪 ========= //
const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
};
// =========   Locket Gold Fix Lỗi của Yên ❗️ ========= //  
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
    obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var YenlaLinDay = {
        auto_resume_date: null,
        display_name: "locket_1600_1y",
        is_sandbox: true,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: {
            "amount": 399000.0,
            "currency": "VND"
        },
        expires_date: "2090-03-15T01:03:15Z"
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: "2009-03-15T03:15:00Z",
        purchase_date: "2009-03-15T10:10:12Z",
        store: "app_store",
        store_transaction_id: "2000001108724193",
    },
    locketGold = {
        grace_period_expires_date: null,
        purchase_date: "2009-03-15T10:10:12Z",
        product_identifier: "locket_1600_1y",
        expires_date: "2090-03-15T01:03:15Z"
    };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
    let [e, s] = mapping[match];
    s ? (locketGold.product_identifier = s, obj.subscriber.subscriptions[s] = YenlaLinDay) : obj.subscriber.subscriptions["locket_1600_1y"] = YenlaLinDay,
        obj.subscriber.entitlements[e] = locketGold
} else obj.subscriber.subscriptions["locket_1600_1y"] = YenlaLinDay, obj.subscriber.entitlements.pro = locketGold;
$done({
    body: JSON.stringify(obj)
});
/******************************
Tính năng chính của JavaScript: Mở Khoá tính năng Gold của Locket Widget💛
Link bio tải xuống: https://beacons.ai/o.oyen
Phiên bản JavaScript: Fix lỗi nhẹ của Locket 💛
Admin: Manh Yen (Kthy) 💞
Cập nhật: ngày 8 tháng 2 năm 2026
Vui lòng liên hệ: Facebook:Khong Manh Yen🫟
Telegram: https://t.me/yennosimp
Lưu ý khi sử dụng: ⚠️Đoạn mã này chỉ dành cho mục đích mở khoá vip cho ứng dụng. Vui lòng không sao chép hoặc bán lại! ❗️
*******************************/