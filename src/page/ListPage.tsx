import { useParams } from "react-router-dom";
import Nav from "../component/Nav";
import Search from "../component/Search";
import Result from "../component/Result";
import List from "../component/List";
import styles from "../style/Template.module.scss";

function ListPage(){
    const {menu} = useParams() as {menu:any};   //as 문법

    return(
        <div className={styles.templateBox}>
            <div className={styles.navBox}>
                <Nav></Nav>
            </div>
            <div className={styles.mainBox}>
                <div className={styles.searchBox}>
                    <Search></Search>
                </div>
                <div className={styles.itemBox}>
                    <Result></Result>
                    <List menu={menu}></List>
                </div>
            </div>
        </div>
    )
}

export default ListPage;