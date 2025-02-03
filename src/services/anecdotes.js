import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNewAnecdote = async (content) => {
  const payload = { content, votes: 0 };
  const response = await axios.post(baseUrl, payload);
  return response.data;
};

const vote = async (id) => {
  const anecdote = (await axios.get(`${baseUrl}/${id}`)).data;
  const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote);
  return response.data;
};

export default { getAll, createNewAnecdote, vote };
