import { defineConfig } from "@prisma/internals";

export default defineConfig({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_wpW7YfS0HxKs@ep-quiet-flower-a4ynrgre-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    },
  },
});
