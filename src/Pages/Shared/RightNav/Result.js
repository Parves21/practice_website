// @flow strict

import * as React from 'react';
import '../RightNav/Result.css'

function Result() {
    return (
        <div>
            <div>
                <h3 style={{color: 'antiquewhite'}}>This is A <span style={{ color: '#10f4f8' }}>3D</span> Calculator 
                    <span 
                        style={{ color: "#10f4f8" }}
                    >!!</span></h3>
            </div>
            <div class="calculator">
                <div class="buttons">
                    <h2 id='value'>""</h2>    
                    <span id="clear">Clear</span>
                    <span>/</span>
                    <span>*</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>-</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span id="plus">+</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>0</span>
                    <span>00</span>
                    <span>.</span>
                    <span id="equal">=</span>
                </div>
            </div>


            <script>

                {/* let buttons = document.querySelector('.buttons');
                let btn = buttons.querySelectorAll('span');
                let value = document.getElementById('value');

                for (let i = 0; i < btn.length; i++) {
                    btn[i].addEventListener('click', function () {
                        if (this.innerHTML == "=") {
                            value.innerHTML = eval(value.innerHTML);
                        } else {
                            if (this.innerHTML == "Clear") {
                                value.innerHTML = "";
                            } else {
                                value.innerHTML += this.innerHTML;
                            }
                        };
                    });
                }; */}
            </script>
        </div>
    );
};

export default Result;