const content = "محتوى QR هنا (رابط أو نص)";
const qrCodeContainer = document.getElementById('qrcode');
QRCode.toCanvas(qrCodeContainer, content, { width: 200 }, function (error) {
    if (error) console.error(error);
    console.log("QR Code generated!");
});
