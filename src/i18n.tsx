import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
   en: { 
    translation:{
      "parag":{
        "home":"Welcome to home page",
        "contact": "Welcome to contact page"
    },
    "menu": {
        "home" : "Home",
        "contact" : "Contact"
    }}},
    
    fr:{
      translation:{
        "parag":{
            "home":"Bieneveuar dans la page dacccea",
            "contact":"Bienevuneit dans la page de contact"
        },
        "menu":{
            "home":"Acceuil",
            "contact":"Contact"
        }
    }}}

  
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
  
export default i18n;