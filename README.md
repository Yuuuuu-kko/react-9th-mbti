https://github.com/user-attachments/assets/da91fe4f-9d50-4d96-bd07-d007ca6cc5bd

🎯 구현 기능

✅ zustand를 활용한 user 상태 관리

✅ tanStack query를 활용하여 mbti 테스트 CRUD 관리

Create: 새로운 MBTI 테스트 결과 저장
Read: 사용자들이 작성한 모든 테스트 결과 보기
Update: 내가 테스트한 결과의 비공개/ 공개 전환 여부 설정
Delete: 나의 결과 삭제 기능

🌳 파일구조

```
┣ 📂public
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜authInstance.js
 ┃ ┃ ┗ 📜testResults.js
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜react.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜AuthForm.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜TestForm.jsx
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜questions.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┣ 📜Profile.jsx
 ┃ ┃ ┣ 📜Signup.jsx
 ┃ ┃ ┣ 📜TestPage.jsx
 ┃ ┃ ┗ 📜TestResultPage.jsx
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜Router.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜mbtiCalculator.js
 ┃ ┣ 📂zustand
 ┃ ┃ ┗ 📜authStore.js
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜db.json
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜README.md
 ┣ 📜tailwind.config.js
 ┣ 📜vite.config.js
 ┗ 📜yarn.lock
```
