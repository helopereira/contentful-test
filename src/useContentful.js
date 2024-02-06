import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    });
    
    const getIdols = async () => {
        try{
            const entries = await client.getEntries({
                content_type: "idol", 
                select: "fields"
            });

            const sanitizedEntries = entries.items.map((item) => {
                const idol = item.fields;

                return{
                    ...item.fields,
                }
            })

            return sanitizedEntries
            } catch (error) {
                console.log(`Error fetching idols`)
            }
    };

    return {getIdols};
};

export default useContentful;
