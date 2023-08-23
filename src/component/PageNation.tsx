import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { moveToFirst, moveToEnd, moveToNext, moveToPrev, moveToPage } from "../store/Store";
import styles from "../style/PageNation.module.scss";

function PageNation({page, limit, totalPage}){
    const block = 5;
    const [blockArr, setBlockArr] = useState([Math.floor((page-1)/block)*block+1,Math.floor((page-1)/block)*block+2,Math.floor((page-1)/block)*block+3,Math.floor((page-1)/block)*block+4,Math.floor((page-1)/block)*block+5]);
    const dispatch = useDispatch();

    const first = () => {
        dispatch(moveToFirst());
    }
    
    const end = () => {
        dispatch(moveToEnd(totalPage));
    }

    const next = () => {
        dispatch(moveToNext());
    }

    const prev = () => {
        dispatch(moveToPrev());
    }

    const num = (e:any) => {
        dispatch(moveToPage(Number(e.target.id)));
    }

    useEffect(()=>{
        setBlockArr([Math.floor((page-1)/block)*block+1,Math.floor((page-1)/block)*block+2,Math.floor((page-1)/block)*block+3,Math.floor((page-1)/block)*block+4,Math.floor((page-1)/block)*block+5]);
    },[page])
    
    return (
        <div className={styles.pageBox}>
            {page > 1 ? <span className={styles.pageBtn} onClick={first}>처음</span>:null}
            {page > 1 ? <span className={styles.pageBtn} onClick={prev}>이전</span>:null}
            {blockArr.filter((e)=>totalPage >= e).map((e)=>{return <span className={page!==e? styles.pageBtn:styles.selectedPageNumber} key={e} id={e} onClick={()=>{page!==e? num:null}}>{e}</span>})}
            {totalPage > page ? <span className={styles.pageBtn} onClick={next}>다음</span>:null}
            {totalPage > page ? <span className={styles.pageBtn} onClick={end}>끝</span>:null}
        </div>
    )
}

export default PageNation;