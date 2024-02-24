import React from 'react'

function Card({name,btnText="default value"}) { //props it behave like an object so pass prop in the parameter or the object itself as it is done 
    // both on the works . If we pass props in parameter the to use the value(name) we have to write props.name
    // or else use the object directLY AS DONE

    // console.log("props",props);

  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{name}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {btnText} →
      </button>
    </div>
  </div>
  )
}

export default Card