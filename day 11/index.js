const url = "https://restcountries.com/v3.1/all";
const element = document.getElementById("container");
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const value = data[i];

            const html =`
            <div class='card'>
            <img src="${value.flags.png}"></img>
                <div class="text">
                    <h3>
                    ${value?.name?.common}
                    </h3>
                    <h5>
                    Region: ${value?.region}
                    </h5>
                    <h5>
                    Population: ${value?.population}
                    </h5>
                    <h5>
                    Capital: ${value?.capital}
                    </h5>
                </div>
            </div>
            `;
            element.innerHTML += html;
        }
    }catch (error) {
        console.log("-------error------:", error.message);
    }
}