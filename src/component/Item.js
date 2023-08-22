import styles from "../style/Item.module.scss";
function Item({name,img}){
    return (
        <div className={styles.item}>
            <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={`${name}_img`}></img>
        </div>
    )
}

export default Item;