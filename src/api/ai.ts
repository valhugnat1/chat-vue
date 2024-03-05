import axios from 'axios'
// import { log } from "console";

export async function sendPrompt(message: string) {
  try {
    console.log(import.meta.env.VITE_API_URL)

    const response = await axios.post(
      import.meta.env.VITE_API_URL,
      { query: message },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    console.log(response.data.outputs.results)

    return response.data.outputs.results
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      return "I'm sorry, but I cannot answer that."
    } else if (error.code == 'ERR_NETWORK') {
      return "I'm sorry, but the server seems unavailable, please try again later."
    }
  }
}
