# discord_frontend

## 사용법

### 로컬 실행 방법

<h4>프로젝트 레파지토리 클론</h4>
<pre>$ git clone https://github.com/team1060/discord_frontend.git</pre>

<h4>최신 변경사항 로컬에 반영</h4>
<pre>$ git remote update</pre>

<h4>.env 등 배치 파일 실행</h4>
<pre>bat_env_file_create.bat</pre>

<h4>프로젝트 패키지 설치 및 실행</h4>
<pre>npm install, npm start</pre>

## 커밋 스타일

| 작업 유형 | 설명                                  |
| --------- | ------------------------------------- |
| feat      | 새로운 기능 추가                      |
| fix       | 버그 수정                             |
| docs      | 문서 수정                             |
| style     | 들여쓰기, 세미 콜론 등의 변경         |
| refactor  | 코드 리팩토링                         |
| test      | 테스트 코드의 작성 및 수정            |
| chore     | 외부 라이브러리 임포트 등의 작업 완료 |

## 참조한 사이트

### SCSS

[SCSS 폴더 구조](https://mine-it-record.tistory.com/594)<br />
[SCSS 폴더 구조](https://velog.io/@ohmy0418/SCSS-%ED%8F%B4%EB%8D%94%EA%B5%AC%EC%A1%B0)<br />

### React

[React 폴더 구조](https://choyeon-dev.tistory.com/entry/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8F%B4%EB%8D%94%EA%B5%AC%EC%A1%B0-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81)<br />
[React 폴더 구조](https://velog.io/@choco1drink/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0)<br />

### Axios

[Axios Instance]()
[Refresh Token](https://s0ojin.tistory.com/44)

### React Snippets

[React Snippets](https://velog.io/@rgfdds98/React-snippets-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%A2%85%EB%A5%98%EB%B3%84-%EB%8B%A8%EC%B6%95%ED%82%A4)

- rsc : 빈 div를 가진 화살표 함수 컴포넌트 생성

```
// rsc
import React from 'react';

const List = () => {
  return (
    <div>

    </div>
  );
};

export default List;
```

- rafc : 화살표 함수 컴포넌트를 생성과 함께 export하고, 컴포넌트가 있는 js파일명이 div안에 작성됨

```
// rafc
import React from 'react'

export const List = () => {
  return (
    <div>List</div>
  )
}
```

- rafce : export코드가 분리된 화살표 함수 컴포넌트를 생성하고, 컴포넌트가 있는 js파일명이 div안에 작성됨

```
// rafce
import React from 'react'

const List = () => {
  return (
    <div>List</div>
  )
}

export default List
```
