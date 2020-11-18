import encify from './encify'

// Base64 String encoded-decoder
const b64txt = encify('base64', 'string');
const encodedText = b64txt.encode('Test'); //             encodedText = "VGVzdA=="
const decodedText = b64txt.decode('VGVzdA=='); //         decodedText = "Test"

// Base64 JSON encoded-decoder
const b64json = encify('base64', 'json');
const encodedObj = b64json.encode({ "test": 1 }); //      encodedObj = "eyJ0ZXN0IjoxfQ==" 
const decodedObj = b64json.decode('eyJ0ZXN0IjoxfQ=='); // decodedObj = { "test": 1 }

// Http Query serializer-deserializer
const httpQ = encify('httpQuery');
const serializedObj = httpQ.serialize({ "test": 1 }); //  serializedObj = "test=1"
const deserializedObj = httpQ.deserialize("test=1");  //  deserializedObj = { "test": 1 }
