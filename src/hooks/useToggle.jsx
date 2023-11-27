import { useState } from 'react'

export const useToggle = (initial = false) => {
    const [ bool, setBool ] = useState(initial)
    
    const toggle = () => {
        setBool(bool => !bool)
    }

    const set = (val) => {
        setBool(val)
    }

    return [ bool, toggle, set ]
}