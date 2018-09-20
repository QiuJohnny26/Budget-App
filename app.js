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
    var Expense = function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
        
    };
    var Income = function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
        
    };
    

    
    var data = {
        allItems:{
            exp: [],
            inc: []
            
        },
        totals:{
            exp: 0,
            inc:0
        }
    
    }
        return{
            addItem: function(type, des,val){
            var newItem;
            var ID = data.allItems[type][data.allItems[type].length-1]
            if( type == 'exp'){
            newItem = new Expense(ID,des,val);
            }
            else if ( type == 'inc'){
            newItem = new Income(ID,des,val)
            }
                data.allItems[type].push(newItem); //Adds Element to the end of the array
                return newItem;
            }
        };

      
        
    
    
})();

//Global Controller
var GlobalController=(function(uiCTRL,budgetCTRL){
    var setupEventListeners=function(){
        document.querySelector(DOM.inputBtn).addEventListener('click',addingItem);
        document.addEventListener('keypress',function(event){
        if(event === 13 || event.which === 13){ //For Older browsers for event.which
            addingItem();
        }
    });
    };
    var DOM= uiCTRL.getDOMstrings();
    var addingItem= function(){
         //1.Get the filed input data
        var input = uiCTRL.getinput();
        console.log(input);
    }
 return {
     init:function(){
        setupEventListeners();
     }
 };
   
})(UIController,BudgetController);


GlobalController.init();
