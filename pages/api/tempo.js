async function tempo(request, response){
    const tokkenMelhor_envio = process.env.TOKKEN_MELHOR_ENVIO;

    const dynamicDate = new Date();

    const refreshTokkenResponse = await fetch("www.melhorenvio.com.br/oauth/token")
    refreshTokkenResponse.headers()

    response.json({
        date: dynamicDate.toGMTString(),
        string: 'teste ${tokkenMelhor_envio}'
    })
}
export default tempo;