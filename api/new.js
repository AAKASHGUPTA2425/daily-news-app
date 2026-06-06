export default async function handler(req, res) {
  const category = req.query.category || "general";

  const API_KEY = process.env.GNEWS_API_KEY;

  let url;

  if (category === "national") {
    url = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=${API_KEY}`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

