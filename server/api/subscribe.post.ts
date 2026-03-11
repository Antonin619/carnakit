export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const config = useRuntimeConfig()

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": config.brevoApiKey
    },
    body: JSON.stringify({
      email: body.email,
      listIds: [Number(config.brevoListId)],
      updateEnabled: true
    })
  })

  if (!response.ok) {
    throw createError({
      statusCode: 400,
      statusMessage: "Impossible d'ajouter l'email"
    })
  }

  return { success: true }
})