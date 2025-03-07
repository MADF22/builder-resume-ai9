const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const BASE_URL = "https://api.openai.com/v1/chat/completions";

export const getDeepseekResponse = async (prompt) => {
  if (!API_KEY) {
    console.error("API Key is missing! Check your .env file.");
    return null;
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
<<<<<<< HEAD
        model: "gpt-4o",
=======
        model: "gpt-4o-mini",
>>>>>>> af17b10317bc03463fa9d23c32ff723108c860a8
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
