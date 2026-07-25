import AppError from "./app_error.js";

export class NotFoundError extends AppError {
    constructor(message = "NOT FOUND") {
        super(message, 404)
    }
}

export class ValidationError extends AppError {
    constructor(message = "INVALID INPUT") {
        super(message, 400)
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "UNAUTHORIZED") {
        super(message, 401)
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "FORBIDDEN") {
        super(message, 403)
    }
}

export class ConflictError extends AppError {
    constructor(message = "CONFLICT") {
        super(message, 409)
    }
}