import {ChildClass} from "./child";
import {ParentClass} from "./parent";

import {AbstractParent} from "./abstractParent";

import * as Utils from "../utils";

export class InheritanceDemo implements Utils.RunnableExample{
    
    public run(): void{

        let child = new ChildClass();
        let parent = new ParentClass();

        //let abstractParent = new AbstractParent();


        let childType = child.type;
        //let parentType = parent.type;
        
        console.log("Child Type");
        console.log(childType);
    }
} 