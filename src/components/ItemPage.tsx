import React from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'

export interface ItemProps {
    itemId: string;
}

export default function ItemPage(props: RouteComponentProps<ItemProps>) {
    // also can get params with 'useParams'
    const { itemId: id } = useParams<{ itemId: string }>()
    console.log('id', id)

    return (
        <h1>
            { props.match.params?.itemId }
        </h1>
    )
}
