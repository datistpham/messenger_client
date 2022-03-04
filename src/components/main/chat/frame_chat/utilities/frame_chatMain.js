import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import ThemeMessage from './theme_message';
import { useSelector } from 'react-redux';
import LoadMore from '../a/LoadMore';
// const Framechatmain = lazy(() => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(import("../../frame_chat/utilities/framechatmain")), 300);
//     });
//   });
const T = (props) => {
    const themeBg= useSelector(state=> state.themMessageBgIm_reducer)
    // const [keyLastArray, setKeyLastArray]= useState(()=> [])
    // const LoadMoreData= ()=> {
    //     const starCountRef = query(ref(db, `all_message/message/${idm}/`), orderByChild("/timestamp"),limitToLast(10))
    //             onValue(starCountRef, async (snapshot) => {
    //             const data = await snapshot.val()
    //             try {
    //                 console.log(data)
    //             }catch(err) {
    //                 console.log(err)
    //             }
    //         })
    // }
    return (
        <div className='_w40dswds _94w0ssg _34wurjis' style={{height: props.height}}>
        <style dangerouslySetInnerHTML={{
            __html: [
                '._w40dswds::after {',
                `background-image: ${ themeBg==="" ? props.themeIg : themeBg};`,
                `content: '' !important;`,
                'position: absolute !important;',
                'left: 0 !important;',
                'top: 0 !important;',
                'height: 100% !important;',
                'width: 100% !important;',
                'mix-blend-mode: screen !important;',
                'pointer-events: none !important;',
                '}',
                '._w40dswds {',
                'background-color: blue !important',                
                '}',
                ].join('\n')
            }}>
            </style>
            <ThemeMessage className="_3409ier _93jweis" className1="_043eirj _409idsa" />
            <ScrollToBottom initialScrollBehavior="auto" className="_hudsn_dsiodn"> 
                {
                    <>
                        <LoadMore id_collection={props.id_collection} theme={props.theme} message={props.message} />
                    </>
                }
                {/* {message.map((item,key)=> (
                    <>
                        {console.log(item)}
                        <Framechatmain theme={props.theme} key={uuidv4()} item={message[key]} different={item[0]} />
                    </>
                ))} */}
            </ScrollToBottom>
        </div>
    )
}

export default React.memo(T)
