import React, { useState } from 'react'
import { Counter } from './counter/counter.component'
import style from './Home.module.scss'
import clsx from 'clsx'
import ClickAwayListener from 'react-click-away-listener'

enum Test {
    ONE = 'one_1',
    TWO = 'two_1',
    THREE = 'three_1'
}

export default function Home() {
    const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false)

    const handleClickAway = () => {
        console.log('Maybe close the popup')
        setIsDropdownOpened(false)
    }

    return (
        <div className={ style.container }>
            <h1>Home</h1>
            <ClickAwayListener onClickAway={ handleClickAway }>
                <div className={ style.dropdown_container }>
                    <button
                        onClick={ () => {
                            setIsDropdownOpened(prevState => !prevState)
                        } }
                    >
                        Toggle dropdown
                    </button>

                    <div className={ clsx(style.dropdown, isDropdownOpened && style.opened) }>
                        <ul>
                            {
                                Object.values(Test)
                                    .map((item: any, index: number) => (
                                        <li key={ index }>
                                            <h2>{ item }</h2>
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </ClickAwayListener>
            <Counter />
        </div>
    )
}
