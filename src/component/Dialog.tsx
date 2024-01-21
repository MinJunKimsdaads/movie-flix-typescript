import { useState, useContext, createContext} from "react";
import '../style/dialog.css';

/////////////////////////////////////////////////////////////////////
//사용법
//
/////////////////////////////////////////////////////////////////////
interface State {
    dialogOption:DefaultState;
    createDialogOption:(dialogOption:any)=>void|null;
}

interface DialogBtn {
    btn1:{name:string, action:()=>any}|null,
    btn2:{name:string, action:()=>any}|null,
}

interface DialogStyles {
    dialogShadow:string|null,
    dialogColor:string|null,
    dialogWhith:string|null,
    dialogHeight:string|null,
    dialogRadius:string|null,
    dialogTitleFont:string|null,
    dialogTitleColor:string|null,
    dialogDesFont:string|null,
}

interface DefaultState {
    title:string|null;
    des:string|null;
    styles:DialogStyles;
    btn:DialogBtn;
}

const defaults = {
    title:'',
    des:'',
    styles:{
        dialogShadow:'',
        dialogColor:'',
        dialogWhith:'',
        dialogHeight:'',
        dialogRadius:'',
        dialogTitleFont:'',
        dialogTitleColor:'',
        dialogDesFont:'',
    },
    btn:{
        btn1:{
            name:'',
            action:function(){}
        },
        btn2:{
            name:'',
            action:function(){}
        },
    }
}

export const DialogContext = createContext<State>({
    dialogOption:defaults,
    createDialogOption:()=>{},
});

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {

    const [dialogOption, setDialogOption] = useState<DefaultState>(defaults);

    const createDialogOption = (defaults:DefaultState) => {
        setDialogOption(defaults);
    }
    
    return (
        <DialogContext.Provider value={{dialogOption, createDialogOption}}>
            {children}
        </DialogContext.Provider>
    );
}

export function Dialog(){
    const dialog = useContext(DialogContext);
    const value = dialog.dialogOption;

    const [touch, setTouch] =  useState<boolean>(false);

    const touchFn = (e: React.MouseEvent) => {
        const target = e.target as HTMLInputElement;
        if(target.className === 'dialogWrap'){
            setTouch(true);
            setTimeout(()=>{
                setTouch(false);
            },500);
        }
    }

    const style = {
        dialogWrap:{
            position: 'fixed' as 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '100000',
            fontFamily: 'inherit',
            overflow: 'hidden',
            perspective: '400px',
            backgroundColor: value.styles ? value.styles.dialogShadow ? value.styles.dialogShadow : 'rgba(68,68,68,0.3)':'rgba(68,68,68,0.3)', //state dialogShadow   
        },
        dialogBox:{
            position:'fixed' as 'fixed',
            backgroundColor: value.styles ? value.styles.dialogColor ? value.styles.dialogColor : 'white':'white', //state dialogColor
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            top: '50%',
            left: '50%',
            transform:'translate(-50%, -50%)',
            width: value.styles ? value.styles.dialogWhith ? value.styles.dialogWhith : '400px':'400px', //state dialogWhith
            height: value.styles ? value.styles.dialogHeight ? value.styles.dialogHeight : '150px':'150px',//state dialogHeight
            borderRadius: value.styles ? value.styles.dialogRadius ? value.styles.dialogRadius : '5px':'5px', //state dialogRadius
            padding:'15px',
            zIndex: '200000',
        },
        dialogTitleBox:{
            width:'100%',
            fontSize: value.styles ? value.styles.dialogTitleFont ? value.styles.dialogTitleFont : '22px':'22px', //state dialogTitleFont
            color: value.styles ? value.styles.dialogTitleColor ? value.styles.dialogTitleColor : 'black':'black', //state dialogTitleColor
            fontWeight:'bold',
        },
        dialogDesBox:{
            marginTop:'10px',
            marginBottom:'20px',
            fontSize: value.styles ? value.styles.dialogDesFont ? value.styles.dialogDesFont : '18px':'18px', //state dialogDesFont
        },
        dialogBtnBox:{
            btnBox:{
                display:'flex',
                justifyContent:'flex-end',
            },
            btn:{
                color:'black',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: '#ecf0f1',
                padding: '6px 12px',
                borderRadius: '4px',
                margin:'5px',
                cursor:'pointer',
            },
        }
    }

    const resetDefaults = {
        title:'',
        des:'',
        styles:{
            dialogShadow:'',
            dialogColor:'',
            dialogWhith:'',
            dialogHeight:'',
            dialogRadius:'',
            dialogTitleFont:'',
            dialogTitleColor:'',
            dialogDesFont:'',
        },
        btn:{
            btn1:{
                name:'',
                action:()=>{}
            },
            btn2:{
                name:'',
                action:()=>{}
            },
        }
    }

    const resetAlert=()=>{
        dialog.createDialogOption(resetDefaults);
    }

    const btn1 = value.btn ? value.btn.btn1 ? value.btn.btn1 : {name:'확인',action:resetAlert} : {name:'확인',action:resetAlert};
    const btn2 = value.btn ? value.btn.btn2 ? value.btn.btn2 : {name:'확인',action:resetAlert} : {name:'확인',action:resetAlert};

    if(value.title || value.des){
        return (
            <div className='dialogWrap' style={style.dialogWrap} onClick={touchFn}>
               <div className={touch ? 'active-box':'inactive-box'} style={style.dialogBox}>
                    <div style={style.dialogTitleBox}>{value.title}</div>
                    <div style={style.dialogDesBox}>{value.des}</div>
                    <div style={style.dialogBtnBox.btnBox}>
                        <span style={style.dialogBtnBox.btn} onClick={()=>{btn1.action();resetAlert();}}>{btn1.name}</span>
                        {(value.btn && value.btn.btn2) ? <span style={style.dialogBtnBox.btn} onClick={()=>{btn2.action();resetAlert();}}>{btn2.name}</span>:null}
                    </div>
               </div>
            </div>
        )
    }else{
        return null;
    }
}

