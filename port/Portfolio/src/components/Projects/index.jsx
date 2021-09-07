import "./style.css"

const Projects = () => {
    return (
        <div className="projects">
            <table>
                <tr>
                    <td>
                    <h2>MyHunter aka Duck-Hunt</h2>
                        <video autoPlay muted>
                            <source src="./src/hunter.mp4" type="video/mp4"></source>
                        </video>
                    </td>
                    <td>
                        <p>Hier könnte ihre Werbung stehen</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>MyRunner</h2>            
                        <video autoPlay muted>
                            <source src="./src/runner.mp4" type="video/mp4"></source>
                        </video>
                    </td>
                    <td>
                        <p>Hier auch</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>MyDefender</h2>            
                        <video autoPlay muted>
                            <source src="./src/defender.mp4" type="video/mp4"></source>
                        </video>
                    </td>
                    <td>
                        <p>Folg mir auf twitch</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>MyRPG aka Pokeventure</h2>    
                        <h3>starting with Pokemon theme song and Star Wars animation</h3> 
                        <video autoPlay muted>
                            <source src="./src/star-wars.mp4" type="video/mp4"></source>
                        </video>      
                        <h3>real game</h3> 
                        <iframe muted src="https://drive.google.com/file/d/1QBY_qFB-trqBwkwO-wk7nzz0FSSVpnrM/preview" type="video/mp4">
                        </iframe>
                    </td>
                    <td>
                        <p>Wenn du amazon prime hast kannst du sogar kostenlos einen primesub da lassen</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Own Task-Manager</h2>
                        <h3>with ncurses (terminal only)</h3>            
                        <video  autoPlay muted>
                            <source src="./src/tasks.mp4" type="video/mp4"></source>
                        </video>
                        <h3>graphical</h3>            
                        <video  autoPlay muted>
                            <source src="./src/tasks-gr.mp4" type="video/mp4"></source>
                        </video>
                    </td>
                    <td>
                        <p>Hier steht jetzt meine Werbung</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Arcades</h2>            
                        <video  autoPlay muted>
                            <source src="./src/arcade.mp4" type="video/mp4"></source>
                        </video>
                    </td>
                    <td>
                        <p>leider habe ich das video um 3:24Uhr morgens gelöscht...</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Projects;