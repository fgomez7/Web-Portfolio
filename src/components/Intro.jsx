import React from 'react';

function Intro(){
    return (
        <div className = "flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className = "text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Francisco Gomez</h1>
            <p className = "text-base md:text-xl mb-3 font-medium">Software Engineer</p>
            <p className = "text-sm max-w-xl mb-6 font-bold">
                Hello world! My name is Francisco Gomez, a recent graduate with a Bachelor's in Computer Science from The University of California at Santa Cruz. My journey in the world of technology began with a passion for Software Engineering, Machine Learning, and a knack for problem solving. <br /> 
                Although my professional journey is just beginning, I am enthusiastic about applying my skills and knowledge to tackle complex challenges in the field of software engineering. Feel free to check out my 
                
                {' '}
                <a
                    href = "https://github.com/fgomez7"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoreation-red-600"
                    rel="noreferrer noopener"
                >
                    github repository
                </a>{' '}

                housing my skillsets, my projects, and my eager to continue learning and growing as a developer.
            </p>
        </div>
    )
}

export default Intro;