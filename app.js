// UI Controller
var UIController=(function(){
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getinput:function(){
            return{
             type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp selected
             description : document.querySelector(DOMstrings.inputDescription).value,
             value : document.querySelector(DOMstrings.inputValue).value
              };
      },
         getDOMstrings:function(){
            return DOMstrings;
        }
    };
       
    // if you return it , it will become public
})();

//Budget Controller
var BudgetController=(function(){
    
})();

//Global Controller
var GlobalController=(function(uiCTRL,budgetCTRL){
    var DOM= uiCTRL.getDOMstrings();
    var addingItem= function(){
         //1.Get the filed input data
        var input = uiCTRL.getinput();
        console.log(input);
    }
    document.querySelector(DOM.inputBtn).addEventListener('click',addingItem);
    document.addEventListener('keypress',function(event){
        if(event === 13 || event.which === 13){ //For Older browsers for event.which
            addingItem();
        }
    });
})(UIController,BudgetController);



