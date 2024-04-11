const fs = require('fs');
const path = require('path');

const metadataFolderPath = path.join(__dirname, '..', 'metadata');
const metadataFilePath = path.join(metadataFolderPath, 'metadata.json');

const metadata = {
    "name": "Tulihal Airport",
    "description": "This ERC-721 standard denotes the airspace above Tulihal airport in Manipur, India. The airport is located at 24.751043 latitude and 93.891134 longitude. The airport has a single runway that is 9,000 feet long and 150 feet wide. The airport is situated at an elevation of 2,536 feet above sea level. The airport is used for both military and civilian purposes. The airport has a single terminal building that can handle 200 passengers at a time. The airport has a single runway that is 9,000 feet long and 150 feet wide. The airport is situated at an elevation of 2,536 feet above sea level. The airport is used for both military and civilian purposes. The airport has a single terminal building that can handle 200 passengers at a time. The airport has a single runway that is 9,000 feet long and 150 feet wide. The airport is situated at an elevation of 2,536 feet above sea level. The airport is used for both military and civilian purposes. The airport has a single terminal building that can handle 200 passengers at a time. The airport has a single runway that is 9,000 feet long and 150 feet wide. The airport is situated at an elevation of 2,536 feet above sea level. The airport is used for both military and civilian purposes. The airport has a single terminal building that can handle 200 passengers at a time. The airport has a single runway that is 9,000 feet long and 150 feet wide. The airport is situated at an elevation of 2,536 feet above sea level. The airport is used for both military and civilian purposes. The airport has a single terminal building that can handle 200 passengers at a time. The airport has a single runway that is 9,000 feet long and 150 feet wide. The airport is situated at an elevation of 2,536 feet above sea level. The airport is used for both military and civilian purposes. The airport has a single terminal building that can handle 200 passengers at a time. The airport has a single runway that is 9,000 feet long and 150 feet wide. The airport is situated at an elevation of 2,536 feet above sea level. The airport is used for both military and civilian purposes. The airport has a single terminal building that can handle 200 passengers at a time. The airport has a single runway that is 9,000 feet long and 150 feet wide",
    "image": "",
    "external_url": "https://www.latlong.net/c/?lat=24.751043&long=93.891134",
    "attributes": [
        {
            "trait_type": "Vertex1",
            "value": "24.443157, 93.500820"
        },
        {
            "trait_type": "Vertex2",
            "value": "24.754471, 93.895662"
        },
        {
            "trait_type": "Vertex3",
            "value": "24.758796, 93.898923"
        },
        {
            "trait_type": "Vertex4",
            "value": "24.759732, 93.889697"
        }
    ]
};

// Ensure the metadata folder exists
if (!fs.existsSync(metadataFolderPath)) {
    fs.mkdirSync(metadataFolderPath);
}

fs.writeFileSync(metadataFilePath, JSON.stringify(metadata, null, 2));

console.log('metadata.json file created in the metadata folder');