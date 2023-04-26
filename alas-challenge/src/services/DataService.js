class DataService{

        async loadDataFromJSON(){
            try {
                // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const response = await fetch('/topics.json'); //OVO JE MORALO U PUBLIC!!!!
                const data = await response.json();
                return data;
              } catch (error) {
                console.error(error);
              }
        }
    }


export default new DataService();