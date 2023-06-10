const fastify = require('fastify')({ logger: false })
const fetch = require('cross-fetch');
const tokenWebhook = "ลิ้งก์ Discord WebHook"

fastify.options('*', function (request, reply) {
    reply.send()
})

fastify.addHook('onSend', function (request, reply, payload, next) {
    reply.header('Access-Control-Allow-Origin', '*')
    reply.header('Access-Control-Allow-Headers', '*')
    next()
})

fastify.post('/api/hbd', async (req, res) => {
    const { name, detail, say } = req.body;
    const data = await fetch(tokenWebhook, {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify({
            "content": null,
            "embeds": [
                {
                    "title": `🔮 ${name}`,
                    "description": `อวยพรว่า\n- ${detail}\n\nอยากจะบอกว่า\n- ${say}`,
                    "color": 13934335,
                    "footer": {
                        "text":  new Date().toLocaleString()
                    }
                }
            ],
            "attachments": []
        }),
        "method": "POST"
    });
    if(data && data.status === 200) return res.send({ msg: "ส่งคำอวยพรสำเร็จ", code: 1})
    else return res.send({ msg: "พบข้อผิดพลาดกรุณาลองใหม่อีกครั้งภายหลัง", code: 0})
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 4022 }).then(() => {
            console.log('start @ http://localhost:4022')
        })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()