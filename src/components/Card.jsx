/* eslint-disable react/prop-types */

export default function Card(props) {

    return (
        <div className='h-[98%] max-h-fit mx-10 flex flex-col rounded-[20px] [box-shadow:-5px_-5px_9px_rgba(255,255,255,0.45),_5px_5px_9px_rgba(94,104,121,0.3)]'>
                <img src={props.img} alt="card-image" className="rounded-lg cursor-pointer h-full min-h-10" onClick={() => props.handleClick(props.id)}/>
            <div className='flex flex-col px-4 h-full'>
                <div className='flex-col h-full' >
                    <h6 className='text-center text-lg font-bold my-2'>
                        {props.title}
                    </h6>
                    <p dangerouslySetInnerHTML={{ __html: props.content }} className="~text-sm/base">
                    </p>
                </div>
                <div className='mt-2 font-semibold'>
                    <button className="~text-sm/base [box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)] active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] p-2 mr-2 mb-2 rounded-lg" type="button" 
                    onClick={() => props.handleClick(props.id)}>
                        Read more
                    </button>
                    <a href={props.live} target="_blank" style={{ display: !props.live ? 'none' : 'initial' }}>
                        <button className=" ~text-sm/base [box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)]  active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] p-2 mr-2 mb-2 rounded-lg" type="button"> Live Demo</button>
                    </a>
                    <a href={props.github} target="_blank" >
                        <button className=" ~text-sm/base [box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)] active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] p-2 mr-2 mb-2 rounded-lg" type="button">
                            GitHub Repository
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}