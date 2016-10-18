import * as Utils from "../utils";

export class GeneratorFunctionDemo implements Utils.RunnableExample{
    
    public run(): void {
        /*console.log(Utils.SEPARATOR);
        console.log(" >> Generators Example");
        console.log(Utils.MIDDLE_SEPARATOR);

        let iter = this.getAnimalName();

        let iterResult: IteratorResult<string>;
        do{

            iterResult = iter.next();
            console.log(iterResult.value);

        }while(!iterResult.done)

        console.log(Utils.SEPARATOR);*/
    }
    
    /*public *getAnimalName(): Iterator<string>{
        for (var i = 0; i < 100; i++) {
            yield "CurrentFunction_" + i;
        }
    }*/
}