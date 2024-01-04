#!/bin/bash

# 당신의 ECR 레지스트리 URI
ECR_REGISTRY="850095925860.dkr.ecr.ap-northeast-2.amazonaws.com"
# 당신의 ECR 저장소 이름
ECR_REPOSITORY="workingscv_front"
# Docker 이미지 이름
DOCKER_IMAGE_NAME="latest"
# Docker 컨테이너 이름
DOCKER_CONTAINER_NAME="WorkingSCV_Front"

# AWS CLI 설정
AWS_CLI="/usr/bin/aws"
AWS_REGION="ap-northeast-2"
AWS_PROFILE="default"

# Docker를 당신의 ECR 레지스트리에 인증
$($AWS_CLI ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY)

# ECR에서 최신 Docker 이미지를 가져옴
docker pull $ECR_REGISTRY/$ECR_REPOSITORY:$DOCKER_IMAGE_NAME

# 기존 컨테이너를 중지하고 삭제함 (만약 있을 경우)
docker stop $DOCKER_CONTAINER_NAME || true
docker rm $DOCKER_CONTAINER_NAME || true

# Docker 컨테이너 실행
docker run -d --name $DOCKER_CONTAINER_NAME -p 80:80 $ECR_REGISTRY/$ECR_REPOSITORY:$DOCKER_IMAGE_NAME

# 추가적인 배포 작업은 여기에 추가 가능
