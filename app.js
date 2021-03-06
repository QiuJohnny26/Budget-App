// UI Controller
var UIController=(function(){
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesExpenses:'.expenses__list',
        incomeExpenses:'.income__list'
    };
    return {
        getinput:function(){
            return{
             type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp selected
             description : document.querySelector(DOMstrings.inputDescription).value,
             value :parseFloat(document.querySelector(DOMstrings.inputValue).value)
              };
      },
         getDOMstrings:function(){
            return DOMstrings;
        },
        
        addListItems: function(obj, type){
            var html,newHTML,element;
            //create html string for placeholder
            if(type === 'income'){
             element=DOMstrings.incomeExpenses;
             html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type === 'expense')
            element=DOMstrings.expensesExpenses;
            html ='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            // replace the placeholder with some actual data
            newHTML = html.replace('%id%',obj.id);
            newHTML = newHTML.replace('%description%',obj.description);
            newHTML = newHTML.replace('%value%',obj.value);
            // Insert the HTML INTO THE DOM
            document.querySelector(element).insertAdjacentHTML('afterend',newHTML);
            
        },
        clearDOM: function() {
            
            var fields,fieldsArr;
            
            fields=document.querySelectorAll(DOMstrings.inputDescription+', '+DOMstrings.inputValue);
            fieldsArr=Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(cur,index,array){
                cur.value="";
            });
            fieldsArr[0].focus();
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
    var updateBudget = function(){
       //1.Calculating the budget
        
    // 2. Return Budget
        
     //3.Display budget on UI
        
    }
    
    var DOM= uiCTRL.getDOMstrings();
    var addingItem= function(){
        var input,newItem;
        //1.Get the filed input data
         input = uiCTRL.getinput();
        if(input.description !==" " && !isNaN(input.value) && input.value >0){
         console.log(input);
         //2. Budget Controller
        newItem = budgetCTRL.addItem(input.type,input.description,input.value);
        uiCTRL.addListItems(newItem,input.type);
          // clear fields
        uiCTRL.clearDOM();
        
        updateBudget();
        }
    };

    
   
 return {
     init:function(){
        console.log("starting");
        setupEventListeners();
     }
 };
   
})(UIController,BudgetController);


GlobalController.init();
