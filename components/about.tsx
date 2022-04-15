import React from "react";
import Member from "./member";

const About: React.FC = () => {
    return ( 
        <section className="flex flex-col py-20 bg-white text-3xl md:text-4xl w-full">
            <div className="container mx-auto px-11">
                <p className="w-full leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong>We'll help you shorten complex links, efficiently.</strong> With Plasm, you won't have to rely on CTRL+C / CTRL+V for links anymore. All you need is half a brain.
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2><strong>Our Team</strong></h2>
                <div className="mt-2"><em>literally just one person</em></div>
                <div className="mt-10">
                    <Member id="me" name="You Know Who" socialId="@dontclickme" link="https://youtu.be/3MU_2N1TZM4" />
                </div>
            </div>
        </section>
    )
}

export default About