import React from "re
import { FaGithub } from "react-icons/fa";

export default function projectcard(props)
{
console.log(props)
return(
<div>


<div className="grid grid-cols-3 " >
<div className=" h-auto border-violet-700 border-2">
<h1 className="text-3xl text-white">{props.item.name}</h1>
<p className="text-white text-3xl">{props.item.ct}</p>
</div>

</div>
</div>
<div className=" h-96 overflow-hidden font-robotoslab text-center  my-12 hover:scale-105 shadow-lg rounded-lg shadow-violet-900">
<h1 className=" text-3xl text-white">{props.item.name}</h1>
<p className="py-9 text-white text-xl">{props.item.ct}</p>
<button className="text-white text-2xl mb-14 bg-violet-900 hover:bg-violet-800 ...">
Github
</button>
</div>

</div>

)
}
                    



       