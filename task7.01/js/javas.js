
let accessAllowed;
let years = prompt('Введите год и я напишу высокосный ли он', '');

if (years % 4 == 0) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);