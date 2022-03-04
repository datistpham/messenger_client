import { v4 as uuidv4 } from 'uuid'
import { useAtTop } from 'react-scroll-to-bottom'
import ButtonLoadMore from './button_LoadMore'
import Framechatmain from "../../frame_chat/utilities/framechatmain"

const LoadMore = (props) => {
    const [atTop]= useAtTop()
    
    return (
        <div className='_rjfio22 _wm3weew'>
            <ButtonLoadMore atTop={atTop}  />
            {
                props.message.map((item,key)=> (
                    <Framechatmain id_collection={(props.id_collection)[key]} theme={props.theme} key={uuidv4()} item={item} different={item.timereport} />
                ))
            }
    
        </div>
    )
}

export default LoadMore
