export const sendContactForm = async (formData) => {
    const apiUrl = process.env.AZURE_FUNC_API;

    if (!apiUrl) {
        throw new Error("API URL is not defined in environment variables.");
    }

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Handle non-200 responses
        if (!response.ok) {
            const contentType = response.headers.get("content-type");
            
            // Check if response has JSON content
            if (contentType && contentType.includes("application/json")) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong");
            } else {
                throw new Error(`Unexpected error: ${response.statusText}`);
            }
        }

        // Parse JSON only if the response is not empty
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json(); // If the response has JSON, parse it
        }

        return { success: true }; // Default success response
    } catch (error) {
        return { success: false, message: error.message };
    }
};
