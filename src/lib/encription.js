
// encrypt/decrypt function using a password
export async function encDecRypto(password, text, mode) {
  if (!password || password.trim() === '') {
    throw new Error('Password cannot be empty or consist only of whitespace.');
  }
  const subtle = crypto.subtle;

  const generateKey = async (password, salt) => {
    const encoder = new TextEncoder();
    const passwordData = encoder.encode(password);
    const importedPassword = await subtle.importKey(
      'raw', passwordData, { name: 'PBKDF2' }, false, ['deriveKey']
    );

    return subtle.deriveKey(
      { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
      importedPassword,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  };

  const encrypt = async (key, iv, plaintext) => {
    const encrypted = await subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      new TextEncoder().encode(plaintext)
    );
    return new Uint8Array(encrypted);
  };

  const decrypt = async (key, iv, ciphertext) => {
    const decrypted = await subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      new Uint8Array(ciphertext)
    );
    return new TextDecoder().decode(decrypted);
  };

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await generateKey(password, salt);

  if (mode === 'encrypt') {
    const ciphertext = await encrypt(key, iv, text);
    const output = new Uint8Array(salt.length + iv.length + ciphertext.length);
    output.set(salt, 0);
    output.set(iv, salt.length);
    output.set(ciphertext, salt.length + iv.length);
    return btoa(String.fromCharCode(...output));
  } else if (mode === 'decrypt') {
    const input = Uint8Array.from(atob(text), c => c.charCodeAt(0));
    const salt = input.slice(0, 16);
    const iv = input.slice(16, 16 + 12);
    const ciphertext = input.slice(16 + 12);
    const key = await generateKey(password, salt);
    return decrypt(key, iv, ciphertext);
  } else {
    throw new Error('Invalid mode. Use "encrypt" or "decrypt".');
  }
}

// Example usage
/*
(async () => {
  const password = 'your_password';
  const text = 'your_text';
  const encryptedText = await encDecRypto(password, text, 'encrypt');
  console.log('Encrypted:', encryptedText);

  const decryptedText = await encDecRypto(password, encryptedText, 'decrypt');
  console.log('Decrypted:', decryptedText);
})();
*/
