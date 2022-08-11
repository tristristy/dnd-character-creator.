const basicInfoEl = document.querySelector('.baseinfo');
const raceEl = document.querySelector('.race');
const levelsEl = document.querySelector('.levels');
const classEl = document.querySelector('.classes');
const proficienciesEl = document.querySelector('.proficiencies');
const equipEl = document.querySelector('.equip');
const spellsEl = document.querySelector('.spells');
const miscEl = document.querySelector('.miscinfo');
const mainFormEl =document.querySelector('.charaform');

basicInfoEl.onclick = (event) => {
    //drop down
    if (!event.target.matches('.baseinfo')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
    document.getElementById("baseInfoDropdown").classList.toggle("show");
    // main form
    var basicInfoForm = document.querySelector('.infoForm')
    basicInfoForm.classList.remove('hide');
    basicInfoForm.classList.toggle('show');
}

raceEl.onclick = event => {
    //drop down
    if (!event.target.matches('.race')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
    document.getElementById("raceDropdown").classList.toggle("show");
}

levelsEl.onclick = event => {
    //drop down
    if (!event.target.matches('.levels')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
    document.getElementById("levelsDropdown").classList.toggle("show");

    // main form
    var levelsForm = document.querySelector('.levelForm')
    levelsForm.classList.remove('hide');
    levelsForm.classList.toggle('show');
}

classEl.onclick = event => {
    // dropdown
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("classesDropdown").classList.toggle("show");

    // main form
    var classForm = document.querySelector('.classForm')
    classForm.classList.remove('hide');
    classForm.classList.toggle('show');
}

proficienciesEl.onclick = event => {
    // dropdown
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("profDropdown").classList.toggle("show");

    // main form
    var profForm = document.querySelector('.profForm')
    profForm.classList.remove('hide');
    profForm.classList.toggle('show');
}

equipEl.onclick = event => {
    // dropdown
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("equipDropdown").classList.toggle("show");


    // main form
    var equipForm = document.querySelector('.equipForm')
    equipForm.classList.remove('hide');
    equipForm.classList.toggle('show');
}

spellsEl.onclick = event => {
    //dropdown
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("spellsDropdown").classList.toggle("show");

    // main form
    var spellsForm = document.querySelector('.spellsForm')
    spellsForm.classList.remove('hide');
    spellsForm.classList.toggle('show');
}

miscEl.onclick = event => {
    //dropdown
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    document.getElementById("miscDropdown").classList.toggle("show");

    // main form
    var miscForm = document.querySelector('.miscInfoForm')
    miscForm.classList.remove('hide');
    miscForm.classList.toggle('show');
}

function clearInfo() {

}