import { useState } from "react";

const UploadPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const backendURL = "http://10.5.18.118:5000"; // Your Flask server URL

    // Handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Show preview
            setImageFile(file); // Store file for upload
        }
    };

    // Convert image to base64 format
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!imageFile) {
            alert("Please select an image first!");
            return;
        }

        setLoading(true);
        try {
            const base64Image = await convertToBase64(imageFile);
            const response = await fetch(backendURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image: base64Image }),
            });

            const data = await response.json();
            setPrediction(data);
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Upload an Image</h2>

            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

                {selectedImage && (
                    <img src={selectedImage} alt="Preview" className="w-40 h-40 mt-4 rounded-lg" />
                )}

                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Upload & Predict"}
                </button>
            </form>

            {prediction && (
                <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold">Prediction:</h3>
                    <p className="text-lg">Emotion: {prediction.emotion}</p>
                    <p className="text-lg">Confidence: {Math.round(prediction.confidence * 100)}%</p>
                </div>
            )}
        </div>
    );
};

export default UploadPage;
