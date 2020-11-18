import encify from './encify'

const b64txt = encify('base64', 'string');

const encodedText = b64txt.encode('Test'); //             encodedText = "VGVzdA=="
const decodedText = b64txt.decode('VGVzdA=='); //         decodedText = "Test"

const b64json = encify('base64', 'json');
const encodedObj = b64json.encode({ "test": 1 }); //      encodedObj = "eyJ0ZXN0IjoxfQ==" 
const decodedObj = b64json.decode('eyJ0ZXN0IjoxfQ=='); // decodedObj = { "test": 1 }
