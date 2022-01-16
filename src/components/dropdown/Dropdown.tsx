import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
const enhanceWithClickOutside = require('react-click-outside');

interface Item {
    id: number;
    value: string,
    text: string
}

interface Dropdown {
    items: Item[];
    defaultValue: string;
    onSelect: Function;
}

const Dropdown: React.FC<Dropdown> = (props) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [items, setItems] = useState<Item[]>([])
    const [selectedItem, setSelectedItem] = useState('siin')


    useEffect(() => {
        setItems(props.items)
        setSelectedItem(props.defaultValue)
    }, [props])

    function itemSelected(item: Item) {
        if (selectedItem !== item.value) {
            setSelectedItem(item.value)
            setShowDropdown(!showDropdown)
            props.onSelect(item.value)
            
        } else {
            setShowDropdown(!showDropdown)
        }
    }

    function clickDropdown() {
        setShowDropdown(!showDropdown)
    }

    return (
        <div>{!showDropdown && (
            <p >
                <button onClick={() => clickDropdown()}>{selectedItem}</button></p>
            )}
            {showDropdown && (
                <ul>
                {items.map(item => {
                    <li key={item.id} onClick={() => itemSelected(item)} style={{backgroundColor: item.value === selectedItem? 'blue' : 'none' }}>{item.text}</li>
                })}  
                </ul>    
            )}
        </div>

    )
}


export default enhanceWithClickOutside(Dropdown);