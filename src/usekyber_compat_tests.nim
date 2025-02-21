import nim_kyber

# Create Kyber object
var k: Kyber = createRandomKyber();

var ms: KyberSender = createMessageSender(k.publicTable, k.publicKeys);

# Encrypt message
var m: Message = ms.sendString("test"); # Sended string

# Export
writeFile("preset_kyber.txt", k.exportFullKyber())
writeFile("preset_message.txt", m.exportMessage())