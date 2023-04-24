import React, {useEffect, useState} from 'react'
import DataService from '../../services/DataService';
// import data from '../../data/topics.json'; // moze i ovako

const ListTopicComponent = () => {

    const [allTopics, setAllTopics] = useState([]);

    useEffect(() => {  
        getAllTopicsFromJSON();
    }, [])

    const getAllTopicsFromJSON = () =>{
        DataService.loadDataFromJSON().then(response =>{
            setAllTopics(response.topics);
            console.log("RESPONSE DATA " + JSON.stringify(response.topics));
          }).catch((error) => {
            console.error("Error getting data", error);
          });
    }  

  return (
    <div>ListTopicComponent</div>
  )
}

export default ListTopicComponent