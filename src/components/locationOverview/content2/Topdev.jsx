import styles from './topdev.module.css'
import Devcard from './Devcard'

const topdevStyle={
  width:'100%',
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  alignItems:'center',
  marginTop:'1rem',
  gap: '8px'
}

function Topdev() {
  return (
    <div  style={topdevStyle} className='md:!justify-normal'>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
    </div>
  )
}

export default Topdev