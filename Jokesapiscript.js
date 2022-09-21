
        const joke = document.getElementById('joke');
        const jokebtn = document.getElementById('jokebtn');

        const generateJokes = () => {

            const setHeader ={
                headers : {
                    Accept : "application/json"
                }
            }

            fetch('https://icanhazdadjoke.com/', setHeader)
            .then((res) => res.json()
            )
            .then( (data) => {
                joke.innerHTML = data.joke;
            })
            .catch((error)=>{
                console.log(error);
            })
        }

        jokebtn.addEventListener('click', generateJokes)
        generateJokes();
