import React from 'react'
import fakeData from '../../../../mockdata/mockData';
import team1Data from '../../../../mockdata/team1';
import team2Data from '../../../../mockdata/team2';
import team3Data from '../../../../mockdata/team3';
import nurseriesData from '../../../../mockdata/nurseriesData';
import shopData from '../../../../mockdata/shopData';
import outDoorData from '../../../../mockdata/outData';
import drainageData from '../../../../mockdata/drainageEvent';
import dustData from '../../../../mockdata/dustData';

import plantEventData from '../../../../mockdata/planEvent';

function AddIndoor() {
    const addHandle =() =>{fetch('https://secret-shore-03641.herokuapp.com/load',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(fakeData)

    })
}
const outdoorHandle =() =>{fetch('https://secret-shore-03641.herokuapp.com/outdoorLoad',{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(outDoorData)

})
}
const nurseriesHandle =() =>{fetch('https://secret-shore-03641.herokuapp.com/nurseriesLoad',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(nurseriesData)

    })
}
const shopHandle =() =>{fetch('https://secret-shore-03641.herokuapp.com/shopLoad',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(shopData)

    })
}
const team1Handle =() =>{fetch('https://secret-shore-03641.herokuapp.com/team1Load',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(team1Data)

    })
}
const team2Handle =() =>{fetch('https://secret-shore-03641.herokuapp.com/team2Load',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(team2Data)

    })
}
const team3Handle =() =>{fetch('https://secret-shore-03641.herokuapp.com/team3Load',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(team3Data)

    })
}
const drainageHandle =() =>{fetch('https://secret-shore-03641.herokuapp.com/drainage',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(drainageData)

    })
}
const dustHandle =() =>{fetch('https://secret-shore-03641.herokuapp.com/dust',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(dustData)

    })
}
const treeEventHandle =() =>{fetch('https://secret-shore-03641.herokuapp.com/treeLoad',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(plantEventData)

    })
}
    return (
        <div>
            <h5> Indoor Data</h5>
            <button onClick= {addHandle}>add</button>
            <h5> Outdoor Data</h5>
            <button onClick= {outdoorHandle}>add</button>
            <h5> Plant Event Data</h5>
            <button onClick= {treeEventHandle}>add</button>
            <h5> Team 1Data</h5>
            <button onClick= {team1Handle}>add</button>
            <h5> Team 2 Data</h5>
            <button onClick= {team2Handle}>add</button>
            <h5> Team 3 Data</h5>
            <button onClick= {team3Handle}>add</button>
            <h5> Nurseries  Data</h5>
            <button onClick= {nurseriesHandle}>add</button>
            <h5> Online Shop Data</h5>
            <button onClick= {shopHandle}>add</button>
            <h5> Drainage Event Data</h5>
            <button onClick= {drainageHandle}>add</button>
            <h5> Dust Cleaning Event Data</h5>
            <button onClick= {dustHandle}>add</button>


        </div>
    );
};

export default AddIndoor;
