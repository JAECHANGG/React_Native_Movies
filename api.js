import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { dbService } from "./firebase";

// fetch한 이후의 과정들은 useQuery가 처리해주기 때문에 async await가 필요없다.
const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "cc5e4d904a5162de40a358db06521e41";

export const getNowPlayings = () =>
  fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

export const getTopRated = () =>
  fetch(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`).then(
    (res) => res.json()
  );

export const getUpcomings = ({ pageParam = 1 }) =>
  fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`
  ).then((res) => res.json());

// &append_to_response=videos = 추가 응답 : getdetail + getvideos
export const getDetail = ({ queryKey }) => {
  const [_, movieId] = queryKey;
  return fetch(
    `${BASE_URL}/${movieId}?api_key=${API_KEY}&append_to_response=videos`
  ).then((res) => res.json());
};

export const deleteReview = async (reviewId) => {
  await deleteDoc(doc(dbService, "reviews", reviewId));
};

export const editReview = async ({ reviewId, editingObj }) => {
  await updateDoc(doc(dbService, "reviews", reviewId), editingObj);
};
