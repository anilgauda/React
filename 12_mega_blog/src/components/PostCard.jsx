import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to ={$id}>
        <div className='w-full bg-gray-100 rounder-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.previewFile(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='font-bold text-xl'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard