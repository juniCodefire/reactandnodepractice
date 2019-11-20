
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'developmnet';
export default {
    port: env.PORT || 8000,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
    	return `http://${this.host}:${this.port}`;
    }
}