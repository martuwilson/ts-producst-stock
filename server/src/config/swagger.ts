import swaggerJSDoc from "swagger-jsdoc";

const options : swaggerJSDoc.Options= {
    definition:{
        openapi: "3.0.2",
        tags: [{
            name: 'Products',
            description: 'API endpoints for managing products',
        }],
        info: {
            title: "REST API Node.js / Express / TypeScrypt / STOCKDocumentation",
            version: "1.0.0",
            description: "API documentation for product management",
        },
    },
    apis: ["src/router.ts"],
}

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;