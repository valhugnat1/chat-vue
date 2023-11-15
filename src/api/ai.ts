import axios from "axios";

export async function sendPrompt(message: string) {
  try {
    console.log(import.meta.env.VITE_API_URL);
    
    const response = await axios.post(import.meta.env.VITE_API_URL, { query: message }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);
    
    //const response = {"data": {"message":"fake response"}}
    return response.data.answer;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      return "I'm sorry, but I cannot answer that.";
    }
  }
}