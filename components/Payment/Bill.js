import React from "react";
import axios from "axios";

export default function bill(){

    return(

        <div>

            <h2>       Your ticket price  </h2>

            <h3>600</h3>

            <form action="/payment" >
                <button >Pay here </button>
            </form>



        </div>

    )
}