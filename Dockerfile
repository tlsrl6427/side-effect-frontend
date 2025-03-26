FROM node:20
COPY  . ./sideeffect-front
WORKDIR ./sideeffect-front
ENTRYPOINT [ "npm", "run", "dev" ]
EXPOSE 3000