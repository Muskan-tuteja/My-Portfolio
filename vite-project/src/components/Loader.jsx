import { motion } from "framer-motion";

export default function Loader(){

return(

<div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]">

<motion.h1

animate={{

opacity:[0,1,0],

scale:[0.8,1.2,.9]

}}

transition={{

repeat:Infinity,

duration:2

}}

className="text-5xl font-bold text-cyan-400"

>

Muskan.

</motion.h1>

</div>

)

}