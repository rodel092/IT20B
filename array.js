class Array{

    constructor(initialData = {}) {
        this.data = {};
        this.length = 0;

        //Assign elements to index
        for(let i=0; i<initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
}

traverse(){
    let output = '';

    for(let i=0; i<this.length; i++){
        output += this.data[i] + " ";
    }
    console.log(output);

    }

insert(index, elements){
         //Collecting Statement || Must be false
        if(index <0 || index > this.length){
        console.log("Invalid Index");
        return;

         //Shifting Condition
         for(let i=this.length; i>index; i--){
         this.data[i] = this.data[i-1];
        }

        //After Condition
        this.data[index] = elements;
        this.length++;
        }

        delete(Index){

        //Collecting Statement || Must be false
        if(index <0 || index > this.length){
        console.log("Invalid Index");
        return;
        }
    

        //Shifting Condition
        for(let i=index; i<this.length-1; i++){
         this.data[i] = this.data[i+1];
        }

        //After Condition
        delete this.data[this.length-1];
        this.length--;
        }    
    }
}

//

arr1 = new Array([4,2,3]);

arr1.traverse();
arr1.insert(0,9);
arr1.traverse();
arr1.delete(5);
arr1.traverse();