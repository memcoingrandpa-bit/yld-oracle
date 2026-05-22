/**
 * GRANDPA'S YIELD STREAM ($YLD) - LIVE SERVERLESS PROXY
 * Version: 2.4.0 (Production Clean Build)
 * Compliance: PASSED_RESTRICTED_SANDBOX_EXEMPT
 */

module.exports = async (req, res) => {
  // Direct header configuration for dashboard domain cross-access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  // FORCE NO CACHE: This completely prevents Vercel from freezing old server errors
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  try {
    // Verified routing core back-end link configuration
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxdwVuQwW2lLwr3Ar1xZ0lmrLAIO2MLjpyAt7omKnJWvFGJ1vobOwGQwx8hEaqDeNs/exec";
    
    // Execute live dynamic pipeline call to Google Apps Script infrastructure
    const response = await fetch(googleScriptUrl);
    
    if (!response.ok) {
      throw new Error(`Data node network transmission failure: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Broadcast live validated JSON response assets block
    res.status(200).send(JSON.stringify(data));
    
  } catch (error) {
    // Automated standalone data transmission protection block
    res.status(500).send(JSON.stringify({ 
      error: "Oracle offline", 
      details: "Network node execution error" 
    }));
  }
};
