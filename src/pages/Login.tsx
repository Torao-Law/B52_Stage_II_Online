import React from 'react'
import { IAuth } from '../interface/Auth'

interface handleAuth {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void
  login: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Login(props: handleAuth) {
  return (
    <form 
      className='w-2/5 mt-12 mx-auto border border-black rounded p-12'
      onSubmit={(e) => props.login(e)}
    >
      <div className='mb-2'>
        <label 
          htmlFor='username'
          className='font-semibold mb-1'
        >
          Username
        </label>
        <input 
          type='text' 
          name="username" 
          id='username' 
          className='border border-black rounded w-full p-1'
          placeholder='type your username'
          onChange={props.handle}
        />
      </div>

      <div className='mb-2'>
        <label 
          htmlFor='status'
          className='font-semibold mb-1'
        >
          Password
        </label>
        <input 
          type='text' 
          name="status" 
          id='status' 
          className='border border-black rounded w-full p-1'
          placeholder='type your status'
          onChange={props.handle}
        />
      </div>

      <div>
        <button 
          type='submit'
          className='px-8 py-1 bg-lime-900 text-white rounded mt-8'
        >
          Login
        </button>
      </div>
    </form>
  )
}
