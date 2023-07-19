import React from 'react'
import { HeaderWrapper } from './styled'
import Topic from './c-cpns/content-topic'

const LeftHeader = () => {
    return (
        <HeaderWrapper>
            <Topic
                title='价值观之谜｜一窥 SHEIN 技术团队非凡的文化底蕴'
                content='2023 年 4 月，我们得到了一个探访 SHEIN 的机会，并邀请了 5 位来自 SHEIN 产研的小伙伴们，一起聊了聊关于 SHEIN  程序员的那些事，从中一窥 SHEIN 技术团队的独特文化基因。
                学习算法到底有什么用？面试官会如何看待刷题的候选人？实际工作中，最重要的能力是什么？在 SHEIN  工作'
                num='4.4K'
            ></Topic>
            <Topic
                title='那些选择成为程序员的人，毕业后都怎么样了？'
                content='🎓 各位力扣的小伙伴们，又是一年高校毕业季。
                当初的你，是如何走上程序员道路的呢？
                🏫 大学毕业后，你们又都走上了怎样的职业生涯呢？
                现在的你，如果回望当初自己的选择，是什么样的心情呢？
                
                👩‍🎓本次高校毕业季，我们就来一起聊聊：“那些选择成为程序员的人，毕业后都怎么样了？”
                👬 在这个话题下，无论你是应届生，还是毕'
                num='4.2K'
            ></Topic>
        </HeaderWrapper>
    )
}

export default LeftHeader