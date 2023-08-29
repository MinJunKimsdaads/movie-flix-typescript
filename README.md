# 스택
1) typescript
2) react-query
3) redux
4) scss
5) react-router-dom
6) axios

# 기능
1) 전역 상태 관리
    선택장르, 키워드, 메뉴, 페이지, 로딩여부 전역으로 관리

2) tmdb api에서 가져온 리스트가 페이지 파라미터로 나뉘어져있음
   -> 따라서 그 영화 중 포스터가 있는 영화를 따로 배열에 받아서 사용함
   -> 배열을 담는 과정이 오래걸려서 영화 갯수 500개로 제한 

3) fetch
   리액트 쿼리를 사용해서 데이터 fetch가 완료되면 로딩페이지가 사라지고 영화 목록이 나오도록 설정

4) 페이지네이션 기능
   영화 목록 배열을 20개씩 나누고 페이지네이션 버튼 클릭 시 마다 영화 목록 출력

5) 영화 포스터 클릭 시 해당 영화 상세페이지로 이동 해당 영화의 오버뷰, 백그라운드 이미지, 주연, 스텝, 장르, 런닝타임, 상영일 확인 가능
-> 해당 장르 클릭 시 선택 장르 초기화 후 해당 장르 리스트 출력

6) 검색 기능
   키워드 입력 후 해당 키워드가 포함된 제목 or 오버뷰가 있는 영화 배열을 출력

## 업무 요약
# 소요시간 about 6hours (회사점심시간마다 개발함)
1) 필요한 컴포넌트 제작
2) tmdb api fetch하여 필요한 데이터 가져오기
3) Redux를 사용해서 전역으로 관리해야할 state작성, dispatch로 작성할 함수들 제작
4) 키워드 기능 추가, 페이지네이션 추가, 장르 선택 기능 추가
5) 로딩 컴포넌트 추가
6) css -> scss로 리팩토링
7) typescript로 리팩토링
   
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
