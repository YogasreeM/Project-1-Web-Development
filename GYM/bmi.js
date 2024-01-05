const calculateForm = document.getElementById('calculate-form');
       calculateCm = document.getElementById('calculate-cm');
       calculateKg = document.getElementById('calculate-kg');
       calculateMessage = document.getElementById('calculate-message');
       console.log(calculateCm.value);

 const calculateBmi = (e)=> {
    e.preventDefault()
    // check if the fields have a value
   
    if(calculateCm.value ===''|| calculateKg.value ===''){
        //add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        //show message
        calculateMessage.textContent='Fill in the Height and Weight'
        //Remove message three seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        },3000)
    }else{
        //BMI Formula
        const cm = calculatecm.value / 100,
              kg = calculatekg.value,
              bmi=Math.round(kg / (cm * cm))
        //show your health status
        if(bmi < 18.5){
            //Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent='Your BMI is ${bmi} and you are skinny😕'
        }  else if(bmi<25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent='Your BMI is ${bmi} and you are Healthy🥳'
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent='Your BMI is ${bmi} and you are overweight😞'
        }
        // To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''
        // Remove message four seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        },4000)
    }
} 
