/* eslint-disable react/prop-types */

export default function Modal(props) {
    return (
        <>
            {props.showMoreContent ? (
                <>
                    <div
                        className="justify-center items-center flex flex-wrap overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                    >
                        <div className="relative w-full my-6 mx-auto max-w-6xl z-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 block p-2.5  [box-shadow:inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff]">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#f1f3f6] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h2 className="text-3xl text-center font-semibold">
                                        {props.title}
                                    </h2>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black font-black opacity-5 float-right text-3xl leading-none outline-none focus:outline-none"
                                        onClick={() => props.handleClick(props.id)}
                                    >
                                        X
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-auto">
                                    <p className="my-4 text-blueGray-500 leading-relaxed">
                                        {props.moreContent.content}
                                    </p>
                                    <h3 className="text-2xl font-semibold">Features</h3>
                                    <ul className="mb-5 mt-1">
                                        {props.moreContent.features.map(feature =>
                                            <div key={props.id} className="flex items-center">
                                                <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                <li className="leading-relaxed">{feature}</li>
                                            </div>
                                        )}
                                    </ul>
                                    <h3 className="text-2xl font-semibold">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-x-2 mt-1">
                                    {props.moreContent.technologiesUsed.map(feature =>
                                        <span key={props.id} className="[box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)] active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] p-2 mr-2 mb-2 rounded-lg">
                                            {feature}
                                        </span>
                                    )}
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end  border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="background-transparent font-black uppercase px-6 py-2 text-sm outline-none focus:outline-none [box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)] active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] p-2 mr-2 my-2 rounded-lg"
                                        type="button"
                                        onClick={() => props.handleClick(props.id)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}
