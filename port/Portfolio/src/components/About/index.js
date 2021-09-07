import "./style.css"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const About = () => {
    const curDate = new Date();
    var age = curDate.getFullYear() - 2000
    if (curDate.getMonth() < 11 && curDate.getDay() < 13)
        age -= 1
    var str = ""
    var months = (curDate.getFullYear() - 2019) * 12 + curDate.getMonth() - 9
    var years = (months / 12).toFixed(2)
    if (years > 5)
        str = "I studied applied computer since for 5 years at" +
            " Epitech-Berlin. There I graduated my master's degree equivalent."
    else
        str = "I am studying applied computer for " + years + " years" +
            " now at Epitech-Berlin."
    return(
        <div className="about">
            <h1>Bio</h1>
            <table>
                <tr width="100%">
                    <td>
            <p> My name is Karl and I am {age} years old. </p>
            <p> {str} But actually I am already programming for {(parseInt(years) + 6)} years now.</p>
            <p> I started when I was in my 7th class. I had an informatical base course. Here I got fascinated of programming. I started
            programming in my free time.</p>
            <p> Until now I worked par-time for half a year where I taught people who never had to do something with programming how to code different
            easy programs. I taught them how to build games like snake and easy en/-decoding techniques. I also worked for 6 month as an intern
                in a reselling company
            for energy, gas and telecommunication. I created websites there, build automatism to import costumer data and process these and worked
                as bug-fix developer.</p>
            <p>But I do not only code in my free-time. I play competetively Call of Duty Warzone for example.
                If you want to see that, just click the Twitch-Icon on the bottom. Whenever I can I drive to the mountains to go snowboarding.
                In summer I also love to visit the mountains. I love to go climbing and hiking.
                When I have no holidays and cant travel, I love to cook or go for a walk with music.</p>
                <img src="./src/setup.PNG" width="600px" height="400px" ></img>
                    </td>
                    <td>
                        <img src="./src/me.PNG" width="300px" height="300px" ></img>
                        <img src="./src/snow1.PNG" width="300px" height="300px" ></img>
                        <img src="./src/snow2.PNG" width="250px" height="300px" ></img>
                        
                    </td>
                </tr>

            </table>
        </div>
    )
}

export default About