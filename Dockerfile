FROM node:lts-alpine

ENV PNPM_HOME="/pnpm" \
    PATH="$PNPM_HOME:$PATH" \
    CI="true"
RUN corepack enable

WORKDIR /app

COPY . .

RUN pnpm install

CMD ["pnpm", "dev", "--host"]