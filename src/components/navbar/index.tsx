import { ChangeEvent, FC,useEffect } from "react";
import { useTranslation } from "react-i18next";


//Здесь необходимо подключить навбар из bootstrapp
//В навбаре сслыки обернуть в link
const NavBar:FC= ():JSX.Element=> {
    const {t, i18n} = useTranslation()
    const onChangeLanguage = (e:ChangeEvent<HTMLElement>) =>{
        //@ts-ignore
i18n.changeLanguage(e.target.value)

    }


    useEffect(()=>{
for(let index = 0; index < document.getElementsByClassName('lang').length; index++){
const element = document.getElementsByClassName('lang')[index];
//@ts-ignore
if(element.value === i18n.language){
    element.setAttribute("selected", "true")
}
}
    }, [])
return <div>
    <ul>
        <li>{t("menu.home")}</li>
        <li>{t('menu.contact')}</li>
        <li></li>
    </ul>
    <select name="" id="" onChange={onChangeLanguage}>

        <option value="en" className="lang">EN</option>
        <option value="fr" className="lang">FR</option>
        <option value=""></option>
    </select>
</div>
}

export default NavBar;