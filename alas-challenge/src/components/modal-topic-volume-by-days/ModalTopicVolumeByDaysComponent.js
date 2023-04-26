import React from 'react';
import Moment from 'moment';

const ModalTopicVolumeByDaysComponent = (props) => {

    const selectedTopicByDaysList = props.days;

    return (
        <div className='container'>     
                <table id="table" className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedTopicByDaysList.map(
                            selectedTopicByDay => <tr key={selectedTopicByDay.date}>
                                <td>{Moment(selectedTopicByDay.date).format("YYYY-MM-DD")}</td>
                                <td>{selectedTopicByDay.volume}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    )
}

export default ModalTopicVolumeByDaysComponent