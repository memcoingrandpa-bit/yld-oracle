module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  try {
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxdwVuQwW2lLwr3Ar1xZ0lmrLAIO2MLjpyAt7omKnJWvFGJ1vobOwGQwx8hEaqDeNs/exec";
    const response = await fetch(googleScriptUrl);
    const data = await response.json();
    
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send(JSON.stringify({ error: "Oracle offline", details: error.message }));
  }
};
