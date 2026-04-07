## 웹 서버 만들기
- Languege: JavaScript
- 개발환경: Node.js
- 서버 설치 명령어: npm init -y -> package.json

### Express 프레임워크 설치
- 설치: npm install express
- import 사용: ES6문법
- package.json에서 변경
"type": "module" <-비주얼스튜디오 자동 올리기
- 서버 자동 실행: nodemon 설치
1. npm i nodemon
2. "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js" <-요거 쓰기},
3. 실행 명령어: npx nodemon index.js 
