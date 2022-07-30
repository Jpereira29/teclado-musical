import { useEffect } from "react";
import { useKey } from "../../hooks/useKeySound";
import { Display } from "../Display";
import * as C from "./styles";

export function Keyboard() {

    const key = useKey()

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return ()=> {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })

    const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.code) {
            case 'KeyQ':
                key.sound('sounds/c3.mp3', 'DO')
                key.modeStyleKey('q')
                break
            case 'KeyW':
                key.sound('sounds/d3.mp3', 'RE')
                key.modeStyleKey('w')
                break
            case 'KeyE':
                key.sound('sounds/e3.mp3', 'MI')
                key.modeStyleKey('e')
                break
            case 'KeyR':
                key.sound('sounds/f3.mp3', 'FA')
                key.modeStyleKey('r')
                break
            case 'KeyT':
                key.sound('sounds/g3.mp3', 'SOL')
                key.modeStyleKey('t')
                break
            case 'KeyY':
                key.sound('sounds/a4.mp3', 'LA')
                key.modeStyleKey('y')
                break
            case 'KeyU':
                key.sound('sounds/b4.mp3', 'SI')
                key.modeStyleKey('u')
                break
            case 'KeyI':
                key.sound('sounds/c4.mp3', 'DO')
                key.modeStyleKey('i')
                break
            case 'KeyO':
                key.sound('sounds/d4.mp3', 'RE')
                key.modeStyleKey('o')
                break
            case 'KeyP':
                key.sound('sounds/e4.mp3', 'MI')
                key.modeStyleKey('p')
                break
        }
    }


    return (
        <C.Container>
            <C.Content>
            <Display note={key.note} />
                <div>
                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/c3.mp3', 'DO')
                }
                    id='q'
                />

                <C.Chromatic
                />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/d3.mp3', 'RE')}
                    id='w'
                />

                <C.Chromatic />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/e3.mp3', 'MI')}
                    id='e'
                />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/f3.mp3', 'FA')}
                    id='r'
                />

                <C.Chromatic />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/g3.mp3', 'SOL')}
                    id='t'
                />

                <C.Chromatic />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/a4.mp3', 'LA')}
                    id='y'
                />

                <C.Chromatic />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/b4.mp3', 'SI')}
                    id='u'
                />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/c4.mp3', 'DO')}
                    id='i'
                />

                <C.Chromatic />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/d4.mp3', 'RE')}
                    id='o'
                />

                <C.Chromatic />

                <C.Key
                    styleKey={key.styleKey}
                    onClick={() => key.sound('sounds/e4.mp3', 'MI')}
                    id='p'
                />
                </div>
            </C.Content>
        </C.Container>
    )
}
