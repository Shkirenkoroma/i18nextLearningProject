import { FC } from "react";
import {useTranslation} from "react-i18next"


const Contact: FC= ():JSX.Element => {
const {t} = useTranslation()

    return <div className="alert alert-success" role="alert">
            <h1>{t("parag.contact")}</h1> </div>
    
}

export default Contact;