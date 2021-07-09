import React from 'react'
import style from '../App.module.scss'
import { Link, withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCounterValue } from '../redux/counter/counter.selector'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

type NavProps = {
    counterValue: number
}

function Nav({ counterValue }: NavProps) {
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
            <h3>Logo { counterValue ?? 0 }</h3>
            <ul className={ style.nav_links }>
                <Link className={ style.link }
                      to="/about">
                    <li>About</li>
                </Link>
                <Link className={ style.link }
                      to="/shop">
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

export default withRouter(connect(mapStateToProps)(Nav))
