import React from 'react'
import styles from './buttonItems.module.css'
import cx from 'classnames'

function ButtonItems(props) {
    const {buttonName} =props
    return (
        <div>
            <button className={cx(styles.btn)}>{buttonName}</button>
        </div>
    )
}

export default ButtonItems
