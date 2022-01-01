function progressBar(progressVal,totalPercentageVal = 100) {
    var strokeVal = (4.64 * 100) /  totalPercentageVal;
    var x = document.querySelector('.progress-circle-prog');
    x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
    var el = document.querySelector('.progress-text'); 
    var from = jQuery('.progress-text').data('progress');
    jQuery('.progress-text').data('progress', progressVal);
    var start = new Date().getTime();
  
  setTimeout(function() {
      var now = (new Date().getTime()) - start;
      var progress = now / 700;
      el.innerHTML = progressVal / totalPercentageVal * 100 + '%';
      if (progress < 1) setTimeout(arguments.callee, 10);
  }, 10);

}

jQuery('#calculator_submit').on('click', function(e) {
    let name1 = jQuery("#name1").val();
    let name2 = jQuery("#name2").val();
    if(name1 == ""){
        alert('Enter Name of Boy');
       }
       else if(name2 == ""){
        alert('Enter Name of Girl');
       }
       else{
        let range = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86];
        var lovdata = Math.random() * 17;
        lovdata = Math.floor(lovdata);
        progressBar(range[lovdata]);
        jQuery(".main-content").css('display', 'block');
        jQuery(".form-div").css('display', 'none');
       }
})


let daySelector = document.querySelectorAll('.day-selector');
let monthSelector = document.querySelectorAll('.month-selector');
let yearSelector = document.querySelectorAll('.year-selector');

let temp;
let tmp;

for(let i=1; i<32; i++) {
    temp = document.createElement('option');
    temp.innerHTML = i;
    tmp = document.createElement('option');
    tmp.innerHTML = i;
    daySelector[0].appendChild(temp);
    daySelector[1].appendChild(tmp);
}

for(let i=1; i<13; i++) {
    temp = document.createElement('option');
    temp.innerHTML = i;
    tmp = document.createElement('option');
    tmp.innerHTML = i;
    monthSelector[0].appendChild(temp);
    monthSelector[1].appendChild(tmp);
}

for(let i=2021; i>=1900; i--) {
    temp = document.createElement('option');
    temp.innerHTML = i;
    tmp = document.createElement('option');
    tmp.innerHTML = i;
    yearSelector[0].appendChild(temp);
    yearSelector[1].appendChild(tmp);
}