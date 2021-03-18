function tempo(request, response){
    const dynamicDate = new Date();
    Response.json({
        date: dynamicDate.toGMTString()
    })
}
export default tempo;