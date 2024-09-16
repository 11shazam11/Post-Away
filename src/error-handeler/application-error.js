export class ApplicatioError extends Error{
    constructor(error,code){
        super(error);
        this.code = code;
    }
}