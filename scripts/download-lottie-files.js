const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  {
    url: 'https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c4462870ceff8cedd6f7fa_data.json',
    filename: '68c4462870ceff8cedd6f7fa_data.json'
  },
  {
    url: 'https://cdn.prod.website-files.com/68a2151a000cb3b5c6f9da7f/68b20daf7a52aa026bdd184b_Menu%2002.json',
    filename: '68b20daf7a52aa026bdd184b_Menu%2002.json'
  },
  {
    // Performance section Lottie: "Lightning Execution"
    url: 'https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c593f236ebcb5a1135d07b_data.json',
    filename: '68c593f236ebcb5a1135d07b_data.json'
  },
  {
    // Performance section Lottie: "Shortcut Commands"
    url: 'https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c5ba31cc1b4c2b6fe5d61d_Lottie.json',
    filename: '68c5ba31cc1b4c2b6fe5d61d_Lottie.json'
  }
];

const downloadDir = path.join(process.cwd(), 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(downloadDir, filename);
    
    console.log(`Downloading ${filename}...`);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        const redirectUrl = response.headers.location;
        console.log(`Following redirect for ${filename}...`);
        downloadFile(redirectUrl, filename).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${filename}: HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Downloading missing Lottie JSON files...\n');
  
  try {
    await Promise.all(files.map(({ url, filename }) => downloadFile(url, filename)));
    console.log('\n✓ All files downloaded successfully!');
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    process.exit(1);
  }
}

downloadAll();

