// age
function getAge(birthYear) 
{
    var today = new Date();
    var birthDate = new Date(birthYear);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
console.log(getAge('1993-11-13'));


// Weekend
function isWeekend(date = new Date()) {
    return date.getDay() === 6 || date.getDay() === 0;
  }
  
  const d1 = new Date('2022-09-12');
  console.log(d1); // 👉️ Saturday Sep 24 2022
  
  console.log(d1.getDay()); // 👉️ 6
  
  console.log(isWeekend(d1)); // 👉️ true