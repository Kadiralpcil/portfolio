import React from 'react'

interface TitleProps {
    name: string
}
const PageTitle = ({ name }: TitleProps) => {
    return (
        <h1 className='font-bold text-gray-900 md:text-3xl lg:text-4xl '>{name}</h1>
    )
}

export { PageTitle }
