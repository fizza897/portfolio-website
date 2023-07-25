import React from 'react'

export default function Contact() {
  return (
    <>
    <div id='contact' className='flex items-center max-w-7xl mx-auto leading-8 mb-10'>
        <div className='text-gray-500 px-10 mt-32 mx-auto'>

        <h1 className='text-center text-4xl text-black'>Contact</h1>
        <p className='text-center text-black my-5'>Get in touch with me</p>
        <form action="https://formspree.io/f/mnqknrbr" method='POST'>
          <div>
            <input type="text" placeholder='Your Name' name='name' className='p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black' required />
          </div>
          <div>
            <input type="text" placeholder='your Emails' name='email' className='p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black' required />
          </div>
          <div className='my-5'>
            <textarea rows={8} placeholder='your messages' name="meraMessage" className='p-2 w-80 bg-transparent border-4 rounded-md focus:outline-none text-black' required></textarea>
          </div>
          <button type='submit' className='mx-auto block px-5 rounded-md bg-gradient-to-b from-gray-300 text-black to-gray-600 '>Submit</button>
        </form>

        </div>
    </div>
    </>
  )
}
