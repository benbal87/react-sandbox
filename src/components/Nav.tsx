import React from 'react'
import style from '../App.module.scss'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCounterValue } from '../redux/counter/counter.selector'
import { connect } from 'react-redux'

type NavProps = {
    counterValue: number
}

function Nav({ counterValue }: NavProps) {
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
            </ul>
        </nav>
    )
}

const mapStateToProps = createStructuredSelector({
    counterValue: selectCounterValue
})

export default connect(mapStateToProps)(Nav)
