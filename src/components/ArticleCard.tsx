import React from 'react'
import IArticle from '../interface/Artilcle'

export default function ArticleCard(props: IArticle) {  
  return (
    <div className='w-28 h-40 bg-red-600'>
      <img src={props.image} alt='img-article' />

      <p>{props.title}</p>
      <p>Author: {props.author}</p>
    </div>
  )
}
