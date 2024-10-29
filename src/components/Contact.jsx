import Swal from 'sweetalert2'
import { Player } from '@lottiefiles/react-lottie-player';



const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "d209e48e-fbd5-4085-8dd6-bf11cb159ecb");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "You have successfully sent the message!",
                icon: "success"
            });
            event.target.reset();
        }
    };


    return (
        <section className="w-screen order-4 h-svh lg:order-2" id="contact">
            <div className='lg:grid lg:max-h-dvh lg:grid-cols-10 lg:grid-rows-11 '>
                <div className='lg:col-start-2 lg:col-end-5 lg:row-start-3 lg:row-end-5 hidden lg:inline'>
                    <Player src='https://lottie.host/faece7d1-e010-4d96-aa80-3f7a391b7d29/54Y5ZIdcnz.json' loop autoplay />
                </div>
                <div className="mx-4 lg:col-start-5 lg:col-end-8 ~mt-4/6">
                    <h2 className="mb-4 ~text-3xl/5xl font-black tracking-tight text-center">Contact Me!</h2>
                    <p className="~mb-2/8 font-bold text-center ~text-sm/xl">Any questions in mind? Like to share some ideas for web? Feel free to get in touch with me. I will be happy to hear from you!
                    </p>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-base font-bold ">Name
                                <input type="text" id="name" name="name" className="~p-1/4 w-full text-base text-gray-900 bg-[#f1f3f6] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 [box-shadow:inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff]" placeholder="Your name" required />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-base font-bold ">Your email
                                <input type="email" id="email" name="email" className="shadow-sm bg-[#f1f3f6] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ~p-1/4 [box-shadow:inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff]" placeholder="your@email.com" required />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-base font-bold ">Your message
                                <textarea id="message" name="message" className="~p-1/4 ~h-16/40 w-full text-base text-gray-900 bg-[#f1f3f6] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 [box-shadow:inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff]" placeholder="Leave a message!"></textarea>
                            </label>
                        </div>
                        <button type="submit" className="[box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)] bg-[#f1f3f6] active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] p-2 mr-2 mb-2 rounded-lg font-bold">Send message</button>
                    </form>
                </div>
                <div className="px-4 mx-auto max-w-screen-sm lg:row-start-2 lg:col-start-8">
                    <h2 className='~text-sm/xl font-bold ~mb-2/6'>You can also find me here:</h2>
                    <div className='flex gap-3 lg:flex-col'>
                        <a className='grid w-fit h-fit place-items-center ~p-1/4 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='https://github.com/ensklc93' target='_blank'>
                            <svg id="github" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#333333" className='[transition:transform_0.5s] ~w-8/12'>
                               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"></path>
                            </svg>
                        </a>
                        <a className='grid w-fit h-fit place-items-center ~p-1/4 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='https://www.linkedin.com/in/ensklc' target='_blank'>
                            <svg id="linkedin" viewBox="0 0 24 24" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#333333" className='[transition:transform_0.5s] ~w-8/12'>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a className='grid w-fit h-fit place-items-center ~p-1/4 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='https://x.com/EnesKilic_93' target='_blank'>
                            <svg id="twitter" viewBox="0 0 24 24" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" fill="#333333" className='[transition:transform_0.5s] ~w-8/12 '>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                            </svg>
                        </a>
                        <a className='grid w-fit h-fit place-items-center ~p-1/4 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='https://medium.com/@eneskilic_68976' target='_blank'>
                            <svg id="medium" viewBox="0 0 24 24" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" fill="#333333" className='[transition:transform_0.5s] ~w-8/12 '>
                                <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z" />
                            </svg>
                        </a>
                        <a className='grid w-fit h-fit place-items-center text-[0.5em] xl:text-[0.75em] font-black ~p-1/4 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='mailto:eneskilic@mail.com' target='_blank'>
                            <svg id="email" viewBox="0 0 24 24" data-name="Layer 5" xmlns="http://www.w3.org/2000/svg" fill="#333333" className='[transition:transform_0.5s] ~w-8/12 '>
                                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                            </svg>
                            eneskilic@mail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;
