const input=document.getElementById('input-box')
const btn=document.getElementById('btn')

btn.addEventListener('click',function math(){
     let val=input.value;
     renderList(val)
     input.value=''
})

const line1=document.querySelector('.line1')
const line2=document.querySelector('.line2')
const line3=document.querySelector('.line3')
function renderList(val){
     line1.textContent=`${val}meters = ${(val*3.28084).toFixed(3)}feet | ${val}feet = ${(val/3.28084).toFixed(3)}meters`
     line2.textContent=`${val}liters = ${(val*0.264172).toFixed(3)}gallons | ${val}gallons = ${(val/0.264172).toFixed(3)}liters`
     line3.textContent=`${val}kilograms = ${(val*2.20462).toFixed(3)}pounds | ${val}pounds = ${(val/2.20462).toFixed(3)}kilograms`
}