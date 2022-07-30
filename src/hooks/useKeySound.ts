import { useState } from "react"

export function useKey() {
    const [note, setNote] = useState('')

    function sound(local: string, nt: string) {
        setNote(nt)
        const note = new Audio(local)
        note.volume = 1
        note.play()
    }
    const styleKey = { bg: '#FFF', height: '200px' }

    function modeStyleKey(id: string) {
        let key = document.getElementById(id)
        key!.style.backgroundColor = '#F0F0F0'
        key!.style.height = '195px'
        
        setTimeout(() => {
            key!.style.backgroundColor = '#FFF'
            key!.style.height = '200px'
        }, 300)
    }

    return {
        sound,
        modeStyleKey,
        styleKey,
        note,
    }
}
