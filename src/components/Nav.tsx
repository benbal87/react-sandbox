import React from 'react'
import style from '../App.module.scss'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCounterValue } from '../redux/counter/counter.selector'
import { connect, ConnectedProps } from 'react-redux'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import IconMagnifier from '../images/icon-magnifier.svg'

export interface NavProps extends NavPropsFromRedux {
    test2?: string
    test: string
}

function Nav({ counterValue, test }: NavProps) {
    const makeToaster = () => {
        toast.info('🦄 Wow so easy!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    }
    return (
        <nav>
            <h3>Logo { counterValue ?? 0 } { test }</h3>
            <ul className={ style.nav_links }>
                <IconMagnifier style={ {
                    fill: 'red',
                    width: 20,
                    height: 20
                } } />
                <FontAwesomeIcon icon={ faFileAlt } size={ '2x' } />
                <Link
                    className={ style.link }
                    to="/"
                >
                    <li>Home</li>
                </Link>
                <Link
                    className={ style.link }
                    to="/about"
                >
                    <li>About</li>
                </Link>
                <Link
                    className={ style.link }
                    to="/shop"
                >
                    <li>Shop</li>
                </Link>
                <li>
                    <button onClick={ makeToaster }>toast test</button>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = createStructuredSelector({
    counterValue: selectCounterValue
})

const connector = connect(mapStateToProps)

export type NavPropsFromRedux = ConnectedProps<typeof connector>

export default connector(Nav)
