import PopularProjectCard from './PopularProjectCard'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const popularProjectContentStyle = {
  width:'100%',
  display:'flex',
  flexWrap:'wrap',
  gap: '10px',
  alignItems:'center',
 margin:'',

  
  
}

function PopularProjects() {
  return (
    <div style={{width:'100%',marginBottom:'1rem'}}>
      <div className="justify-center md:justify-normal" style={popularProjectContentStyle}>
        <PopularProjectCard/>
        <PopularProjectCard/>
        <PopularProjectCard/>
        <PopularProjectCard/>
      </div>
      <div className='w-1/2 py-2 rounded my-4 flex items-center justify-center text-white font-bold bg-blue-500 mx-auto md:mx-0 '>
        <Link className='' href='#viewMore'>More <FaExternalLinkAlt style={{display:'inline'}}/></Link>
      </div>  
    </div>
  )
}

export default PopularProjects