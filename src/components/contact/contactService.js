export const sendContactForm = async (formData) => {
    const apiUrl = process.env.REACT_APP_AZURE_FUNC_API;

    if (!apiUrl) {
        console.error("Environment variable REACT_APP_AZURE_FUNC_API is not set.");
        return { success: false, message: "API URL not configured." };
    }

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Something went wrong");
        }

        return { success: true };
    } catch (error) {
        console.error("Error during form submission:", error);
        return { success: false, message: error.message };
    }
};
