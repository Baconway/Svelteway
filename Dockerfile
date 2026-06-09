FROM node:alpine

WORKDIR /site

ENV PUBLIC_USERID="714482641134551071"
ENV PUBLIC_GUILD_INVITE="https://discord.gg/GAMsRtrztP"

COPY . .

RUN npm install

RUN npm run build

COPY . .

CMD [ "node", "build" ]