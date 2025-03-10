const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);

    const result=document.querySelector('#results');

    if(height===' ' || height<0 || isNaN(height)){
        result.innerHTML= `please enter valid height ${height}`;
    }else  if(weight===' ' || weight<0 || isNaN(weight)){
        result.innerHTML= `please enter valid weight ${weight}`;
    }else{
        const bmi=(weight/((height*height)/1000)).toFixed(2);
        // show the result
        result.innerHTML=`<span>BMI= ${bmi}</span>`;
    }
});