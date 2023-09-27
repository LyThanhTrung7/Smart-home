
const firebaseConfig = {
    apiKey: "AIzaSyB7ZVR1p0LTo02oPr6HaDASWhoRWEcTppw",
    authDomain: "dht11-7d1ee.firebaseapp.com",
    databaseURL: "https://dht11-7d1ee-default-rtdb.firebaseio.com",
    projectId: "dht11-7d1ee",
    storageBucket: "dht11-7d1ee.appspot.com",
    messagingSenderId: "548718572876",
    appId: "1:548718572876:web:c73ece3dc5483900b5cbe9",
    measurementId: "G-Z7MM7KEHCW"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
var database = firebase.database();


database.ref("Nhiệt Độ 1").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("nhietdo1").innerHTML = temp;
});

database.ref("Độ Ẩm 1").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("doam1").innerHTML = temp;
});

database.ref("Cảm Biến Chuyển Động1").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("cambienchuyendong1").innerHTML = temp;
});


database.ref("Nhiệt Độ 2").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("nhietdo2").innerHTML = temp;
});

database.ref("Độ Ẩm 2").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("doam2").innerHTML = temp;
});
database.ref("Cảm Biến Chuyển Động2").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("cambienchuyendong2").innerHTML = temp;
});


database.ref("Nhiệt Độ 3").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("nhietdo3").innerHTML = temp;
});

database.ref("Độ Ẩm 3").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("doam3").innerHTML = temp;
});
database.ref("Cảm Biến Chuyển Động3").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("cambienchuyendong3").innerHTML = temp;
});

var display=1;

function hideshow(roomId) {
    var roomDiv = document.getElementById(roomId);
    if (roomDiv.style.display === 'flex') {
      roomDiv.style.display = 'none';
    } else {
      roomDiv.style.display = 'flex';
    }
  }

var btnOn1 = document.getElementById("btnOnId_01");
var btnOff1 = document.getElementById("btnOffId_01");
var btnOn2 = document.getElementById("btnOnId_02");
var btnOff2 = document.getElementById("btnOffId_02");
var btnOn3 = document.getElementById("btnOnId_03");
var btnOff3 = document.getElementById("btnOffId_03");
var btnOn4 = document.getElementById("btnOnId_04");
var btnOff4 = document.getElementById("btnOffId_04");
var btnOn5 = document.getElementById("btnOnId_05");
var btnOff5 = document.getElementById("btnOffId_05");
var btnOn6 = document.getElementById("btnOnId_06");
var btnOff6 = document.getElementById("btnOffId_06");
var btnOn7 = document.getElementById("btnOnId_07");
var btnOff7 = document.getElementById("btnOffId_07");
var btnOn8 = document.getElementById("btnOnId_08");
var btnOff8 = document.getElementById("btnOffId_08");
var btnOn9 = document.getElementById("btnOnId_09");
var btnOff9 = document.getElementById("btnOffId_09");
//////////////////////////////////////////////////////////////////
btnOn1.onclick = function(){
    document.getElementById("airId_01").src = "821-airconditioner.gif"

    database.ref("/Máy Lạnh 1").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff1.onclick = function(){
    document.getElementById("airId_01").src = "maylanh12.png"

    database.ref("/Máy Lạnh 1").update({
        "Trạng Thái" :"Tắt"
    });
}

btnOn4.onclick = function(){
    document.getElementById("airId_02").src = "821-airconditioner.gif"

    database.ref("/Máy Lạnh 2").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff4.onclick = function(){
    document.getElementById("airId_02").src = "maylanh12.png"

    database.ref("/Máy Lạnh 2").update({
        "Trạng Thái" :"Tắt"
    });
}

btnOn7.onclick = function(){
    document.getElementById("airId_03").src = "821-airconditioner.gif"

    database.ref("/Máy Lạnh 3").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff7.onclick = function(){
    document.getElementById("airId_03").src = "maylanh12.png"

    database.ref("/Máy Lạnh 3").update({
        "Trạng Thái" :"Tắt"
    });
}
////////////////////////////////////////////////////////////////////
btnOn2.onclick = function(){
    document.getElementById("denId_01").src = "lamp_animation.gif"

    database.ref("/LED 1").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff2.onclick = function(){
    document.getElementById("denId_01").src = "den2.jpg"

    database.ref("/LED 1").update({
        "Trạng Thái" :"Tắt"
    });
}
btnOn5.onclick = function(){
    document.getElementById("denId_02").src = "lamp_animation.gif"

    database.ref("/LED 2").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff5.onclick = function(){
    document.getElementById("denId_02").src = "den2.jpg"

    database.ref("/LED 2").update({
        "Trạng Thái" :"Tắt"
    });
}
btnOn8.onclick = function(){
    document.getElementById("denId_03").src = "lamp_animation.gif"

    database.ref("/LED 3").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff8.onclick = function(){
    document.getElementById("denId_03").src = "den2.jpg"

    database.ref("/LED 3").update({
        "Trạng Thái" :"Tắt"
    });
}
///////////////////////////////////////////////////////////////////
btnOn3.onclick = function(){
    document.getElementById("fanId_01").src = "fan-gif-26-green-fan-white-background.gif"

    database.ref("/Quạt 1").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff3.onclick = function(){
    document.getElementById("fanId_01").src = "fan1.jpg"

    database.ref("/Quạt 1").update({
        "Trạng Thái" :"Tắt"
    });
}

btnOn6.onclick = function(){
    document.getElementById("fanId_02").src = "fan-gif-26-green-fan-white-background.gif"

    database.ref("/Quạt 2").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff6.onclick = function(){
    document.getElementById("fanId_02").src = "fan1.jpg"

    database.ref("/Quạt 2").update({
        "Trạng Thái" :"Tắt"
    });
}

btnOn9.onclick = function(){
    document.getElementById("fanId_03").src = "fan-gif-26-green-fan-white-background.gif"

    database.ref("/Quạt 3").update({
        "Trạng Thái" : "Bật"
    });
}

btnOff9.onclick = function(){
    document.getElementById("fanId_03").src = "fan1.jpg"

    database.ref("/Quạt 3").update({
        "Trạng Thái" :"Tắt"
    });
}
