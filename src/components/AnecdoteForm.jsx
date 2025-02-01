import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  hideNotification,
  showNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    const newAnecdote = await anecdoteService.createNewAnecdote(content);
    dispatch(createAnecdote(newAnecdote));

    dispatch(
      showNotification({
        message: "A new anecdote was created",
        type: "success",
      })
    );

    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
