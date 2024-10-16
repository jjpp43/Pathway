const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

/**
 * Gets cell values from a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The sheet range.
 * @return {obj} spreadsheet information
 */

async function getValues(spreadsheetId, range) {
    const auth = new GoogleAuth({
        credentials: {
            type:process.env.TYPE,
            project_id:process.env.PROJECT_ID,
            private_key_id:process.env.PRIVATE_KEY_ID,
            private_key:process.env.PRIVATE_KEY,
            client_email:process.env.CLIENT_EMAIL,
            client_id:process.env.CLIENT_ID,
            auth_uri:process.env.AUTH_URI,
            token_uri:process.env.TOKEN_URI,
            auth_provider_x509_cert_url:process.env.AUTH_PROVIDER_X509_CERT_URL,
            universe_domain:process.env.UNIVERSE_DOMAIN,
            
        },
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    const service = google.sheets({ version: 'v4', auth });
    try {
        const result = await service.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const data = result.data.values;
        const headers = data[0]; // Get column names from the first row
        const rows = data.slice(1); // Remaining arrays as values

        console.log("Fetched result from google sheets")

        const formattedRows = rows.map(row => {
            let obj = {};
            headers.forEach((header, index) => {
                obj[header] = row[index];
            });
            
            return obj;
        });

        const sortedRows = formattedRows.sort((a,b) => {
            return a.institution.localeCompare(b.institution);
        })
        return sortedRows
        
        
    } catch (err) {
        console.error('Error fetching data:', err);
        throw err;
    }
}

module.exports = { getValues }; // Only export the getValues function
