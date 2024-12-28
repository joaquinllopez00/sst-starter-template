# SST AWS - Turbo MonoRepo - Starter

---

_Note: The Amazon Sumerian service has been deprecated #RIP. The version of AWS Amplify currently in this template have been deprecated and you will need to upgrade the packages for this template to be fully functional. At some point in the future I will update this template (probably whenever I need it again), but for now plan for that upgrade._

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `server`: contains dynamodb models (using Dynamoose) in `models`, auth helpers for authentication (using cognito), and
  `stacks` which contain all the stacks used by SST for deployment onto AWS

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd [your_directory]
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd [your-directory]
pnpm dev
```

### Setting up AWS configuration on your machine

In order for SST to build your stacks, you need to ensure that your AWS credentials are setup in your `.aws` directory

Navigate to `.aws->credentials` and inset your IAM credentials (as below)

```
[default] or [your_app_name]
aws_access_key_id = [your key here - should look like `AK....`]
aws_secret_access_key = [your key here - should look like `pk...`]
```

### Deployment

It is not preconfigured in this repo, however SST recommends using Seed.Run for CI/CD. That is linked below.

## Useful Links

Learn more about the power of Turborepo:

- [SEED.RUN](https://seed.run/)
- [SST](https://sst.dev/)
