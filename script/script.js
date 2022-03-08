function getAkanName () {
   //assignemnt 
    let dayOfBirth = document.getElementById('').ariaValueMin;
    let monthOfBirth = Number(document.getElementById('').value);
    let yearOfBirth = Number(ocument.getElementById('').value);
    let genders = document.getElementById('');

    //functions for gender generation
    function getGender () {
        for (let gender of genders){
            if (gender.checked){
                return gender.value;
            }
        }
    }
}