class ApiResponse {
    constructor(statusCode , data , message = "success")
    {
        this.statuscode = statuscode;
        this.data = data ;
        this.message = message ;
        this.success = statusCode < 400 ;
    }
}