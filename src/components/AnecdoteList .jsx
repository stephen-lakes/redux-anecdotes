import PropTypes from "prop-types";

export const Anecdote = ({ anecdote, vote }) => {
  return (
    <>
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    </>
  );
};

Anecdote.propTypes = {
  anecdote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  vote: PropTypes.func.isRequired,
};

const AnecdoteList = () => {
  return <div>AnecdoteList </div>;
};

export default AnecdoteList;
