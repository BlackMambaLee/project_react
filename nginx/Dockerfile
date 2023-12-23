# 1단계: Node.js를 기반으로 하는 빌드 환경 설정
FROM golang:1.20 as build

WORKDIR /app

COPY . .

RUN . build.sh

# 기본 Nginx 설정 파일을 제거하고 사용자 정의 파일을 복사
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]