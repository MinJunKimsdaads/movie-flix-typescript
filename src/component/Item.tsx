import styles from "../style/Item.module.scss";
interface Props {
    name:string;
    img:string;
}
function Item({name,img}:Props){
    return (
        <div className={styles.item}>
            <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={`${name}_img`}></img>
        </div>
    )
}

export default Item;