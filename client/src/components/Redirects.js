import React from 'react';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Redirects = () => {
    return (
        <section className="px-2 pt-12 bg-white md:px-0 tails-selected-element" >
        <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
                <span className="block"><span className="block mt-1 text-red-600 lg:inline lg:mt-0" data-primary="purple-500">Let's goooooo!!!!</span></span>
            </h1>
            <p className="w-full mx-auto text-base text-left text-gray-500  sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                Yo ! Check this out ....
            </p>
            <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <a href="/login" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-red-500 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Login Now</span>
</a>
            </div>
        </div>
        <div className="container items-center max-w-6xl px-5 mx-auto mt-16 text-center">
            <img src="https://imgs.search.brave.com/Q2JAW2NZnxQvpj4bVYRnYl58lZ92_ZbS-sS6xFhnxL4/rs:fit:500:226:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vanVzdG1h/dGhzLmNvLnVrL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L2NlbGVicmF0aW9u/LWdpZi5naWY_Zml0/PTUwMCUyQzIyNiZz/c2w9MQ.gif" alt='img' className="w-full"/>
        </div>
    </section>
    );
}

Redirects.propTypes = propTypes;
Redirects.defaultProps = defaultProps;
// #endregion

export default Redirects;