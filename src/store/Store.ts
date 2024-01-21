import { createStore, combineReducers } from "redux";
import axios from "axios";

//action type// 상수로 정리
const PREV = 'PREV';
const NEXT = 'NEXT';
const FIRST = 'FIRST';
const END = 'END';
const NUM = 'NUM';
const ADD_GENRE = 'ADD_GENRE';
const DELETE_GENRE = 'DELETE_GENRE';
const RESET_GENRE = 'RESET_GENRE';
const ADD_KEYWORD = 'ADD_KEYWORD';
const OPEN_LOADING = 'OPEN_LOADING';
const CLOSE_LOADING = 'CLOSE_LOADING';

///fetch///
const genresList = async() => {
    try{
        console.log(process.env.REACT_APP_TMDB)
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB}&language=ko-KR`);
        const data = response.data.genres;
        return data;
    }catch(e){
        console.log(e);
    }
}

const fetchList = async(menu:any,keyword:any,genre:number[]) => { //그 다음 리스트 출력
    try{
        const url = `https://api.themoviedb.org/3/movie/${menu ? menu:'now_playing'}?api_key=${process.env.REACT_APP_TMDB}&language=ko-KR`;
        const response = await axios.get(url);
        let totalPage = response.data.total_pages;
        // if(totalPage > 500){  // 최대 데이터 갯수 500개로 제한
        //     totalPage = 50;
        // }

        totalPage = 15; //속도 문제로 데이터 갯수 제한
        let totalResultArr = [];
        for(let i=1;i<=totalPage;i++){ //각 페이지별로 하나의 배열에 나열
            let newResponse = await axios.get(url+`&page=${i}`,);
            totalResultArr.push(...newResponse.data.results);
        }
        if(genre.length > 0){  ///선택된 장르 확인
            totalResultArr = totalResultArr.filter((e)=>
                e.genre_ids.some((x:number)=>genre.includes(x))
            )
        }
        if(keyword){ ///검색한 키워드 확인
            totalResultArr = totalResultArr.filter((e)=>e.backdrop_path !== null && (e.title.indexOf(keyword) !== -1 || e.overview.indexOf(keyword) !== -1));
        }else{
            totalResultArr = totalResultArr.filter((e)=>e.backdrop_path !== null);
        }
        return totalResultArr;
    }catch(e){
        console.log(e);
    }
}

const fetchMovie = async(id:number) => {
    try{
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB}&language=ko-KR`;
        const urlCredit = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB}&language=ko-KR`;
        const response = await axios.get(url);
        const responseCredit = await axios.get(urlCredit);
        const movieData = {
            title:response.data.title,//제목
            image:response.data.backdrop_path,//이미지
            release:response.data.release_date,//개봉일
            runningTime:response.data.runtime,//런닝타임
            genres:response.data.genres,//장르
            overview:response.data.overview,//오버뷰
            cast:responseCredit.data.cast,//주연
            crew:responseCredit.data.crew,//크리에이터
        }
        return movieData;
    }catch(e){
        console.log(e);
    }
}
///fetch///

///genre///
const selectGenre = (genre:string) => {
    return {
        type: ADD_GENRE,
        genre: genre,
    }
}

const unselectGenre = (genre:string) => {
    return {
        type: DELETE_GENRE,
        genre: genre,
    }
}
///genre///

///pagenation///
const moveToFirst = () => {
    return {
        type:FIRST,
    }
}

const moveToEnd = (result:number) => {
    return {
        type:END,
        result:result,
    }
}

const moveToPrev = () => {
    return {
        type:PREV,
    }
}

const moveToNext = () => {
    return {
        type:NEXT,
        
    }
}

const moveToPage = (num:any) => {
    return{
        type:NUM,
        result:num,
    }
}
///pagenation///

///keyword///
const insertKeyword = (keyword:any) => {
    return {
        type: ADD_KEYWORD,
        keyword: keyword,
    }
}
///keyword///

///리듀서///
/// 페이지네이션 state ///
const reducer = (state = 1, action:any) => {
    switch(action.type){
        case 'PREV':
            return state - 1;
        case 'NEXT':
            return state + 1;
        case 'FIRST':
            return 1;
        case 'END':
            return action.result;
        case 'NUM':
            return action.result;
        default:
            return state;
    }
}

////// 장르 state //////
const reducer2 = (state :any[] = [], action:any)=>{
    switch(action.type){
        case 'ADD_GENRE':
            return [...state,Number(action.genre)];
        case 'DELETE_GENRE':
            return state.filter(e => e !== Number(action.genre));
        case 'RESET_GENRE':
            return [];
        default:
            return state;
    }
}

////// 키워드 state //////
const reducerKeword = (state = '', action:any) => {
    switch(action.type){
        case 'ADD_KEYWORD':
            return action.keyword;
        default:
            return state;
    }
}

const reducerLoading = (state = false, action:any) => {
    switch(action.type){
        case 'OPEN_LOADING':
            return false;
        case 'CLOSE_LOADING':
            return true;
        default:
            return state;
    }
}

const reducers = combineReducers({
    reducer : reducer,
    reducer2 : reducer2,
    reducer3 : reducerKeword,
    reducer4 : reducerLoading,
})

const store = createStore(reducers);
///리듀서///

export type reducerType = ReturnType<typeof reducers>; //


export {store, fetchList, genresList, selectGenre, unselectGenre, moveToFirst, moveToEnd, moveToNext, moveToPrev, moveToPage, insertKeyword, fetchMovie};
