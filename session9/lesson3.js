// 1. Khởi tạo mảng quản lý phòng khách sạn (Tối thiểu 3 phòng)
let roomsList = [
  { roomId: "P101", roomType: "Standard", pricePerNight: 800000, status: "VACANT" },
  { roomId: "P102", roomType: "Deluxe", pricePerNight: 1500000, status: "OCCUPIED" },
  { roomId: "P103", roomType: "Superior", pricePerNight: 1200000, status: "MAINTENANCE" }
];

console.log("=== DANH SÁCH PHÒNG BAN ĐẦU ===");
console.table(roomsList);

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
};
roomsList.push(newRoom);
console.log("=== SAU KHI THÊM PHÒNG P104 ===");
console.table(roomsList);

const targetRoomId = "P101";
for (let i = 0; i < roomsList.length; i++) {
  if (roomsList[i].roomId === targetRoomId) {
    roomsList[i].status = "OCCUPIED";
    break;
  }
}
console.log("=== SAU KHI CẬP NHẬT TRẠNG THÁI P101 THÀNH OCCUPIED ===");
console.table(roomsList);

const deleteRoomId = "P103";
let deleteIndex = -1;
for (let i = 0; i < roomsList.length; i++) {
  if (roomsList[i].roomId === deleteRoomId) {
    deleteIndex = i;
    break;
  }
}

if (deleteIndex !== -1) {
  roomsList.splice(deleteIndex, 1);
}

console.log("=== SAU KHI XÓA PHÒNG P103 ===");
console.table(roomsList);