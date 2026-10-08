const bookingReservation = {
  bookingId: "BK-2024-8891",
  "room-type": "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9
};

// TH1: Truy cập qua biến động
const priceKey = "roomPrice";
// Dùng Bracket Notation để lấy giá trị thông qua biến động
const basePrice = bookingReservation[priceKey]; 
console.log("1. Truy cập qua biến động (roomPrice):", basePrice);

// TH2: Tên thuộc tính có ký tự đặc biệt / dấu gạch ngang (-)
// Nếu dùng dot notation sẽ gây lỗi cú pháp
const roomTypeVal = bookingReservation["room-type"];
console.log("2. Truy cập key có dấu gạch ngang ('room-type'):", roomTypeVal);

// TH3: Lặp qua các thuộc tính của đối tượng với vòng lặp for...in
console.log("3. Duyệt thuộc tính đối tượng qua vòng lặp for...in:");
for (const key in bookingReservation) {
  // Bắt buộc dùng [key] thay vì .key
  console.log(`- ${key}: ${bookingReservation[key]}`);
}