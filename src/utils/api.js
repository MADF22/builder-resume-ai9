const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const BASE_URL = "https://api.openai.com/v1/chat/completions";

export const getDeepseekResponse = async (prompt) => {
  if (!API_KEY) {
    console.error("API Key is missing! Check your .env file or Vercel environment variables.");
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
        model: "gpt-3.5-turbo",
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
