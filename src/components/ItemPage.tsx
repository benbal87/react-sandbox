import React from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { getCounterValue } from '../redux/counter/counter.selector'

export interface ItemProps {
    itemId: string;
}

export default function ItemPage(props: RouteComponentProps<ItemProps>) {
    // also can get params with 'useParams'
    const { itemId: id } = useParams<{ itemId: string }>()
    console.log('id', id)

    const logCounterValue = () => {
        console.log(getCounterValue())
    }

    return (
        <div>
            <h1>
                { props.match.params?.itemId }
            </h1>
            <button onClick={logCounterValue}>LOG COUNTER VALUE</button>
        </div>
    )
}
