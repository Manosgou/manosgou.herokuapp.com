import React from 'react';
import './Style/Workspace.scss'
import { Row } from 'react-bootstrap';


function workspace() {
    return (
        <div className="Workspace">
            <Row id="title-container" className="border-bottom justify-content-center p-5">
                <div className="border-bottom border-top justify-content-center p-3" >
                    <h3>Workspace</h3>
                </div>
            </Row>
            <div className="p-5">
                <div className="list">
                    <ul>Dell Inspiron 3452
                    <li>Intel Core i5 - 4210u 1.7ghz</li>
                        <li>Kingstone Hyperx - 8gb (1600mhz)</li>
                        <li>500gb HDD</li>
                    </ul>
                    <ul>Monitor
                    <li>Dell UltraSharp U2414H</li>
                    </ul>
                    <ul>Keyboard & Mouse
                    <li>Logitech MK220 Combo</li>

                    </ul>
                    <ul>Electronics
                    <li>Arduino UNO Funduino</li>
                        <li>Raspberry Pi 1gb</li>

                    </ul>
                </div>
            </div>
        </div>
    )


}

export default workspace;