@echo off
chcp 65001

rem Check if .env file already exists
if not exist .env (
    rem Create .env file
    (
    echo REACT_APP_API_URL=http://localhost:8081/api/
    echo REACT_APP_BASE_URL=http://localhost:8081/
    echo DANGEROUSLY_DISABLE_HOST_CHECK=true
    ) > .env

    rem Create .env.development file
    (
    echo REACT_APP_API_URL=http://localhost:8081/api/
    echo REACT_APP_BASE_URL=http://localhost:8081/
    ) > .env.development

    rem Create .env.production file
    (
    echo REACT_APP_API_URL=
    echo REACT_APP_BASE_URL=
    ) > .env.production

    rem Create .env.test file
    (
    echo REACT_APP_API_URL=
    echo REACT_APP_BASE_URL=
    ) > .env.test

    echo .env, .env.development, .env.production, .env.test 파일을 생성했습니다.
) else (
    echo 이미 .env 파일이 있습니다. 스크립트 실행을 취소합니다. 만약 다른 .env 종류의 다른 파일을 삭제하셨다면 .env 파일 삭제 후 실행해주세요.
)
