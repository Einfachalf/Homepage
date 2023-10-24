import { useEffect, useState } from 'react'
import { pipeline } from '@huggingface/transformers'

const initializeModels = async () => {
  try {
    const nlp = pipeline(
      'text-generation',
      (model = 'mistralai/Mistral-7B-Instruct-v0.1')
    )
    return { nlp, error: null }
  } catch (error) {
    return { nlp: null, error }
  }
}

const AiPage = () => {
  const [models, setModels] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    initializeModels().then(result => {
      setModels(result.nlp)
      setError(result.error)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Lade Modell...</div>
  }

  if (error) {
    return <div>Fehler beim Laden des Modells: {error.message}</div>
  }

  return <div>{/* Benutzeroberfläche für die KI-Funktionen */}</div>
}

export default AiPage
