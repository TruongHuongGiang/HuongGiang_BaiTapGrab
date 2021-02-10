//Kiểm tra người dùng chọn loại xe nào
var loaiXe = "";
function check(){
    if(document.getElementById("grabCar").checked == true){
        loaiXe = "Grab Car";
    }else if (document.getElementById("grabSUV").checked == true){
        loaiXe = "Grab SUV";
    }else if (document.getElementById("grabBlack").checked == true){
        loaiXe = "Grab Black";
    }
}

function tinhTien(){
    var soKM = document.getElementById("soKM").value;
    var thoiGianCho = document.getElementById("time").value;
    var tienKM = 0;
    var tongTien = 0;
    //kiểm tra số km và thời gian chờ
    if(soKM<0){
        document.getElementById("divThanhTien").style.display = "none";
        document.getElementById("warning").style.display = "block";
        document.getElementById("warning").innerHTML = "Nhập lại số KM"
        soKM = document.getElementById("soKM").focus();
    } else if (thoiGianCho<0){
        document.getElementById("divThanhTien").style.display = "none";
        document.getElementById("warning").style.display = "block";
        document.getElementById("warning").innerHTML = "Nhập lại thời gian chờ"
        soKM = document.getElementById("time").focus();
    }
    //Tính tiền grab
    if(soKM>0 && thoiGianCho>0){
        switch(loaiXe){
            case "Grab Car":
                if(soKM<=1){
                    tienKM = soKM*8000;
                }else if(soKM>1 && soKM<=19){
                    tienKM = 8000 + (soKM-1)*7500;
                }else{
                    tienKM = 8000 + 18*7500 + (soKM-19)*7000;
                }
                tongTien = tienKM + parseInt(thoiGianCho/3)*2000;
                break;
            case "Grab SUV":
                if(soKM<=1){
                    tienKM = soKM*9000;
                }else if(soKM>1 && soKM<=19){
                    tienKM = 9000 + (soKM-1)*8500;
                }else{
                    tienKM = 9000 + 18*8500 + (soKM-19)*8000;
                }
                tongTien = tienKM + parseInt(thoiGianCho/3)*3000;
                break;
            case "Grab Black":
                if(soKM<=1){
                    tienKM = soKM*10000;
                }else if(soKM>1 && soKM<=19){
                    tienKM = 10000 + (soKM-1)*9500;
                }else{
                    tienKM = 10000 + 18*9500 + (soKM-19)*9000;
                }
                tongTien = tienKM + parseInt(thoiGianCho/3)*3500;
                break;
        }
        document.getElementById("warning").style.display = "none";
        document.getElementById("divThanhTien").style.display = "block";
        document.getElementById("xuatTien").innerHTML = tongTien;
    }
    
}