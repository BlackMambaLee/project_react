# 1단계: Node.js를 기반으로 하는 빌드 환경 설정
FROM node:21 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# 2단계: Nginx를 기반으로 하는 실행 환경 설정
FROM nginx:alpine

# 이전 빌드 단계에서 생성된 파일을 복사
COPY --from=build /app/build /usr/share/nginx/html

# 기본 Nginx 설정 파일을 제거하고 사용자 정의 파일을 복사
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]