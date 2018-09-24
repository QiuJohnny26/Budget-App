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
        },
        
        addListItems: function(obj, type){
            var html,newHTML;
            //create html string for placeholder
            if(type === 'income'){
             html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type === 'expense')
            html ='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%vale%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            // replace the placeholder with some actual data
            //newHTML =html.replace('id',obj.id)
            // Insert the HTML INTO THE DOM
            
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
            expense: [],
            income: []
            
        },
        totals:{
            expense: 0,
            income: 0
        }
    
    };
        return{
            addItem: function(type, des,val){
            var newItem,ID;
// Create new ID
            if( data.allItems[type].length> 0){
            ID=data.allItems[type][data.allItems[type].length-1].id+1;
            }
            else{
            ID=0;
            }
 // Create new Item depending income or expense               
            if( type === 'expense'){
            newItem = new Expense(ID,des,val);
            }
            else if ( type == 'income'){
            newItem = new Income(ID,des,val);   
            }
//Adds Element to the end of the array
             data.allItems[type].push(newItem);
 //return new item
                return newItem;
            },
            
            testing: function() {
                
                console.log(data);
            
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
        var input,newItem;
        //1.Get the filed input data
         input = uiCTRL.getinput();
        console.log(input);
         //2. Budget Controller
       newItem = budgetCTRL.addItem(input.type,input.description,input.value);
    };

   
 return {
     init:function(){
         console.log("starting");
        setupEventListeners();
     }
 };
   
})(UIController,BudgetController);


GlobalController.init();
