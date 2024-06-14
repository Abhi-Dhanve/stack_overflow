import React from 'react'
import { useLocation, useNavigate} from "react-router-dom"

import "./HomeMainbar.css"

import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';

const HomeMainbar = () => {

  const location = useLocation();
  const user = 1;
  const history = useNavigate();

  const questionList = useSelector(state => state.questionsReducer);
  console.log(questionList)

  // var questionList = [{
  //   _id:3,
  //   upvotes:3,
  //   votes:1,
  //   noOfAnswers :0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript","python"],
  //   userPosted: "mano",
  //   userIf : 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "kumar",
  //     answeredOn:"jan 2",
  //     userId : 2,
  //   }]
  // }]


    const checkAuth = ()=>{
      if(user === null){
        alert("Login or Sign up to ask a question ")
        history("/Auth")
      }
      else{
        history("/AskQuestion")
      }
    }


  return (
    <div className='main-bar'>

      <div className='main-bar-header'>
        {
          location.pathname === "/" ? <h1>Top question</h1> : <h1>All questions</h1>
        }
        <button to={`/AskQuestion`} onClick={checkAuth} className='ask-btn '>
          Ask Question
        </button>
      </div>
      <div>
          {questionList.data === null ? 
         <h1>Loading...</h1> :
         <>
            <p> { questionList.data.length } questions</p>
            <QuestionList questionList={questionList.data} />

         </>  
        }
      </div>
    </div>
  )
}

export default HomeMainbar