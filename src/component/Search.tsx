import { useDispatch } from "react-redux";
import { useState } from "react";
import { insertKeyword } from "../store/Store";
import styles from "../style/Search.module.scss";

import {DialogContext} from "./Dialog";
import {useContext} from "react";

function Search(){
    const dialog = useContext(DialogContext);

    const object ={
        title: "testTitle",
        des: "testDes",
        // styles: {
        //     dialogShadow:'',
        //     dialogColor:'',
        //     dialogWhith:'',
        //     dialogHeight:'',
        //     dialogRadius:'',
        //     dialogTitleFont:'',
        //     dialogTitleColor:'',
        //     dialogDesFont:'',
        // },
        // btn:{
        //     btn1:{
        //         name:'테스트',
        //         action:testFn
        //     },
        //     btn2:{
        //         name:'테스트2',
        //         action:testFn
        //     },
        // }
    }
    
    
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
        <div className={styles.searchBox}>
            <input value={keyword} onChange={onChange} onKeyPress={onKeyPress}></input>
            <span onClick={()=>{dialog.createDialogOption(object)}}>검색</span>
        </div>
    )
}

export default Search;