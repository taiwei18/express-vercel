const EXPRESS=require('express')
const router=EXPRESS.Router()
//小说论坛
let forumList=[
    {
        type:1,//小说论坛
        forumId:0,
        name:"小说论坛",
        img:"/static/photos/other-210519183821-BenC.jpg",
        info:"倘若说世上存在有一百部神作，那么屎作的数目便是其十倍之多。Bug、Error、模型崩坏、自相矛盾的剧本……阴影覆盖于这类大众所忌讳与后悔购买的游戏之上。有一名少年格外喜爱那类屎作，他因为一个小小的契机，而向大众所认可的神作发起挑战自此，以少年为中心的游戏与现实都开始发生变化。但是少年今日也在对神作的规格而惊叹不已。「遭敌率居然在常识范围内，这是神作吗……」"
    },
    {
        type:1,//小说论坛
        forumId:1,
        name:"叹息的亡灵想引退",
        img:"/static/photos/other-220213234448-nf59.jpg",
        info:";lhfghh"
    }
]
//独立论坛
let independentList=[
    {
        type:2,//独立论坛
        forumId: 4,
        name:"独立论坛",
        img:"/static/photos/other-210922193623-dSLZ.jpg",
        info:"真白萌 综合讨论区 文明交流，勿争吵引战，谢绝政治等敏感话题。禁止无意义纯水。"
    },
    {
        type:2,//独立论坛
        forumId:3,
        name:"烤肉区",
        img:"/static/photos/other-210616185305-u9it.jpg",
        info:"不想申请开版和独立论坛的翻译可以丢在这里。新来的翻译注意置顶帖，发书时及时在书目帖内登记。"
    }
]
router.get('/forumList',(req, res)=>{
    console.log('拦截get,准备发送',forumList)
    res.send(forumList)
})
//post拦截
router.post('/forumList',(req, res)=>{
    console.log('拦截post')
    if (req.body.type===1){
        res.send(forumList)
    }else{
        res.send(independentList)
    }
})
module.exports=router