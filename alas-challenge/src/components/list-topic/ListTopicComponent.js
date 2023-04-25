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

    /*
    range size = maximum - minimum = 165 - 3 = 162
    number of ranges = 6
    range size per step = range size / number of ranges = 162 / 6 = 27

    range 1: 3 - 30
    range 2: 31 - 58
    range 3: 59 - 86
    range 4: 87 - 114
    range 5: 115 - 142
    range 6: 143 - 165

    */
   const checkFontSize = (topic) =>{
      if(topic.volume <= 30){
        return "15px";
      }
      if(topic.volume > 30 && topic.volume<=58){
        return "20px";
      }
      if(topic.volume > 58 && topic.volume<=86){
        return "25px";
      }
      if(topic.volume > 86 && topic.volume<=114){
        return "30px";
      }
      if(topic.volume > 114 && topic.volume<=142){
        return "35px";
      }
      if(topic.volume > 142 && topic.volume<=165){
        return "40px";
      }
   }

    const checkSentimentScoreAndSetColor = (topic) =>{
      let fontSizeAfterCheck = checkFontSize(topic);
      if(topic.sentimentScore > 60){
        return <td style={{color : "rgb(0, 255, 0)", fontSize: fontSizeAfterCheck }} className='td-content' onClick={() => changedSelectedTopic(topic)}>{topic.label}</td>
      }
      else if(topic.sentimentScore < 40){
        return <td style={{color : "red", fontSize: fontSizeAfterCheck }} className='td-content' onClick={() => changedSelectedTopic(topic)}>{topic.label}</td>
      }
      else{
        return <td style={{color : "grey", fontSize: fontSizeAfterCheck }} className='td-content' onClick={() => changedSelectedTopic(topic)}>{topic.label}</td>
      }
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
                    {/* <td className='td-content' onClick={() => changedSelectedTopic(topic)}>{topic.label}</td> */}
                    {
                      checkSentimentScoreAndSetColor(topic)
                    }
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