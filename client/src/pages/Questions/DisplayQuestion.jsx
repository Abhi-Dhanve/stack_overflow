import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {

    var questionList = [{
        _id:3,
        upVotes:3,
        downVotes: 2,
        votes:1,
        noOfAnswers :0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript","python"],
        userPosted: "mano",
        userIf : 1,
        askedOn: "jan 1",
        answer: [{
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn:"jan 2",
          userId : 2,
        }]
      }]

  return (
   
         <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>

            <QuestionDetails/>

          <RightSidebar/>

        </div>

    </div>
 
  )
}

export default DisplayQuestion