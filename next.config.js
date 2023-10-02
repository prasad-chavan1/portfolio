module.exports = {
    reactStrictMode: false,
    env: {
        SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
        TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
        PUBLIC_API_KEY: process.env.EMAIL_JS_PUBLIC_API_KEY,
    },
}
