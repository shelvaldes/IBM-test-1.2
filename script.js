//interface
let btnPush = document.getElementById("pushButton");
let btnEmpty = document.getElementById("emptyButton");
let btnPeek = document.getElementById("peekButton");
let userInput = document.getElementById("input");

//Stack classes
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    //Método constructor
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peak() {
        return this.top;
        console.log(this.top);
    }
    //método push (captain obvious)
    push(value) {
        // cajones UI para la pila
        let pila2 = document.getElementById("2")
        let pila1 = document.getElementById("1")
        let pila3 = document.getElementById("3")
        let pila4 = document.getElementById("4")
        let pila5 = document.getElementById("5")

        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            pila1.innerHTML = value;
        } else if (this.length > 4) {
            //pila llena
            alert("Stack was already full!")
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;

            //Showing Data
            switch (this.length) {
                case 1:
                    pila2.innerHTML = value;
                    break;
                case 2:
                    pila3.innerHTML = value;
                    break;
                case 3:
                    pila4.innerHTML = value;
                    break;
                case 4:
                    pila5.innerHTML = value;
                    break;

            }
        }
        this.length++;
        return this;
    }
    
}

//create stack
const myStack = new Stack();

//botones
btnPush.addEventListener("click", event => {
    let texto = userInput.value;
    //console.log(texto.length);

    if (texto.length == 0 || texto.trim() == 0) {
        alert("Please enter a value!")
    } else {
        //console.log("no vacio")
        myStack.push(texto);
        console.log(myStack);
    }
    userInput.value = "";

})

btnEmpty.addEventListener("click", event => {
    console.log(myStack.length)
    if (myStack.length==0){
        alert("Yes, Stack is empty");
    }else{
        alert("No, Stack is not empty");
    }
})

btnPeek.addEventListener("click", event => {
    if (myStack.length==0){
        alert("Operación no permitida!");
    }else{
        console.log(myStack.top);
        return myStack.top;
    }
})