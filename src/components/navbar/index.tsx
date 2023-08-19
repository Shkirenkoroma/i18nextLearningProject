import { ChangeEvent, FC,useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

const NavBar:FC= ():JSX.Element=> {
    const {t, i18n} = useTranslation()
    
    const onChangeLanguage = (e:ChangeEvent<HTMLSelectElement>) =>{
      console.log('value', e.target.value)
    i18n.changeLanguage(e.target.value)
    }

    useEffect(()=>{
      for(let index = 0; index < document.getElementsByClassName('lang').length; index++){
        const element: any= document.getElementsByClassName('lang')[index];
          if(element.value === i18n.language){
            element.setAttribute("selected", "true")
}
}
    }, [])

return <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid">
             <a className="navbar-brand" href="#">i18n</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{t("menu.home")}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">{t("menu.contact")}</Link>
        </li>
      </ul>
    </div>
    <div className="d-flex">
    <select className="form-select" aria-label="Default select example" onChange={onChangeLanguage}>
     <option value="en" className="lang">EN</option>
     <option value="fr" className="lang">FR</option>
    </select>
    </div>
  </div>
</nav>
</div>
}

export default NavBar;