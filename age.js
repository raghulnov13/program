// age
function getAge(birthYear) 
{
    var today = new Date();
    console.log(today);
    var birthDate = new Date(birthYear);
    console.log(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    console.log(age);
    var m = today.getMonth() - birthDate.getMonth();
    console.log(m);
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
  
  const d1 = new Date('2022-09-11');
  console.log(d1);  
  
  console.log(d1.getDay());
  
  console.log(isWeekend(d1));















  