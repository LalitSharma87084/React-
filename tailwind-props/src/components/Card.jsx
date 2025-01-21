import React from 'react'

function Card({username,btnText = "visit me"}) {
  return (
    <div>
         <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/30301026/pexels-photo-30301026/free-photo-of-illuminated-tokyo-tower-amidst-tokyo-skyline-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <h1>{username}</h1>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">  
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
      <button>{btnText}</button>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card