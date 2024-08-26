
# Nuxt 3 Travel Blog

This is a travel blog built with Nuxt 3, featuring Decap CMS for content management, a contact form, and various standard blog functionalities.

## Project Description

This travel blog showcases various travel destinations and experiences. It includes a content management system (Decap CMS) for easy blog post management, a contact form for user inquiries, and other standard blog features.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

To start the development server, run the following command. The server will be accessible at `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

This will start the server in development mode, allowing you to see changes in real-time. The development server will watch for file changes and automatically reload the application.

### Accessing the Server

Once the server is running, open your web browser and navigate to `http://localhost:3000` to view your blog. You can interact with and test your application in this local environment.

### Stopping the Server

To stop the development server, use `Ctrl + C` in your terminal where the server is running.

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Configuration

Set up the following environment variables in a `.env` file:

```env
# .env
CONTACT_API_URL=
NEWSLETTER_API_URL=
NEWSLETTER_UNSUBSCRIBE_API_URL=
```

Ensure that you configure GitHub OAuth for Decap CMS as per the [Decap CMS GitHub OAuth guide](https://github.com/sterlingwes/decap-proxy).

site_url and base_url also need to be set in public/admin/config.yml for decap config

## Usage

Once the development server is running, access the blog at `http://localhost:3000`. Content can be managed through Decap CMS, and manual updates can be made directly in the source files.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Nuxt 3](https://nuxt.com) for the framework.
- [Decap CMS](https://decapcms.org) for content management.
