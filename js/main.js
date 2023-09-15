let nameDebit = document.getElementById("name-debit");
let emailDebit = document.getElementById("email-debit");
let numberDebit = document.getElementById("number-debit");
let idDebit = document.getElementById("id-debit");
let dateDebit = document.getElementById("date-debit");
let category = document.getElementById("category-debit");
let incomeDebit = document.getElementById("income-debit");
let debitForm = document.getElementById("debitForm");
let inputs = document.querySelectorAll("input");
let deledeteDebit = document.getElementById("deledeteDebit");
let debitArr = [];
//------------------
let nametitanium = document.getElementById("name-titanium");
let emailtitanium = document.getElementById("email-titanium");
let numbertitanium = document.getElementById("number-titanium");
let idtitanium = document.getElementById("id-titanium");
let datetitanium = document.getElementById("date-titanium");
let categorytitanium = document.getElementById("category-titanium");
let incometitanium = document.getElementById("income-titanium");
let saveButtontitanium = document.getElementById("save-titaniumdata");
let titaniumArr = [];
//-----------------
//-----------------
let nameClassic = document.getElementById("name-classic");
let emailClassic = document.getElementById("email-classic");
let numberClassic = document.getElementById("number-classic");
let idClassic = document.getElementById("id-classic");
let dateClassic = document.getElementById("date-classic");
let categoryClassic = document.getElementById("category-classic");
let incomeClassic = document.getElementById("income-classic");
let classicArr = [];
//-----------------
let namePlatinum = document.getElementById("name-platinum");
let emailPlatinum = document.getElementById("email-platinum");
let numberPlatinum = document.getElementById("number-platinum");
let idPlatinum = document.getElementById("id-platinum");
let datePlatinum = document.getElementById("date-platinum");
let categoryPlatinum = document.getElementById("category-platinum");
let incomePlatinum = document.getElementById("income-platinum");
let platinumArr = [];
//----------------
//Debit Card--------------------------
if (JSON.parse(localStorage.getItem("DebitCards")) != null) {
  debitArr = JSON.parse(localStorage.getItem("DebitCards"));
  dispalyDebitCardData();
}

function saveDebitData() {
  var debitCardData = {
    name: nameDebit.value,
    email: emailDebit.value,
    number: numberDebit.value,
    ID: idDebit.value,
    date: dateDebit.value,
    category: category.value,
    inCome: incomeDebit.value,
  };
  debitArr.push(debitCardData);

  localStorage.setItem("DebitCards", JSON.stringify(debitArr));
  dispalyDebitCardData();
  location.reload();
}
nameDebit.onkeyup = function () {
  var debitRex =
    /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
  if (!debitRex.test(nameDebit.value)) {
    nameDebit.classList.add("is-invalid");
    nameDebit.classList.remove("is-valid");
  } else {
    nameDebit.classList.add("is-valid");
    nameDebit.classList.remove("is-invalid");
  }
};
emailDebit.onkeyup = function () {
  var debitEmailRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!debitEmailRex.test(emailDebit.value)) {
    emailDebit.classList.add("is-invalid");
    emailDebit.classList.remove("is-valid");
  } else {
    emailDebit.classList.add("is-valid");
    emailDebit.classList.remove("is-invalid");
  }
};
numberDebit.onkeyup = function () {
  var debitNumberRex = /^01[0125][0-9]{8}$/;

  if (!debitNumberRex.test(numberDebit.value)) {
    numberDebit.classList.add("is-invalid");
    numberDebit.classList.remove("is-valid");
  } else {
    numberDebit.classList.add("is-valid");
    numberDebit.classList.remove("is-invalid");
  }
};
idDebit.onkeyup = function () {
  var debitIdrRex =
    /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;

  if (!debitIdrRex.test(idDebit.value)) {
    idDebit.classList.add("is-invalid");
    idDebit.classList.remove("is-valid");
  } else {
    idDebit.classList.add("is-valid");
    idDebit.classList.remove("is-invalid");
  }
};
incomeDebit.onkeyup = function () {
  var debitIncomerRex = /^[0-9]{4,9}$/;

  if (!debitIncomerRex.test(incomeDebit.value)) {
    incomeDebit.classList.add("is-invalid");
    incomeDebit.classList.remove("is-valid");
  } else {
    incomeDebit.classList.add("is-valid");
    incomeDebit.classList.remove("is-invalid");
  }
};
function dispalyDebitCardData() {
  var data = "";
  for (var i = 0; i < debitArr.length; i++) {
    data += `<tr>
        <td>${debitArr[i].name}</td>
        <td>${debitArr[i].email}</td>
        <td>${debitArr[i].number}</td>
        <td>${debitArr[i].ID}</td>
        <td>${debitArr[i].date}</td>
        <td>${debitArr[i].category}</td>
        <td>${debitArr[i].inCome} EG</td>
        <td><button class="deletebt" onclick="deleteDebit(${i})" >Delete</button></td>
        <tr>
        `;
  }
  document.getElementById("table").innerHTML = data;
}

(function () {
  $(".form1 > .input1").keyup(function () {
    var empty = false;
    $(".form1 > .input1").each(function () {
      if ($(this).val() === "") {
        empty = true;
      }
    });
    if (empty) {
      $("#save-data").attr("disabled", "disabled");
    } else {
      $("#save-data").removeAttr("disabled");
    }
  });
})();
function searchDebit(val) {
  var data = "";
  for (var i = 0; i < debitArr.length; i++) {
    if (debitArr[i].name.toLowerCase().includes(val.toLowerCase())) {
      data += `<tr>
            <td>${debitArr[i].name}</td>
            <td>${debitArr[i].email}</td>
            <td>${debitArr[i].number}</td>
            <td>${debitArr[i].ID}</td>
            <td>${debitArr[i].date}</td>
            <td>${debitArr[i].category}</td>
            <td>${debitArr[i].inCome} EG</td>
            <td><button class="deletebt" onclick="deleteDebit(${i})" >Delete</button></td>
            <tr>
            `;
    }
    document.getElementById("table").innerHTML = data;
  }
}
function deleteDebit(index) {
  debitArr.splice(index, 1);
  dispalyDebitCardData();
  localStorage.setItem("DebitCards", JSON.stringify(debitArr));
}
//----------------------------------Classic Card------------------------
if (JSON.parse(localStorage.getItem("ClassicCards")) != null) {
  classicArr = JSON.parse(localStorage.getItem("ClassicCards"));
  dispalyClassicCardData();
}

function saveClassicData() {
  var classicCardData = {
    name: nameClassic.value,
    email: emailClassic.value,
    number: numberClassic.value,
    ID: idClassic.value,
    date: dateClassic.value,
    category: categoryClassic.value,
    inCome: incomeClassic.value,
  };
  classicArr.push(classicCardData);

  localStorage.setItem("ClassicCards", JSON.stringify(classicArr));
  dispalyClassicCardData();
  location.reload();
}
nameClassic.onkeyup = function () {
  var debitRex =
    /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
  if (!debitRex.test(nameClassic.value)) {
    nameClassic.classList.add("is-invalid");
    nameClassic.classList.remove("is-valid");
  } else {
    nameClassic.classList.add("is-valid");
    nameClassic.classList.remove("is-invalid");
  }
};
emailClassic.onkeyup = function () {
  var debitEmailRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!debitEmailRex.test(emailClassic.value)) {
    emailClassic.classList.add("is-invalid");
    emailClassic.classList.remove("is-valid");
  } else {
    emailClassic.classList.add("is-valid");
    emailClassic.classList.remove("is-invalid");
  }
};
numberClassic.onkeyup = function () {
  var debitNumberRex = /^01[0125][0-9]{8}$/;

  if (!debitNumberRex.test(numberClassic.value)) {
    numberClassic.classList.add("is-invalid");
    numberClassic.classList.remove("is-valid");
  } else {
    numberClassic.classList.add("is-valid");
    numberClassic.classList.remove("is-invalid");
  }
};
idClassic.onkeyup = function () {
  var debitIdrRex =
    /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;

  if (!debitIdrRex.test(idClassic.value)) {
    idClassic.classList.add("is-invalid");
    idClassic.classList.remove("is-valid");
  } else {
    idClassic.classList.add("is-valid");
    idClassic.classList.remove("is-invalid");
  }
};
incomeClassic.onkeyup = function () {
  var debitIncomerRex = /^[0-9]{4,9}$/;

  if (!debitIncomerRex.test(incomeClassic.value)) {
    incomeClassic.classList.add("is-invalid");
    incomeClassic.classList.remove("is-valid");
  } else {
    incomeClassic.classList.add("is-valid");
    incomeClassic.classList.remove("is-invalid");
  }
};
function dispalyClassicCardData() {
  var data = "";
  for (var i = 0; i < classicArr.length; i++) {
    data += `<tr>
        <td>${classicArr[i].name}</td>
        <td>${classicArr[i].email}</td>
        <td>${classicArr[i].number}</td>
        <td>${classicArr[i].ID}</td>
        <td>${classicArr[i].date}</td>
        <td>${classicArr[i].category}</td>
        <td>${classicArr[i].inCome} EG</td>
        <td><button class="deletebt" onclick="deleteDClassic(${i})" >Delete</button></td>
        <tr>
        `;
  }
  document.getElementById("table2").innerHTML = data;
}
function deleteDClassic(index) {
  classicArr.splice(index, 1);
  dispalyClassicCardData();
  localStorage.setItem("ClassicCards", JSON.stringify(classicArr));
}
(function () {
  $(".form2 > .input2").keyup(function () {
    var empty = false;
    $(".form2 > .input2").each(function () {
      if ($(this).val() === "") {
        empty = true;
      }
    });
    if (empty) {
      $("#save-Claassicdata").attr("disabled", "disabled");
    } else {
      $("#save-Claassicdata").removeAttr("disabled");
    }
  });
})();
function search(val) {
  var data = "";
  for (var i = 0; i < classicArr.length; i++) {
    if (classicArr[i].name.toLowerCase().includes(val.toLowerCase())) {
      data += `<tr>
            <td>${classicArr[i].name}</td>
            <td>${classicArr[i].email}</td>
            <td>${classicArr[i].number}</td>
            <td>${classicArr[i].ID}</td>
            <td>${classicArr[i].date}</td>
            <td>${classicArr[i].category}</td>
            <td>${classicArr[i].inCome} EG</td>
            <td><button class="deletebt" onclick="deleteDebit(${i})" >Delete</button></td>
            <tr>
            `;
    }
    document.getElementById("table2").innerHTML = data;
  }
}
//-----------------------Titanium Card-------------
if (JSON.parse(localStorage.getItem("titaniumCards")) != null) {
  titaniumArr = JSON.parse(localStorage.getItem("titaniumCards"));
  dispalyTitaniumCardData();
}

function saveTitaniumData() {
  var titaniumCardData = {
    name: nametitanium.value,
    email: emailtitanium.value,
    number: numbertitanium.value,
    ID: idtitanium.value,
    date: datetitanium.value,
    category: categorytitanium.value,
    inCome: incometitanium.value,
  };
  titaniumArr.push(titaniumCardData);

  localStorage.setItem("titaniumCards", JSON.stringify(titaniumArr));
  dispalyTitaniumCardData();
  location.reload();
}
nametitanium.onkeyup = function () {
  var debitRex =
    /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
  if (!debitRex.test(nametitanium.value)) {
    nametitanium.classList.add("is-invalid");
    nametitanium.classList.remove("is-valid");
  } else {
    nametitanium.classList.add("is-valid");
    nametitanium.classList.remove("is-invalid");
  }
};
emailtitanium.onkeyup = function () {
  var debitEmailRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!debitEmailRex.test(emailtitanium.value)) {
    emailtitanium.classList.add("is-invalid");
    emailtitanium.classList.remove("is-valid");
  } else {
    emailtitanium.classList.add("is-valid");
    emailtitanium.classList.remove("is-invalid");
  }
};
numbertitanium.onkeyup = function () {
  var debitNumberRex = /^01[0125][0-9]{8}$/;

  if (!debitNumberRex.test(numbertitanium.value)) {
    numbertitanium.classList.add("is-invalid");
    numbertitanium.classList.remove("is-valid");
  } else {
    numbertitanium.classList.add("is-valid");
    numbertitanium.classList.remove("is-invalid");
  }
};
idtitanium.onkeyup = function () {
  var debitIdrRex =
    /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;

  if (!debitIdrRex.test(idtitanium.value)) {
    idtitanium.classList.add("is-invalid");
    idtitanium.classList.remove("is-valid");
  } else {
    idtitanium.classList.add("is-valid");
    idtitanium.classList.remove("is-invalid");
  }
};
incometitanium.onkeyup = function () {
  var debitIncomerRex = /^[0-9]{4,9}$/;

  if (!debitIncomerRex.test(incometitanium.value)) {
    incometitanium.classList.add("is-invalid");
    incometitanium.classList.remove("is-valid");
  } else {
    incometitanium.classList.add("is-valid");
    incometitanium.classList.remove("is-invalid");
  }
};
function dispalyTitaniumCardData() {
  var data = "";
  for (var i = 0; i < titaniumArr.length; i++) {
    data += `<tr>
        <td>${titaniumArr[i].name}</td>
        <td>${titaniumArr[i].email}</td>
        <td>${titaniumArr[i].number}</td>
        <td>${titaniumArr[i].ID}</td>
        <td>${titaniumArr[i].date}</td>
        <td>${titaniumArr[i].category}</td>
        <td>${titaniumArr[i].inCome} EG</td>
        <td><button class="deletebt" onclick="deleteTitanium(${i})" >Delete</button></td>
        <tr>
        `;
  }
  document.getElementById("table3").innerHTML = data;
}
function deleteTitanium(index) {
  titaniumArr.splice(index, 1);
  dispalyTitaniumCardData();
  localStorage.setItem("titaniumCards", JSON.stringify(titaniumArr));
}
function searchTitanium(val) {
  var data = "";
  for (var i = 0; i < titaniumArr.length; i++) {
    if (titaniumArr[i].name.toLowerCase().includes(val.toLowerCase())) {
      data += `<tr>
            <td>${titaniumArr[i].name}</td>
            <td>${titaniumArr[i].email}</td>
            <td>${titaniumArr[i].number}</td>
            <td>${titaniumArr[i].ID}</td>
            <td>${titaniumArr[i].date}</td>
            <td>${titaniumArr[i].category}</td>
            <td>${titaniumArr[i].inCome} EG</td>
            <td><button class="deletebt" onclick="deleteDebit(${i})" >Delete</button></td>
            <tr>
            `;
    }
    document.getElementById("table3").innerHTML = data;
  }
}
(function () {
  $(".form3 > .input3").keyup(function () {
    var empty = false;
    $(".form3 > .input3").each(function () {
      if ($(this).val() === "") {
        empty = true;
      }
    });
    if (empty) {
      $("#save-titaniumdata").attr("disabled", "disabled");
    } else {
      $("#save-titaniumdata").removeAttr("disabled");
    }
  });
})();
//-------------------------------platinum Card---------------------
if (JSON.parse(localStorage.getItem("platinumCards")) != null) {
  platinumArr = JSON.parse(localStorage.getItem("platinumCards"));
  dispalyplatinumCardData();
}

function saveplatinumData() {
  var platinumCardData = {
    name: namePlatinum.value,
    email: emailPlatinum.value,
    number: numberPlatinum.value,
    ID: idPlatinum.value,
    date: datePlatinum.value,
    category: categoryPlatinum.value,
    inCome: incomePlatinum.value,
  };
  platinumArr.push(platinumCardData);

  localStorage.setItem("platinumCards", JSON.stringify(platinumArr));
  dispalyplatinumCardData();
  location.reload();
}
namePlatinum.onkeyup = function () {
  var debitRex =
    /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
  if (!debitRex.test(namePlatinum.value)) {
    namePlatinum.classList.add("is-invalid");
    namePlatinum.classList.remove("is-valid");
  } else {
    namePlatinum.classList.add("is-valid");
    namePlatinum.classList.remove("is-invalid");
  }
};
emailPlatinum.onkeyup = function () {
  var debitEmailRex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!debitEmailRex.test(emailPlatinum.value)) {
    emailPlatinum.classList.add("is-invalid");
    emailPlatinum.classList.remove("is-valid");
  } else {
    emailPlatinum.classList.add("is-valid");
    emailPlatinum.classList.remove("is-invalid");
  }
};
numberPlatinum.onkeyup = function () {
  var debitNumberRex = /^01[0125][0-9]{8}$/;

  if (!debitNumberRex.test(numberPlatinum.value)) {
    numberPlatinum.classList.add("is-invalid");
    numberPlatinum.classList.remove("is-valid");
  } else {
    numberPlatinum.classList.add("is-valid");
    numberPlatinum.classList.remove("is-invalid");
  }
};
idPlatinum.onkeyup = function () {
  var debitIdrRex =
    /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;

  if (!debitIdrRex.test(idPlatinum.value)) {
    idPlatinum.classList.add("is-invalid");
    idPlatinum.classList.remove("is-valid");
  } else {
    idPlatinum.classList.add("is-valid");
    idPlatinum.classList.remove("is-invalid");
  }
};
incomePlatinum.onkeyup = function () {
  var debitIncomerRex = /^[0-9]{4,9}$/;

  if (!debitIncomerRex.test(incomePlatinum.value)) {
    incomePlatinum.classList.add("is-invalid");
    incomePlatinum.classList.remove("is-valid");
  } else {
    incomePlatinum.classList.add("is-valid");
    incomePlatinum.classList.remove("is-invalid");
  }
};
function dispalyplatinumCardData() {
  var data = "";
  for (var i = 0; i < platinumArr.length; i++) {
    data += `<tr>
        <td>${platinumArr[i].name}</td>
        <td>${platinumArr[i].email}</td>
        <td>${platinumArr[i].number}</td>
        <td>${platinumArr[i].ID}</td>
        <td>${platinumArr[i].date}</td>
        <td>${platinumArr[i].category}</td>
        <td>${platinumArr[i].inCome} EG</td>
        <td><button class="deletebt" onclick="deletePlaltinum(${i})" >Delete</button></td>
        <tr>
        `;
  }
  document.getElementById("table4").innerHTML = data;
}
function deletePlaltinum(index) {
  platinumArr.splice(index, 1);
  dispalyplatinumCardData();
  localStorage.setItem("platinumCards", JSON.stringify(platinumArr));
}
function searchPlatinum(val) {
  var data = "";
  for (var i = 0; i < platinumArr.length; i++) {
    if (platinumArr[i].name.toLowerCase().includes(val.toLowerCase())) {
      data += `<tr>
            <td>${platinumArr[i].name}</td>
            <td>${platinumArr[i].email}</td>
            <td>${platinumArr[i].number}</td>
            <td>${platinumArr[i].ID}</td>
            <td>${platinumArr[i].date}</td>
            <td>${platinumArr[i].category}</td>
            <td>${platinumArr[i].inCome} EG</td>
            <td><button class="deletebt" onclick="deletePlaltinum(${i})" >Delete</button></td>
            <tr>
            `;
    }
    document.getElementById("table4").innerHTML = data;
  }
}
(function () {
  $(".form4 > .input4").keyup(function () {
    var empty = false;
    $(".form4 > .input4").each(function () {
      if ($(this).val() === "") {
        empty = true;
      }
    });
    if (empty) {
      $("#save-platinumdata").attr("disabled", "disabled");
    } else {
      $("#save-platinumdata").removeAttr("disabled");
    }
  });
})();
//----------------------------------------------------------------

$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#sidebar-nav a").click(function (e) {
  e.preventDefault();
  $(this).tab("show");
});
