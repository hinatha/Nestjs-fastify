# Nestjs-fastify

This api has below function

## UserStory

- User can upload a file

## Structure

```bash
.
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── README.md
├── nest-cli.json
├── package-lock.json
├── package.json
├── src
│   ├── app.module.ts
│   ├── main.ts
│   └── task
│       ├── dto
│       │   ├── app-response.dto.ts
│       │   └── file-upload.dto.ts
│       ├── model
│       │   └── task.model.ts
│       ├── task.controller.ts
│       ├── task.module.ts
│       └── task.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock

5 directories, 20 files
```

## Using of language, framework, technology

- Node.js
- Nest.js
- TypeScript
- fastify
- SwaggerUI

## Requirement

- "@nestjs/common": "^8.0.0"
- "@nestjs/core": "^8.0.0"
- "@nestjs/mapped-types": "*"
- "@nestjs/platform-express": "^8.0.0"
- "@nestjs/platform-fastify": "^8.4.0"
- "@nestjs/swagger": "^5.2.0"
- "fastify-multipart": "^5.3.1"
- "fastify-swagger": "^5.0.0"
- "reflect-metadata": "^0.1.13"
- "rimraf": "^3.0.2"
- "rxjs": "^7.2.0"

## Usage

```bash
git clone https://github.com/hinatha/Nestjs-fastify.git
cd Nestjs-fastify
yarn
yarn start:dev
```
