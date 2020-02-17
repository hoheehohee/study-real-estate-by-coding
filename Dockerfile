From nginx:alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY build /vuelab-admin
EXPOSE 80
# nginx.conf에 daemon off; 를 설정시킨다. Nginx 웹 서버를 foreground로 실행시킨다. 
CMD ["nginx", "-g", "daemon off;"]  