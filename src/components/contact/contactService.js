export const sendContactForm = async (formData) => {
    const apiUrl = process.env.AZURE_FUNC_API;

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
            console.error("Error from API:", errorData);
            throw new Error(errorData.message || "Something went wrong");
        }

        return await response.json();
    } catch (error) {
        console.error("Error during form submission:", error);
        throw error;
    }
};
