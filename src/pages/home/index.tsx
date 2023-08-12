import { FC } from "react"
import { useTranslation } from "react-i18next"


const Home:FC= ():JSX.Element => {
    const {t} =useTranslation()
    return <div>
        <h1>{t('parag.home')}</h1>
    </div>
}

export default Home;