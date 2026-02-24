const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];
// Chức năng 1: Xem danh sách cầu thủ (Sử dụng map hoặc forEach)
// - In ra danh sách toàn bộ đội bóng.
// - Định dạng in: "Tên (Vị trí): ... bàn thắng".

const displayList = (listArray) =>{
    listArray.forEach((el,index) => {
        console.log(`${el[0]} (${el[2]}): ${el[2]} bàn thắng`);
        
    })
}

// Chức năng 2: Tìm kiếm cầu thủ (Sử dụng find)
// - Nhập tên cầu thủ cần tìm.
// - Dùng hàm find để tìm trong mảng.
// - Nếu thấy: In ra đầy đủ thông tin.
// - Nếu không thấy: In báo lỗi.
const searchPlayer= (listArray)=>{
    let findTrue=false;
    let searchName=prompt("Nhập tên bạn cần tìm");
    let result=listArray.find((el,index)=>{
        return el[0]===searchName 
    })
    if(result===undefined){
        console.log("Không tìm thấy cầu thủ");
        
    }else{
        console.log(result);
        
    }    
}


// Menu
let choice;
do{
 choice=+prompt(`
--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát`);

    switch (choice) {
        case 1:
            displayList(squad)
            break;
        case 2:
            searchPlayer(squad)
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 0:
            
            break;
    
        default:
            break;
    }

}while(choice!==0)

// Chức năng 1: Xem danh sách cầu thủ (Sử dụng map hoặc forEach)
// - In ra danh sách toàn bộ đội bóng.

// - Định dạng in: "Tên (Vị trí): ... bàn thắng".

