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
        <section className="w-screen order-4 h-screen lg:order-2" id="contact">
            <div className='lg:grid lg:max-h-screen lg:grid-cols-10 lg:grid-rows-11'>
                <div className='lg:col-start-2 lg:col-end-5 lg:row-start-3 lg:row-end-5 hidden lg:inline'>
                <Player src='https://lottie.host/faece7d1-e010-4d96-aa80-3f7a391b7d29/54Y5ZIdcnz.json' loop autoplay/>
                </div>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm lg:col-start-5 lg:col-end-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">Contact Me!</h2>
                    <p className="mb-8 font-bold text-center text-gray-500 dark:text-gray-400 sm:text-xl">Any questions in mind? Like to share some ideas for web? Feel free to get in touch with me. I will be happy to hear from you!
                    </p>
                    <form onSubmit={onSubmit} className="space-y-3">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-base font-bold text-gray-900 dark:text-gray-300">Name
                                <input type="text" id="name" name="name" className="block p-3 w-full text-base text-gray-900 bg-[#f1f3f6] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light [box-shadow:inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff]" placeholder="Your name" required />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-base font-bold text-gray-900 dark:text-gray-300">Your email
                                <input type="email" id="email" name="email" className="shadow-sm bg-[#f1f3f6] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light [box-shadow:inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff]" placeholder="your@email.com" required />
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-base font-bold text-gray-900 dark:text-gray-400">Your message
                                <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-base text-gray-900 bg-[#f1f3f6] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 [box-shadow:inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff]" placeholder="Leave a message!"></textarea>
                            </label>
                        </div>
                        <button type="submit" className="[box-shadow:-6px_-6px_14px_rgba(255,_255,_255,_.7),_-6px_-6px_10px_rgba(255,_255,_255,_.5),_6px_6px_8px_rgba(255,_255,_255,_.075),_6px_6px_10px_rgba(0,_0,_0,_.15)] hover:[box-shadow:-2px_-2px_6px_rgba(255,_255,_255,_.6),_-2px_-2px_4px_rgba(255,_255,_255,_.4),_2px_2px_2px_rgba(255,_255,_255,_.05),_2px_2px_4px_rgba(0,_0,_0,_.1)] bg-[#f1f3f6] active:[box-shadow:inset_-2px_-2px_6px_rgba(255,_255,_255,_.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_.5),_inset_2px_2px_2px_rgba(255,_255,_255,_.075),_inset_2px_2px_4px_rgba(0,_0,_0,_.15)] p-2 mr-2 mb-2 rounded-lg font-bold">Send message</button>
                    </form>
                </div>
                <div className="lg:py-16 px-4 mx-auto max-w-screen-sm lg:row-start-3 lg:col-start-8">
                    <h2 className='text-xl font-bold'>You can also find me here:</h2>
                    <div className='flex gap-3 lg:flex-col'>
                        <a className='grid place-items-center p-[1em] max-h-20 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='https://github.com/ensklc93' target='_blank'>
                            <svg id="github" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#333333" height="40" width="40" className='[transition:transform_0.5s] '>
                                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                            </svg>
                        </a>
                        <a className='grid place-items-center p-[1em] max-h-20 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='https://www.linkedin.com/in/ensklc' target='_blank'>
                            <svg id="linkedin" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#333333" height="40" width="40" className='[transition:transform_0.5s] '>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a className='grid place-items-center p-[1em] max-h-20 rounded-[10px] [box-shadow:6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] border-[1px] border-solid border-[rgba(0,0,0,0)] cursor-pointer [transition:transform_0.5s] hover:[box-shadow:inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),_inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),_-0.5px_-0.5px_0px_rgba(255,255,255,1),_0.5px_0.5px_0px_rgba(0,0,0,0.15),_0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-[1px] hover:border-solid hover:border-[rgba(0,0,0,0.1)] hover:translate-y-[0.5em] *:hover:scale-[0.9] *:hover:rotate-[360deg] *:hover:fill-[#0092E4]' href='mailto:eneskilic@mail.com' target='_blank'> 
                            <svg id="email" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#333333" height="40" width="40" className="[transition:transform_0.5s]">
                            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
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
