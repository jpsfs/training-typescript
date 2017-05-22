import * as Utils from "../utils";

export class PromiseDemo implements Utils.RunnableExample{
    
    public run(): Promise<void>{
        
        return Utils.FakeAsyncRequest("!!! This is my result!", 3000).then(function(result){
            console.log("Finally it's over!");
        });

    }
}  