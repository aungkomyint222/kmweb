'use client'
import React, { useState } from 'react';
import { Copy, Lock, Unlock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CryptoJS from 'crypto-js';
const CryptoComponent = () => {
  const [inputText, setInputText] = useState("");
  const [password, setPassword] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const encryptText = () => {
    const ciphertext = CryptoJS.AES.encrypt(inputText, password).toString();
    setEncryptedText(ciphertext);
  };

  const decryptText = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, password);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(originalText);
    } catch (error) {
      setDecryptedText("Decryption failed. Please check your password.");
    }
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <>
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Secret Machine
        </h1>

        <Tabs defaultValue="encrypt" className="w-full">
        <TabsList className="flex w-full bg-gray-800 p-1.5 rounded-xl">
  <TabsTrigger 
    value="encrypt" 
    className="flex items-center gap-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-lg py-2.5 transition-all flex-grow justify-center"
  >
    <Lock className="w-5 h-5" /> Encrypt
  </TabsTrigger>
  <TabsTrigger 
    value="decrypt" 
    className="flex items-center gap-2 data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-lg py-2.5 transition-all flex-grow justify-center"
  >
    <Unlock className="w-5 h-5" /> Decrypt
  </TabsTrigger>
</TabsList>


          <TabsContent value="encrypt" className="space-y-6 mt-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Message to Encrypt</label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full h-40 p-4 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter your secret message..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Encryption Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter strong password"
              />
            </div>

            <button
              onClick={encryptText}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.01]"
            >
              Encrypt Message
            </button>

            {encryptedText && (
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">Encrypted Message</label>
                <div className="relative group">
                  <textarea
                    value={encryptedText}
                    readOnly
                    className="w-full h-40 p-4 pr-12 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 resize-none"
                  />
                  <button
                    onClick={() => copyToClipboard(encryptedText)}
                    className="absolute right-3 top-3 p-2 text-gray-400 hover:text-blue-500 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="decrypt" className="space-y-6 mt-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Encrypted Message</label>
              <textarea
                value={encryptedText}
                onChange={(e) => setEncryptedText(e.target.value)}
                className="w-full h-40 p-4 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Paste encrypted message here..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Decryption Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter decryption password"
              />
            </div>

            <button
              onClick={decryptText}
              className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.01]"
            >
              Decrypt Message
            </button>

            {decryptedText && (
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">Decrypted Message</label>
                <div className="relative group">
                  <textarea
                    value={decryptedText}
                    readOnly
                    className="w-full h-40 p-4 pr-12 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 resize-none"
                  />
                  <button
                    onClick={() => copyToClipboard(decryptedText)}
                    className="absolute right-3 top-3 p-2 text-gray-400 hover:text-blue-500 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
    </>
  );
};

export default CryptoComponent;