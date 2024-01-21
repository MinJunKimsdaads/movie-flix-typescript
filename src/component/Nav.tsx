import { useSelector, useDispatch } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { useQuery } from "react-query";
import { genresList } from "../store/Store";
import { selectGenre, unselectGenre } from "../store/Store";
import styles from "../style/Nav.module.scss";

import { reducerType } from "../store/Store";

interface Test {
    id:string,
    name:string,
}

function Nav(){
    const {menu} = useParams() as {menu:any}; //메뉴
    const genreArr = useSelector((state:reducerType) => state.reducer2);
    const dispatch = useDispatch();
    
    const navMenu = [
        {
            name:'Now Playing',
            code:'now_playing',
        },
        {
            name:'Upcoming',
            code:'upcoming',
        },
        {
            name:'Popular',
            code:'popular',
        },
    ]

    const addGenre = (e:any) => {
        dispatch(selectGenre(e.target.id));
    }

    const removeGenre = (e:any) => {
        dispatch(unselectGenre(e.target.id));
    }

    const {status, data} =  useQuery(['genre'], ()=>genresList(),{
        staleTime: Infinity,
    });

    const translate = (name:string) => {
        switch(name){
            case '액션':
                return 'Action';
                break;
            case '모험':
                return 'Adventure';
                break;
            case '애니메이션':
                return 'Animation';
                break;
            case '코미디':
                return 'Comedy';
                break;
            case '범죄':
                return 'Crime';
                break;
            case '다큐멘터리':
                return 'Documentary';
                break;
            case '드라마':
                return 'Drama';
                break;
            case '가족':
                return 'Family';
                break;
            case '판타지':
                return 'Fantasy';
                break;
            case '역사':
                return 'History';
                break;
            case '공포':
                return 'Horror';
                break;
            case '음악':
                return 'Music';
                break;
            case '미스터리':
                return 'Mystery';
                break;
            case '로맨스':
                return 'Romance';
                break;
            case 'SF':
                return 'SF';
                break;
            case 'TV 영화':
                return 'TV Movie';
                break;
            case '스릴러':
                return 'Thriller';
                break;
            case '전쟁':
                return 'War';
                break;
            case '서부':
                return 'Western';
                break;
        }
    }

    if(status === 'success' && data){
        return (
            <>
                {navMenu.map(e => <div key={e.code} className={menu === e.code ? styles.selectedNavMenu:styles.navMenu}><span><Link to={`/${e.code}`}>{e.name}</Link></span></div>)}
                <div className={styles.category}></div>
                <div className={styles.categoryBtnBox}>
                    {data.map((e: Test) => {if(genreArr.indexOf(Number(e.id)) > -1){return(<div key={e.id}><span id={e.id} key={e.id} onClick={removeGenre} className={styles.seletedGenre}>{translate(e.name)}</span></div>)}else{return(<div key={e.id}><span id={e.id} key={e.id} onClick={addGenre} className={styles.genre}>{translate(e.name)}</span></div>)};})}
                </div>
            </>
        )
    }else{
        return null;
    }
}

export default Nav;