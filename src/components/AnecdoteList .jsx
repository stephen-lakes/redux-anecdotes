import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import {
  hideNotification,
  showNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

export const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <>
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
      </div>
    </>
  );
};

Anecdote.propTypes = {
  anecdote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((anecdote) =>
      anecdote.content.includes(state.filterTerm)
    )
  );
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            anecdoteService.vote(anecdote.id);
            dispatch(vote(anecdote.id));
            dispatch(
              showNotification({
                message: `you voted '${anecdote.content}'`,
                type: "success",
              })
            );
            setTimeout(() => dispatch(hideNotification()), 5000);
          }}
        />
      ))}
    </>
  );
};

export default AnecdoteList;
