export const SEPARATOR: string = "===================================================\n\n\n\n\n\n";
export const MIDDLE_SEPARATOR: string = "--------------------------------------------------";

export interface RunnableExample{

    /**
     * Run the given example
     */
    run(): void | Promise<void>;
}

/**
 * Fake and Async Request
 * 
 * @param returnValue The return value to return when the time passes;
 * @param time Time to wait (in milliseconds) to simulate the async request.
 * 
 * @return A promise for returnValue.
 */
export function FakeAsyncRequest<T>(returnValue: T, time: number = 5000): Promise<T>{
    return new Promise<T>((resolve, reject) => {
        try{
            setTimeout(() =>{
                resolve(returnValue);
            }, time);
        }catch(error){
            reject(error);
        }
    });
}

export function Run(type: any): Promise<void>{
    let instance: RunnableExample = <any>(new type());
    let value = instance.run();

    if(value instanceof Promise){
        return value;
    }else{
        return Promise.resolve(value);
    }
}