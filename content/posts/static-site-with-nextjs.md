---
title: "Static Sites with Next.js and nginx"
date: "2026-02-25"
excerpt: "How I set up this blog: Next.js static export served by nginx on a VPS, with Cloudflare handling HTTPS."
tags: ["nextjs", "nginx", "devops"]
---

This blog is a static site. Here's exactly how it's put together.

## Why static?

The server this runs on has ~1GB of RAM. Running a Node.js process 24/7 just to serve a blog felt wasteful. A static export — plain HTML, CSS, and JS — served by nginx uses essentially no resources.

## Next.js static export

Setting `output: 'export'` in `next.config.ts` tells Next.js to generate a static site instead of a Node.js server. After `next build`, everything lands in an `out/` directory.

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}
```

The `trailingSlash: true` option ensures URLs like `/blog/post-name/` work correctly with nginx's `try_files` directive.

## nginx config

```nginx
server {
    listen 443 ssl;
    server_name yips.dev www.yips.dev;

    root /home/linuxuser/yips-dev/out;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/html text/css application/javascript application/json;
}
```

## Cloudflare

The domain points to Cloudflare, which handles HTTPS to visitors. The origin server uses a Cloudflare Origin Certificate — a cert issued by Cloudflare CA, valid for 15 years, free, zero maintenance.

## Deployment

Updating the site is just:

```bash
cd ~/yips-dev
git pull
npm run build
```

nginx picks up the new files in `out/` immediately — no restart needed.
