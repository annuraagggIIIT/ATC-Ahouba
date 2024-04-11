// const axios = require('axios');
// const fs = require('fs');

// const pinataApiKey = '';
// const pinataSecretApiKey = '';

// const uploadFileToPinata = async () => {
//     const endpoint = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
//     const apiKey = '4542a334efcd4a098092';
//     const apiSecret ='609001da95ce17c1b7f70347c0b1c2d1ab805a5a1e6b59c83e92585991889ced' ;

//     const fileContent = fs.readFileSync('../metadata/metadata.json');
//     const formData = new FormData();
//     formData.append('file', fileContent);
// cd 
//     try {
//         const response = await axios.post(endpoint, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'pinata_api_key': apiKey,
//                 'pinata_secret_api_key': apiSecret,
//             },
//         });

//         console.log('File uploaded successfully to IPFS. IPFS Hash:', response.data.IpfsHash);
//     } catch (error) {
//         console.error('Failed to upload file to IPFS:', error.response.data);
//     }
// };

// uploadFileToPinata();


// // const pinataSDK = require('@pinata/sdk');
// // const fs = require('fs');

// // const pinata = pinataSDK('4542a334efcd4a098092', '609001da95ce17c1b7f70347c0b1c2d1ab805a5a1e6b59c83e92585991889ced');

// // async function uploadMetadataToIPFS() {
// //     try {
// //         const metadataPath = './metadata/metadata.json';
// //         const metadata = JSON.parse(fs.readFileSync(metadataPath));

// //         const options = {
// //             pinataMetadata: {
// //                 name: 'AirspaceNFT'
// //             }
// //         };

// //         const result = await pinata.pinJSONToIPFS(metadata, options);
// //         console.log('Metadata uploaded to IPFS:');
// //         console.log(result);
// //     } catch (error) {
// //         console.error('Error uploading metadata to IPFS:', error);
// //     }
// // }

// // uploadMetadataToIPFS();