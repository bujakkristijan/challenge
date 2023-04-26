import React, {useEffect, useState} from 'react'
import DataService from '../../services/DataService';
import TopicDetailsComponent from '../topic-details/TopicDetailsComponent';
import './ListTopicComponent.css';
import { Modal, Button } from 'react-bootstrap';
import ModalTopicVolumeByDaysComponent from '../modal-topic-volume-by-days/ModalTopicVolumeByDaysComponent';
// import data from '/topics.json'; // moze i ovako

const ListTopicComponent = () => {

    const [allTopics, setAllTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(undefined);
    const [selectedTopicForModal, setSelectedTopicForModal] = useState(undefined);

    const [showModal, setShowModal] = useState(false);

    const [sortedListTopicDaysByDate, setSortedListTopicDaysByDate] = useState([]);

    useEffect(() => {  
        getAllTopicsFromJSON();
    }, [])

    const getAllTopicsFromJSON = () =>{
        DataService.loadDataFromJSON().then(response =>{
            setAllTopics(response.topics);
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
        return <td style={{color : "rgb(0, 255, 0)", fontSize: fontSizeAfterCheck }} className='td-content' onClick={() => setSelectedTopic(topic)}>{topic.label}</td>
      }
      else if(topic.sentimentScore < 40){
        return <td style={{color : "red", fontSize: fontSizeAfterCheck }} className='td-content' onClick={() => setSelectedTopic(topic)}>{topic.label}</td>
      }
      else{
        return <td style={{color : "grey", fontSize: fontSizeAfterCheck }} className='td-content' onClick={() => setSelectedTopic(topic)}>{topic.label}</td>
      }
    }

    const handleClose= () => {
      setShowModal(false);
    }

    const handleShowModal = (topic) =>{
      //u sustini selectedTopicForModal sada sluzi samo za prikazivanje label vrednosti topic-a kada se otvori modal
      //ne cita se lista (days) iz selectedTopicForModal, vec se salje kao props nova sortirana lista u ModalTopicVolumeByDaysComponent komponenti
      setSelectedTopicForModal(topic);
      //setuje novo stanje (state) sortirane liste po datumu, koja se salje kao props ModalTopicVolumeByDaysComponent komponenti
      //probao sam u let varijabli da cuvam listu i da saljem, ali nije radilo iz nekog razloga (bila je prazna lista i nakon dodeljivanja nove vrednosti), pa koristim useState umesto toga
      setSortedListTopicDaysByDate(sortDate(topic.days));
      setShowModal(true);
    }

    const sortDate = (topicDays) => {
      return topicDays.sort((a, b) => new Date(a.date) - new Date(b.date));
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
                    {
                      checkSentimentScoreAndSetColor(topic)
                    }
                    <td>
                      <button className='btn btn-success' onClick={() => handleShowModal(topic)}>Volume by days</button>
                   </td>
                  </tr>                        
              )
            }
          </tbody>
        </table>
      </div>
      <TopicDetailsComponent topic = {selectedTopic}></TopicDetailsComponent>
    </div>

    {/* prikazivanje volume vrednosti po danima kada se stisne na dugme iz tabele, nakon cega se pojavljuje modal */}

    <Modal size='lg' centered show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
      {/* mora ovako jer selectedTopicForModal bude undefined na pocetku, mada je javljao gresku iako se modal ne prikazuje dok se ne stisne dugme. */}
      {selectedTopicForModal != undefined && <Modal.Title>Volume by day for topic: {selectedTopicForModal.label}</Modal.Title>}
      </Modal.Header>

      <Modal.Body>
          <ModalTopicVolumeByDaysComponent days = {sortedListTopicDaysByDate}/>
      </Modal.Body>

      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ListTopicComponent