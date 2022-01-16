import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { changeLocalLang } from '../../store/actions/session';
import NativeSelect from '@material-ui/core/NativeSelect';
import estonia from '../../static/images/estonia.png';
import uk from '../../static/images/united-kingdom.png';
import Avatar from '@material-ui/core/Avatar';
import theme from '../../config/theme';



const LanguageSwitch: React.FC = (props) => {
    const [language, setLanguage] = useState('');
    const { t, i18n } = useTranslation();

    function onSelected(e: any) {
        i18n.changeLanguage(e.target.value)
        setLanguage(i18n.language)
        changeLocalLang(e.target.value)
        console.log('language muutus selected', e.target.value)
    }

    useEffect(() => {
        setLanguage(i18n.language)
        console.log('language muutus', i18n.language, language)
    })

    function getLanguageIcon() {
        if (language === 'est') {
            return estonia
        } else if (language === 'en') {
            return uk
        } 
    }


    return(
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: "20px"}}>
            <img width={21} height={21} src={getLanguageIcon()} style={{paddingRight:"8px"}}/>
            <NativeSelect value={language} onChange={onSelected} style={{border: '0px', userSelect: 'none', fontWeight: 'bold'}} disableUnderline >
                <option value="est">EST</option>
                <option value="en">ENG</option>
            </NativeSelect>
        </div>
    )
}

// Dropdown onSelect={(lang: string) => onSelected(lang)} items={items} defaultValue="ENG"/>
export default LanguageSwitch;

//<select id="languages" onChange={(e) => onSelected(e)} style={{border:'none', outline:'none', fontSize: "17px", fontWeight: "bold"}} value={language}>
               // <option value="est">EST</option>
               // <option value="en">ENG</option>
            //</select>
