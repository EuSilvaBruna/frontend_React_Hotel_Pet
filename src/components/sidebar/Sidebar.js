import React from 'react'
import './sidebar.css'
import {Pets, Person, MenuBook} from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                  
                    <ul className="sideBarLista">
                        <li className="sideBarListaItens">
                            <Pets className="sideBarIcons" />
                            Pets
                        </li>

                        <li className="sideBarListaItens">
                            <Person className="sideBarIcons" />
                            Usuários
                        </li>

                        <li className="sideBarListaItens">
                            <MenuBook className="sideBarIcons" />
                            Reservas
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}





