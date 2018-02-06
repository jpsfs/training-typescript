import {AbstractParent} from "./abstractParent";

export class ParentClass extends AbstractParent {
    /**
     * Unique Identifier
     */
    public id: string | undefined;

    /**
     * Get or set the Name
     */
    public name: string | undefined;
}