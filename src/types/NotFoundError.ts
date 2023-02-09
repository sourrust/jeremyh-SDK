class NotFoundError extends Error {
    constructor(message?: string) {
        super(message ?? 'No movie was found');
    }
}

export default NotFoundError;
