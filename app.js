// UI Controller
var UIController=(function(){
    
    return {
        getinput:function(){
            var type = document.querySelector('.add__type').value; // will be either inc or exp selected
            var description= document.querySelector('.add__description').value;
            var value = document.querySelector('.add__value').value;
        }
    }
})();

//Budget Controller
var BudgetController=(function(){
    
})();

//Global Controller
var GlobalController=(function(uiCTRL,budgetCTRL){
    
    var addingItem= function(){
         //1.Get the filed input data
    }
    document.querySelector('.add__btn').addEventListener('click',addingItem);
    document.addEventListener('keypress',function(event){
        if(event === 13 || event.which === 13){ //For Older browsers for event.which
            addingItem();
        }
    });
})(UIController,BudgetController);



