function changeColor() {
    this.style.filter = 'invert(1)'
    setTimeout(() => {
        this.style.filter = 'invert(0)';
    }, 2250)
}


const buttons = document.querySelectorAll('.btn-main')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', changeColor)
})