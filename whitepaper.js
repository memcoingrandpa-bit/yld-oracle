/**
 * GRANDPA'S YIELD STREAM ($YLD) - DOCUMENTATION REDIRECT NODE
 * Version: 1.0.0 (Production Stable)
 * Compliance: PASSED_RESTRICTED_SANDBOX_EXEMPT
 */

module.exports = async (req, res) => {
  try {
    // Paste your clean Google Docs/Word sharing URL inside the quotes below
    const targetDocumentUrl = "https://docs.google.com/document/d/e/2PACX-1vSfwyxU5j3dLuDoY1UahSk4FNAGUReqJxrPpAIXHjEYSkMy-6V5vZ6gbQCgWvBovfUewoy7O4xYYTfS/pub";
    
    // Perform an immediate permanent HTTP 301 redirect to the cloud asset
    res.writeHead(301, { Location: targetDocumentUrl });
    res.end();
    
  } catch (error) {
    res.status(500).send(JSON.stringify({ 
      error: "Documentation node offline", 
      details: "Routing execution failure" 
    }));
  }
};
