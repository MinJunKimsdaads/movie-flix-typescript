import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { genresList } from "../store/Store";
import { selectGenre, unselectGenre } from "../store/Store";
import styles from "../style/Nav.module.scss";

import { reducerType } from "../store/Store";

function Nav(){
    const genreArr = useSelector((state:reducerType) => state.reducer2);
    const dispatch = useDispatch();
    
    const navMenu = [
        {
            name:'현재 상영 중인 영화',
            code:'now_playing',
        },
        {
            name:'개봉 예정 영화',
            code:'upcoming',
        },
        {
            name:'인기 영화',
            code:'popular',
        },
    ]

    const addGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(selectGenre(e.target.id));
    }

    const removeGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(unselectGenre(e.target.id));
    }

    const {status, data} =  useQuery(['genre'], ()=>genresList(),{
        staleTime: Infinity,
    });

    if(status === 'success'){
        return (
            <>
                {navMenu.map(e => <div key={e.code} className={styles.navMenu}><span><Link to={`/${e.code}`}>{e.name}</Link></span></div>)}
                <div className={styles.category}>카테고리</div>
                <div className={styles.categoryBtnBox}>
                    {status === 'success' ? data.map((e:any) => {if(genreArr.indexOf(Number(e.id)) > -1){return(<div key={e.id}><span id={e.id} key={e.id} onClick={()=>{removeGenre}} className={styles.seletedGenre}>{e.name}</span></div>)}else{return(<div key={e.id}><span id={e.id} key={e.id} onClick={()=>{addGenre}} className={styles.genre}>{e.name}</span></div>)};}) : null}
                </div>
            </>
        )
    }
}

export default Nav;