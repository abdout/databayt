export async function transcribeAudio(audioBlob: Blob): Promise<string> {
    // Create a File object with the correct MIME type
    const audioFile = new File([audioBlob], "recording.webm", {
      type: "audio/webm",
    })
  
    const formData = new FormData()
    formData.append("audio", audioFile)
  
    const response = await fetch("/api/transcribe", {
      method: "POST",
      body: formData,
    })
  
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Failed to transcribe audio")
    }
  
    const data = await response.json()
    return data.text
  }