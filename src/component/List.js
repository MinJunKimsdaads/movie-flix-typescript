import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useQuery } from "react-query";
import { useEffect} from "react";
import Item from "./Item";
import { fetchList } from "../store/Store";
import PageNation from "./PageNation";
import Loading from "./Loading";
import Loading2 from "./Loading2";
import styles from "../style/List.module.scss";

function List(){
    const {menu} = useParams(); //메뉴
    const dispatch = useDispatch();
    const page = useSelector((state) => state.reducer); //페이지
    const selectedGenre = useSelector((state) => state.reducer2); //선택한 장르
    const keyword = useSelector((state) => state.reducer3); //키워드
    const globalLoading = useSelector((state) => state.reducer4); //로딩

    const limit = 20; //출력할 영화 갯수

    const {status, data} =  useQuery([menu,keyword,selectedGenre], ()=>fetchList(menu,keyword,selectedGenre),{
        staleTime: Infinity,
    });

    useEffect(()=>{
        if(globalLoading === false){
            setTimeout(()=>{
                dispatch({
                    type:'closeLoading',
                });
            },5000)
        }
    },[globalLoading,dispatch]);

    if(globalLoading === false){
        return(
            <Loading></Loading>
        )
    }else{
        if(status === 'success'){
            return(
                <div>
                    <div className={styles.itemBox}>
                        {data.filter((e, index)=> index >= (page - 1)*limit && index <= page*limit -1).map((e)=>{return <Link key={e.id} to={`/viewer/${e.id}`}><Item name={e.title} img={e.poster_path}></Item></Link>})}
                    </div>
                    <PageNation page={page} limit={limit} totalPage={Math.ceil(data.length/limit)}></PageNation>
                </div>
            )
        }else{
            return(
                <div>
                    <Loading2></Loading2>
                </div>
            )
        }
    }
}

export default List;