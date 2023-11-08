import axios from "axios";
export const call = async (id: string | undefined) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=b266afba`
    );
    return data;
  };