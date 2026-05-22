module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  try {
    const googleScriptUrl = "https://google.com";
    const response = await fetch(googleScriptUrl);
    const data = await response.json();
    
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send(JSON.stringify({ error: "Oracle offline", details: error.message }));
  }
};
