import React from 'react'
import moment from 'moment';

import { Link, useParams } from 'react-router-dom'
import Avatar from "../../components/Avatar/Avatar";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnswer } from '../../actions/question';
const DisplayAnswer = ({question , handleShare}) => {


  const dispatch = useDispatch()
 const { id } = useParams();
  const User = useSelector((state) => state.currentUserReducer);
  const handleDelete = (answerId , noOfAnswers) => {
    dispatch(deleteAnswer(id,answerId, noOfAnswers - 1))
  }

  return (
    <div>
        {
            question.answer.map((ans)=>(
                <div className="display-ans" key={ans._id}>
                    <p> {ans.answerBody} </p>
                    <div className="question-actions-user">
                        <div>
                            <button onClick={handleShare} type='button'>Share</button>



                            {
                          User?.result?._id === ans?.userId  && (
                            <button type="button" onClick={()=> handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                          )
                        }



                        </div>
                        <div>
                            <p> answer { moment(ans.answeredOn).fromNow() } </p>
                            <Link
                            to={`/Users/${ans.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="green"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {ans.userAnswered.charAt(0).toUpperCase()}{" "}
                            </Avatar>
                            <div>{ans.userAnswered}</div>
                          </Link>
                        </div>
                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer