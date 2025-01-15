export const sendContactForm = async (formData) => {
    const apiUrl = "https://contactformportfolioemail.azurewebsites.net/api/contact-form?code=DZlIhGMNiI817McJvycjp9U9IBmiIduKVx9BFKksvjULAzFunZdr8g%3D%3D";
  
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
      return { success: false, message: error.message };
    }
  };
  