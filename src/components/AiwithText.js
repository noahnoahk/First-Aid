import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiwithText = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyDdNJ_lp36HWLWayhn-nGENZ8fYosU8EeA');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch text insights
     */
    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Generate first aid guide for ${search}  Include descriptive images `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Format the sample text
        const formattedText = formatText(text);

        // Print the formatted text
        console.log(formattedText);

        setResponse(formattedText);
        setLoading(false);
    }

 
    // Function to format the text
    function formatText(text) {
        // Replace double asterisks with bold tags and add line breaks
        let formattedText = text.replace(/(\n\*\*)/g, '<br>');
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        
        // Replace single asterisks with line breaks
        formattedText = formattedText.replace(/\*/g, '<br>');
        
        return formattedText;
    }



    



    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        aiRun();
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <input placeholder='Enter first aid prompt here ' onChange={(e) => handleChangeSearch(e)} />
                <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
            </div>

            {
                loading == true && (aiResponse == '') ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    :
                    <div style={{ margin: '30px 0' }}>
                        {/* <p>{aiResponse}</p> */}
                        <p dangerouslySetInnerHTML={{ __html: aiResponse }}></p>

                    </div>
            }
        </div>
    );
};

export default AiwithText;