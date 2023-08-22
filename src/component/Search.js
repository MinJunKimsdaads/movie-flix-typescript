import { useDispatch } from "react-redux";
import { useState } from "react";
import { insertKeyword } from "../store/Store";
import styles from "../style/Search.module.scss";

function Search(){
    const dispatch = useDispatch();
    const [keyword, setinKeyword] = useState('');
    const onChange = (e) => {
        setinKeyword(e.target.value);
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            insert();
        }
    }

    const insert = () => {
        dispatch(insertKeyword(keyword));
    }

    return (
        <div className={styles.searchBox}>
            <input value={keyword} onChange={onChange} onKeyPress={onKeyPress}></input>
            <span onClick={insert}>검색</span>
        </div>
    )
}

export default Search;