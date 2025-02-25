const fetch = require("node-fetch");

/**
 * Fetches a Wikipedia summary for a given topic.
 * @param {string} topic - The topic to search for.
 * @param {string} [lang="en"] - The language code (default: "en").
 * @returns {Promise<Object>} - Wikipedia summary including title, description, extract, and image.
 */
async function getSummary(topic, lang = "en") {
  try {
    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`;
    const response = await fetch(url);

    const data = await response.json();

    if (data?.title === "Not found.") {
      throw new Error("Topic not found on Wikipedia. Please try another search term.");
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return {
      title: data.title,
      description: data.description || "No description available.",
      extract: data.extract || "No summary available.",
      pageUrl: data.content_urls?.desktop?.page || `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(topic)}`,
      imageUrl: data.originalimage?.source || null
    };
  } catch (error) {
    throw new Error(`Error fetching Wikipedia summary: ${error.message}`);
  }
}

module.exports = { getSummary };
