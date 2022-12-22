var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};




fetch("https://sheets.googleapis.com/v4/spreadsheets/10phLI6g008TvzOA6ffC106kNoY9WG9mppd1mvgZxf7o/values/支出?key=AIzaSyAb_svZAx2M8uHzTZgF0k4rrXQVxmWzFR0", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.values);
        for (let i = 0; i < result.values.length; i++) {
            let ulElm = document.createElement('ul');

            for (let j = 6; j < 9; j++) {

                if (result.values[i][7] == "光熱費") {
                    console.log(result.values[i][j]);
                    let liElm = document.createElement('li');
                    liElm.innerText = result.values[i][j];
                    ulElm.appendChild(liElm);
                    document.body.appendChild(ulElm);

                } else {

                }
            }
        }
        console.log(result.values[1][10])

        // document.write(result.values[1][10]);


    }


    )
    .catch(error => console.log('error', error));