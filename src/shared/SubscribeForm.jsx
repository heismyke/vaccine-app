import React from 'react'

function SubscribeForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-[100%]  py-5 relative">
      <input
        name="Subscribe"
        placeholder="Email address"
        className="pl-6 text-[16px] h-[52px] w-[100%]  "
      />
      <button
        type="submit"
        className="bg-[#1E4EA2] h-[43px] w-[35%]  right-[10px] top-6 absolute  z-10  "
      >
        Subscribe
      </button>
    </form>
  )
}

export default SubscribeForm
