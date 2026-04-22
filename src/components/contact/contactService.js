export const sendContactForm = async (formData) => {
    const apiUrl = process.env.REACT_APP_CONTACT_API_URL || "https://contact.aliasgar.cloud/contact-form";

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const contentType = response.headers.get("content-type");
            let errorMessage = "Something went wrong";
            if (contentType && contentType.includes("application/json")) {
                const errorData = await response.json();
                errorMessage = errorData.error || errorMessage;
            }
            throw new Error(errorMessage);
        }

        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
