import React, {useEffect, useState} from 'react'
import DataService from '../../services/DataService';
import TopicDetailsComponent from '../topic-details/TopicDetailsComponent';
import './ListTopicComponent.css'
// import data from '../../data/topics.json'; // moze i ovako

const ListTopicComponent = () => {

    const [allTopics, setAllTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(undefined);

    const changedSelectedTopic = (topic) =>{
      console.log("CHANGEEEE")
      setSelectedTopic(topic);
    }

    useEffect(() => {  
        getAllTopicsFromJSON();
    }, [])

    const getAllTopicsFromJSON = () =>{
        DataService.loadDataFromJSON().then(response =>{
            setAllTopics(response.topics);
            console.log("RESPONSE DATA " + JSON.stringify(response.topics));
          })
          .catch((error) => {
            console.error("Error getting data", error);
          });
    }  

  return (
    <>
    <div className='main-container'>
      <div className='list-topic-container'>
        <h1 className='topic-list-title'>Topic list</h1>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Topic - attribute</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allTopics.map(
                topic =>
                  // ako stavim viticaste zagrade mora i return !
                  <tr className='table-content-row' key={topic.id}>
                    <td className='td-content' onClick={() => changedSelectedTopic(topic)}>{topic.label}</td>
                    <td>
                      <button className='btn btn-success'>Show full details</button>
                   </td>
                  </tr>                        
              )
            }
          </tbody>
        </table>
      </div>
      <TopicDetailsComponent topic = {selectedTopic}></TopicDetailsComponent>
    </div>
    </>
  )
}

export default ListTopicComponent