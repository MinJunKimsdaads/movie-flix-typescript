<h1>Movie-Flix</h1>

<h3>TMDB api를 통한 영화 리스트 출력, 검색 웹 애플리케이션</h3>

<!-- 사용된 기술 스택 -->
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-square&logo=reactquery&logoColor=black"/>
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&logo=redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/sass-CC6699?style=flat-square&logo=sass&logoColor=white"/>
    <img src="https://img.shields.io/badge/reactrouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>
</div>

<h3>개발기간</h3>
<p>2weeks<p>

<h3>특징</h3>
<h4>1) 전역 상태 관리</h4>
<div>선택장르, 키워드, 메뉴, 페이지, 로딩여부 전역으로 관리</div>
<h4>2) tmdb api에서 가져온 리스트가 페이지 파라미터로 나뉘어져있음</h4>
<div>따라서 그 영화 중 포스터가 있는 영화를 따로 배열에 받아서 사용함</div>
<div>배열을 담는 과정이 오래걸려서 영화 갯수 500개로 제한</div>
<h4>3) fetch</h4>
<div>리액트 쿼리를 사용해서 데이터 fetch가 완료되면 로딩페이지가 사라지고 영화 목록이 나오도록 설정</div>
<h4>4) 페이지네이션 기능</h4>
<div>영화 목록 배열을 20개씩 나누고 페이지네이션 버튼 클릭 시 마다 영화 목록 출력</div>
<h4>5) 영화 포스터 클릭 시 해당 영화 상세페이지로 이동 해당 영화의 오버뷰, 백그라운드 이미지, 주연, 스텝, 장르, 런닝타임, 상영일 확인 가능</h4>
<div>해당 장르 클릭 시 선택 장르 초기화 후 해당 장르 리스트 출력</div>
<h4>6) 검색 기능</h4>
<div>키워드 입력 후 해당 키워드가 포함된 제목 or 오버뷰가 있는 영화 배열을 출력</div>

<img src="http://aaeexx.dothome.co.kr/project/image/movie-flix/1.gif)">
<img src="http://aaeexx.dothome.co.kr/project/image/movie-flix/2.gif)">
<img src="http://aaeexx.dothome.co.kr/project/image/movie-flix/3.gif)">
<img src="http://aaeexx.dothome.co.kr/project/image/movie-flix/4.gif)">
<img src="http://aaeexx.dothome.co.kr/project/image/movie-flix/5.gif)">
<img src="http://aaeexx.dothome.co.kr/project/image/movie-flix/6.gif)">

<a href="http://aaeexx.dothome.co.kr/project/image/movie-flix/">Demo</a>


