class UnauthorizedError extends Error {
    constructor(message?: string) {
        super(message ?? 'Invalid or expired API key provided');
    }
}

export default UnauthorizedError;
