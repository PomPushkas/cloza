import React, { useRef, useState, useEffect } from 'react'
import Line from '../line/Line'
import s from './CollapsableItem.module.scss'

type ICollapsableItem = {
    title: string,
    className?: string,
    children: JSX.Element | JSX.Element[],
    isClosed?: boolean
}

export default function CollapsableItem({ title, children, className, isClosed }: ICollapsableItem) {
    const div = useRef(null)
    const plus = useRef(null)
    const [scroll, setScroll] = useState(null)
    const [toggleItem, setToggleItem] = useState(isClosed)

    useEffect(() => {
        setScroll(div.current.scrollHeight)
    }, [toggleItem])

    const hide = {
        maxHeight: '0',
        overflow: 'hidden',
        opacity: '0',
    } as React.CSSProperties

    const open = {
        maxHeight: `${scroll}px`,
        opacity: '1',
        marginTop: '24px'
    } as React.CSSProperties

    return (
        <div className={s.collaps__collapsable}>
            <button
                className={s.collaps__btn}
                onClick={() => {
                    setToggleItem(!toggleItem)
                }}>
                <h3>{title}</h3>
                <div ref={plus} className={toggleItem ? s.collaps__plus : `${s.collaps__plus} ${s.active}`}></div>
            </button>
            <div
                ref={div}
                style={toggleItem ? hide : open}
                className={`${s.collaps__content} ${className}`}>
                {children}
            </div>
            <Line style={{ marginTop: '24px' }} />
        </div>
    )
}