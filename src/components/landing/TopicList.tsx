import React from 'react';

import TopicWithIcon from './TopicWithIcon';

import { useTranslation } from 'react-i18next';

const TopicList = () => {

    const { t } = useTranslation('landing')

    type Side = "left" | "right"

    interface Topic {
        id: number,
        title: string,
        description: string,
        side: Side,
    }

    const topics: Topic[] = [
        {   
            id: 1,
            title: t("topic1.title"),
            description: t("topic1.description"),
            side: "left"
        },
        {
            id: 2,
            title: t("topic2.title"),
            description: t("topic2.description"),
            side: "right"
        },
        {
            id: 3,
            title: t("topic3.title"),
            description: t("topic3.description"),
            side: "left"
        }
    ]

    const topicItems = topics.map((topic) => 
        <div key={topic.id}><TopicWithIcon id={topic.id} title={topic.title} description={topic.description} side={topic.side}/></div>
    )

    return (    
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        {topicItems}
    </div>
    )
}

export default TopicList; 