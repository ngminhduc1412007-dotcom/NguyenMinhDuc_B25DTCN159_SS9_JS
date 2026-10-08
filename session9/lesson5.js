const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  services: [
    { name: "Nước ngọt Coca-Cola", quantity: 2, price: 30000 },
    { name: "Bia Heineken", quantity: 3, price: 45000 },
    { name: "Snack khoai tây", quantity: 0, price: 25000 },
    { name: "Đồ uống lạ ngoài danh mục", quantity: -1, price: 50000 }
  ]
};

console.log(`=== BẢNG KÊ CHI TIẾT THANH TOÁN: ${bookingReservation.bookingId} ===`);
console.log(`Khách hàng: ${bookingReservation.guestName} | Loại phòng: ${bookingReservation.roomType}`);
console.log("------------------------------------------------------------------");
console.log("STT | Tên dịch vụ / Vật tư Minibar       | Số lượng | Đơn giá     | Thành tiền");

let minibarTotal = 0;
let validItemCount = 0;

const processedServices = [];

for (let i = 0; i < bookingReservation.services.length; i++) {
  let item = bookingReservation.services[i];
  if (item.quantity <= 0) {
    continue;
  }

  validItemCount++;
  let itemTotal = item.quantity * item.price;
  minibarTotal += itemTotal;

  processedServices.push(item);
  console.log(`${validItemCount.toString().padEnd(3)} | ${item.name.padEnd(32)} | ${item.quantity.toString().padEnd(8)} | ${item.price.toLocaleString('vi-VN').padEnd(11)} | ${itemTotal.toLocaleString('vi-VN')}`);
}

if (validItemCount === 0) {
  console.log("(Khách không sử dụng dịch vụ minibar nào phát sinh)");
}
console.log("------------------------------------------------------------------");

const roomPrice = bookingReservation.roomPrice;
const subtotal = roomPrice + minibarTotal;
const vatTax = subtotal * 0.1;
const grandTotal = subtotal + vatTax;

console.log(`Tiền phòng cơ bản:       ${roomPrice.toLocaleString('vi-VN')} VNĐ`);
console.log(`Tổng tiền Minibar:       ${minibarTotal.toLocaleString('vi-VN')} VNĐ`);
console.log(`Tiền tạm tính (Subtotal): ${subtotal.toLocaleString('vi-VN')} VNĐ`);
console.log(`Thuế VAT (10%):           ${vatTax.toLocaleString('vi-VN')} VNĐ`);
console.log("==================================================================");
console.log(`TỔNG TIỀN THANH TOÁN:   ${grandTotal.toLocaleString('vi-VN')} VNĐ`);