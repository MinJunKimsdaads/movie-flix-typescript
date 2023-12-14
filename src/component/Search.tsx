import { useDispatch } from "react-redux";
import { useState } from "react";
import { insertKeyword } from "../store/Store";
import styles from "../style/Search.module.scss";
import { useParams,Link } from "react-router-dom";

function Search(){

    const translate = (name:string) => {
        switch(name){
            case 'now_playing':
                return 'Now Playing';
                break;
            case 'upcoming':
                return 'Upcoming';
                break;
            case 'popular':
                return 'Popular';
                break;
        }
    }

    const {menu} = useParams() as {menu:any}; //메뉴
    
    const dispatch = useDispatch();
    const [keyword, setinKeyword] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinKeyword(e.target.value);
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            insert();
        }
    }

    const insert = () => {
        dispatch(insertKeyword(keyword));
    }

    return (
        <div className={styles.searchWrap}>
            <span className={styles.menu}>
                {menu ? translate(menu):'Now Playing'}
            </span>
            <div className={styles.searchBox}>
                <input value={keyword} onChange={onChange} onKeyPress={onKeyPress}></input>
                <span onClick={insert}>Search</span>
            </div>
        </div>
    )
}

export default Search;