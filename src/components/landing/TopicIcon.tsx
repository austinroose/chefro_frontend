import React from 'react';
import {ReactComponent as Svg1} from '../icons/Chefro_find_chef.svg';
import {ReactComponent as Svg2} from '../icons/customize_menu.svg';
import {ReactComponent as Svg3} from '../icons/enjoy_meal.svg';

import { useSelector, RootStateOrAny } from 'react-redux';

interface Icon {
    id: number,
}



const TopicIcon: React.FC<Icon> = (props) => {

    const screenType = useSelector((state: RootStateOrAny) => state.browser.screenType)

    function setIcon(id: number) { // fix this function later to set icon dynamically
        if (id === 1) {
            return <Svg1/>
        } else if (id === 2) {
            return <Svg2/>
        } else {
            return <Svg3/>
        }
    }

    const icon = setIcon(props.id)

    return (
        <div style={{width: `${screenType === "desktop" ? "40%" : "100%"}`}}>
                {icon}
        </div>
    )
}

export default TopicIcon;