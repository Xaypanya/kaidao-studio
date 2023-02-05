import React from 'react'
import { GoMarkGithub } from 'react-icons/go'

function GithubButton() {
  return (
    <div className='flex items-center mr-5'>
        <a href="https://github.com/Xaypanya/kaidao-studio" target="_blank" rel="noopener noreferrer">
            <GoMarkGithub className='text-xl transition-all duration-200 ease-in hover:opacity-80 hover:scale-110 active:opacity-50'/>
        </a>
    </div>
  )
}

export default GithubButton