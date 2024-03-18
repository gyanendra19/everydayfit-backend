interface appError {
    statusCode: number
    status: string
}

class appError extends Error{
    constructor(public message: string, public statusCode: number){
        super(message)
        this.statusCode = statusCode
        this.status = `${this.statusCode}`.startsWith('4') ? 'Error' : 'fail'
    }
}

export default appError