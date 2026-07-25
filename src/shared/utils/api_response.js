class ApiResponse {
    constructor( data, message = "SUCCESS") {
        this.success = true
        this.message = message
        this.data = data
    }
}

export default ApiResponse