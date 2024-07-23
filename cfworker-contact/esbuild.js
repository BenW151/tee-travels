const esbuild = require('esbuild');

const nodeBuiltInsPlugin = {
  name: 'node-built-ins',
  setup(build) {
    build.onResolve({ filter: /^path$/ }, args => ({
      path: args.path,
      namespace: 'node-built-ins'
    }));

    build.onLoad({ filter: /.*/, namespace: 'node-built-ins' }, () => ({
      contents: `
        export const basename = () => '';
        export const dirname = () => '';
        export const extname = () => '';
        export const format = () => '';
        export const isAbsolute = () => false;
        export const join = () => '';
        export const normalize = () => '';
        export const parse = () => ({});
        export const relative = () => '';
        export const resolve = () => '';
        export const sep = '/';
      `,
    }));
  }
};

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  platform: 'neutral',
  target: ['es2020'],
  outfile: 'dist/index.js',
  external: ['cloudflare:email', 'os'],  // Mark cloudflare:email and os as external
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [nodeBuiltInsPlugin],
}).catch(() => process.exit(1));
