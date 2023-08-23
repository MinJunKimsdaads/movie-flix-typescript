import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovie, selectGenre } from "../store/Store";
import Loading2 from "./Loading2";
import styles from "../style/Viewer.module.scss";

function Viewer(){
    const {id} = useParams() as {id:any};
    const {status, data} = useQuery([id],()=>fetchMovie(id),{
        staleTime: Infinity,
    })

    const dispatch = useDispatch();

    const setrResetGenre = (e:any) => {
        dispatch({
            type:'resetGenre',
        });
        dispatch(selectGenre(e.target.id));
    }

    if(status === 'success' && data){
        return(
            <div className={styles.appMountPoint}>
                <div>
                    <div className={styles.nmtitleWrapper}>
                        <section className={styles.nmtitleSection}>
                            <div className={styles.heroContainer}>
                                <div className={styles.infoContainer}>
                                    <div className={styles.detailsContainer}>
                                        <div className={styles.titleInfo}>
                                            <h1 className={styles.titleTitle}>{data.title}</h1>
                                            <div className={styles.titleInfoMetadataWrapper}>
                                                <span className={styles.titleInfoMetadataItem}>{data.release}</span>
                                                <span className={styles.infoSpacer}> | </span>
                                                <span className={styles.titleInfoMetadataItem}>
                                                    <span className={styles.duration}>
                                                        <span className={styles.testDurStr}>{`${(data.runningTime-data.runningTime%60)/60}시간 ${data.runningTime%60}분`}</span>
                                                    </span>
                                                </span>
                                                <span className={styles.infoSpacer}> | </span>
                                                {data.genres.map((e:any)=>{return(<Link onClick={setrResetGenre} to={`../`} className={styles.titleInfoMetadataItem2} key={e.id}><span id={e.id}>{e.name}</span></Link>)})}
                                            </div>
                                            <div className={styles.titleInfoSynopsisTalent}>
                                                <div className={styles.titleInfoSynopsis}>{data.overview}</div>
                                                <div className={styles.titleInfoTalent}>
                                                    <div className={styles.titleDataInfoItem}>
                                                        <span className={styles.titleDataInfoItemLabel}>주연:</span>
                                                        <span className={styles.titleDataInfoItemList}>{`${data.cast[0].name}, ${data.cast[1].name}, ${data.cast[2].name}`}</span>
                                                    </div>
                                                    <div className={styles.titleDataInfoItem}>
                                                        <span className={styles.titleDataInfoItemLabel}>크리에이터:</span>
                                                        <span className={styles.titleDataInfoItemList}>{`${data.crew[0].name}, ${data.crew[1].name}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.heroImageContainer}>
                                    <img className={styles.heroImage} src={`https://image.tmdb.org/t/p/w500/${data.image}`} alt={`$(data.title)img`}></img>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
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

export default Viewer;