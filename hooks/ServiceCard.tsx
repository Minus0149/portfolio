import { FunctionComponent} from 'react'
import { IService } from './type'
import { IconContext } from "react-icons";

const ServiceCard:FunctionComponent<{services:IService}> = ({services:{Icon,About,Title}}) => {
  
  const createMarkup = () =>{
    return{
      __html:About
    }
  }
  
  return (
    <div className="flex items-center p-2 space-x-5">
      <IconContext.Provider value={{ size: "50px" }}>
        <Icon className='text-blue-500'/>
      </IconContext.Provider>
      <div>
        <h4 className='text-lg font-bold'>{Title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />        
      </div>
    </div>
  )
}

export default ServiceCard