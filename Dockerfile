FROM nginx:latest


COPY ./index.html /usr/share/nginx/html/index.html
COPY ./static/ /usr/share/nginx/html/static
