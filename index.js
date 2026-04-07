import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("Hello~Sumin!")
})

//상품목록 데이터 처리
app.get('/products',(req, res) => {
    const products = [
        {id:1, name:'무선마우스', price:30000},
        {id:2, name:'유선키보드', price:25000}
    ]
    res.json(products); //json 형태로 응답 보내기
})

//body 를 파싱할 미들웨어가 필요 해석비슷한거
app.use(express.json())

//상품등록 처리 
app.post('/products', (req, res) => {
    console.log(req.body); //body가 json 데이터
    // {"id":3, "name":"모니터", "price":12000}
    res.send("상품이 등록되었습니다.")
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 실행 중...`);
    
})
